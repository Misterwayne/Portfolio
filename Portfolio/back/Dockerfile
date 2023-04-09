FROM	node:16-alpine3.14

WORKDIR	/app
RUN     apk update && apk add bash npm
RUN		npm install express axios cookie-parser jsonwebtoken nodemon pg pg-hstore
RUN     npm install -g cors


COPY	./package.json ./
COPY	./package-lock.json ./
COPY	./tsconfig* ./

COPY	./ ./

RUN     npm install -g pg
RUN     npm install -g pg-hstore

RUN		npm install --force


EXPOSE	3001

CMD		npm start