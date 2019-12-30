FROM node:lts-alpine AS vue-cli
RUN npm install -g @vue/cli
WORKDIR /app
USER 1000:1000

FROM vue-cli AS app
COPY package.json yarn.lock .
RUN yarn install
COPY . .
CMD ["yarn", "run", "dev"]

