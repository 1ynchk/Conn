# Описание
Данная ветка была создана для того чтобы проверять конфигурацию сборки.

# Установка
После этих настроек, веб-приложение будет доступно по хосту сервера.
```
git init
git remote add origin https://github.com/1ynchk/Conn.git
git pull origin dev-deploy

touch .env
echo $'DB_NAME=<db name> \nDB_HOST=<db host> \nDB_PORT=<db port> \nDB_PASSWORD=<db password> \nDB_USER=<db user>' > .env 

cd backend/backend
git init
git remote add origin https://github.com/1ynchk/Conn.git
git pull origin backend

cd ../../frontend/frontend
git init
git remote add origin https://github.com/1ynchk/Conn.git
git pull origin frontend

cd ../..
docker-compose --env-file=.env up
```

