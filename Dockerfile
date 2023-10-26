FROM node:18-alpine as base

WORKDIR /app
COPY ./package*.json .
RUN yarn 
COPY . .

CMD ["yarn", "dev"]
