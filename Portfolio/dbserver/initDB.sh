docker build -t db-client .
docker run -it -p 4000:80 -e PGADMIN_DEFAULT_EMAIL=mwane -e PGADMIN_DEFAULT_PASSWORD=MWANE db-client