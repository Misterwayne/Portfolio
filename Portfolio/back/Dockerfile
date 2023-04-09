FROM	node:16-alpine3.14

WORKDIR	/app
RUN     apk update && apk add bash npm
RUN		npm install express axios cookie-parser jsonwebtoken nodemon pg 
RUN     npm install -g cors


COPY	./package.json ./
COPY	./package-lock.json ./
COPY	./tsconfig* ./

RUN		npm install --force

RUN      npm install -g n
RUN      npm install -g bash && n stable
RUN      n 16.19.1

COPY	./ ./

EXPOSE	3001

CMD		npm start