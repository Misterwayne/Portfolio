const jwt = require('jsonwebtoken');
const Pool = require('pg');

const jwtKey = 'my_secret_key';
const jwtExpirySeconds = 300


const pool = new Pool.Pool({
  user: 'mwane',
  host: 'db-server',
  database: 'psql',
  password: 'MWANE',
  port: 5432
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error(
        'Error acquiring client', err.stack)
  }
  console.log("Connected to Database !!!!")
  pool.query(`CREATE TABLE "users" (
            id INT,
            username VARCHAR(20),
            password VARCHAR(20),
            email VARCHAR(20)
          );`,
    (err, res) =>{
      release();
      if (err)
      {
          return;
      }
      console.log('Table "users" created');
      pool.query(`INSERT INTO users (id, username, password, email)
                  VALUES (1, 'Malick', '1234', 'mwane@student.42.fr');`, (err, res) => {
        if (err)
        {
            console.log(err);
            return;
        }
        console.log(`User "Malick" added`);
      })
    })
})

var tmp = "";

const setOutput = (rows) => {
  tmp = rows;
  console.log(tmp);
}

const register = async (res, req) => {
  const { username, password, email} = req.body;
  console.log(username)
  console.log(password)
  console.log(email)
  if (!username || !password || !email)
    return res.status(402).end();
  try {
      pool.query(`INSERT INTO users (id, username, password, email)
      VALUES (${id}, '${username}', '${password}', '${email}');`, (err, res) => {
      if (err)
      {
        console.log(err);
        return;
      }
      console.log(`User ${username} added`);
      })
  }
  catch (e){
    console.log(e);
    return res.status(402).end();
  }
}


const signIn = async (req, res) => {
  const { username, password } = req.body
  try {
    const data = await pool.query(`Select password from users WHERE username='${username}'`)
    if (data){
      setOutput(Object.values(data.rows[0]));
    }
  }
  catch (e)
  {
    console.error(e);
  }
  console.log(`tmp = ${tmp} | password = ${password}`)
  if (tmp != password) {
      // return 401 error is username or password doesn't exist, or if password does
      // not match the password in our records
      console.log('failed to connect');
      return res.status(401).end()
  }
    // Create a new token with the username in the payload
    // and which expires 300 seconds after issue
  const token = jwt.sign({ username }, jwtKey, {
      algorithm: 'HS256',
      expiresIn: jwtExpirySeconds
  })
    // set the cookie as the token string, with a similar max age as the token
    // here, the max age is in milliseconds, so we multiply by 1000
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials',true);
  res.header('Access-Control-Allow-Credentials', "POST");
  res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
  console.log("Logged in !!");
  res.end();
}

const welcome = (req, res) => {
  // We can obtain the session token from the requests cookies, which come with every request
  const token = req.cookies.token

  console.log("check if logged");
  // if the cookie is not set, return an unauthorized error
  if (!token) {
    console.log("failed to log");
    return res.status(401).end()
  }

  var payload
  try {
    // Parse the JWT string and store the result in `payload`.
    // Note that we are passing the key in this method as well. This method will throw an error
    // if the token is invalid (if it has expired according to the expiry time we set on sign in),
    // or if the signature does not match
    payload = jwt.verify(token, jwtKey)
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      return res.status(401).end()
    }
    // otherwise, return a bad request error
    return res.status(400).end()
  }

  // Finally, return the welcome message to the user, along with their
  // username given in the token
  console.log("Welcome ", payload.username);
  res.send(`Welcome ${payload.username}!`)
}

const refresh = (req, res) => {
  // (BEGIN) The code uptil this point is the same as the first part of the `welcome` route
  const token = req.cookies.token

  if (!token) {
    return res.status(401).end()
  }

  var payload
  try {
    payload = jwt.verify(token, jwtKey)
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      return res.status(401).end()
    }
    return res.status(400).end()
  }
  // (END) The code uptil this point is the same as the first part of the `welcome` route

  // We ensure that a new token is not issued until enough time has elapsed
  // In this case, a new token will only be issued if the old token is within
  // 30 seconds of expiry. Otherwise, return a bad request status
  const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
  if (payload.exp - nowUnixSeconds > 30) {
    return res.status(400).end()
  }

  // Now, create a new token for the current user, with a renewed expiration time
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: 'HS256',
    expiresIn: jwtExpirySeconds
  })

  // Set the new token as the users `token` cookie
  res.cookie('token', newToken, { maxAge: jwtExpirySeconds * 1000 })
  res.end()
}

const logout = (req, res) => {
  res.cookie('token', '', { maxAge: 0 })
  // console.log("logout")
  res.end()
}

module.exports = {
  signIn,
  welcome,
  refresh,
  logout,
  register
}