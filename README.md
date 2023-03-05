It's a simple example of restful application using Express and MongoDB
## Common Setup
```bash
$ git clone git@github.com:IlliaShev/restful-service.git
$ cd restful-service
$ npm install
$ npm run build
$ npm start
```
### You can also run application using docker-compose
```bash
$ docker compose up
```
## Config application
Wrtie configs in .env file. Here's the example:
```
PORT=8080
DB_USERNAME=sa
DB_PASSWORD=sa
DB_HOST=localhost
DB_PORT=27017
DB_NAME=rest
```
To provide config file in docker-compose.yml under the appropriate service
```
env_file:
      - .env.dev
```
## DockerHub
You can pull image from DockerHub using following command
```bash
$ docker pull shevchyk/restful-service:latest
```