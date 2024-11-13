FROM node:20.12-alpine3.19 as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:20.12-alpine3.19 as serve

WORKDIR /app

COPY --from=build /app/build ./build

RUN npm i -g serve

EXPOSE 80

CMD serve -s build -l 80