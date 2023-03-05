FROM node:19-alpine AS builder

WORKDIR /app

COPY ./package.json .
COPY ./tsconfig.json .
COPY ./src .

RUN npm install
RUN npm run build

FROM node:19-alpine AS final
WORKDIR /app
COPY --from=builder ./app/dist ./app
COPY ./package.json .

RUN npm install --production

EXPOSE 8080

CMD [ "npm", "start" ]
