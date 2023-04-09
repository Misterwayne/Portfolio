FROM	node:16-alpine3.14

WORKDIR	/app

COPY	./package.json ./
COPY	./package-lock.json ./

RUN     apk update && apk add bash npm

RUN		npm install --force

COPY	./ ./

EXPOSE	3000

CMD		npm start