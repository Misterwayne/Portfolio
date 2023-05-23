FROM	node:16-alpine3.14

WORKDIR	/app

COPY	./package.json ./
COPY	./package-lock.json ./

RUN     apk update && apk add bash npm

COPY	./ ./


RUN		npm install --force


EXPOSE	3000

CMD		npm start