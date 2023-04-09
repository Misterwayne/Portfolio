FROM	node:16-alpine3.14

WORKDIR	/app

COPY	./package.json ./
COPY	./package-lock.json ./

RUN     apk update && apk add bash npm

RUN		npm install --force

RUN      npm install -g n
RUN      n stable
RUN      n 16.19.1

COPY	./ ./

EXPOSE	3000

CMD		npm start