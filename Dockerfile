FROM node:20.18-bullseye-slim

WORKDIR /home/api/node/todo-list-treino-nodejs

COPY . .

RUN rm -rf node_modules
RUN npm install -g pnpm
RUN pnpm i
RUN npx prisma generate

EXPOSE ${PORT}