FROM node:16-slim as BUILDER
LABEL maintainer="Maxwell Anderson"

WORKDIR /app

COPY package*.json .
RUN npm install

COPY src ./src

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /app

COPY --from=BUILDER /app .

EXPOSE 3000

CMD ["npm", "start"]