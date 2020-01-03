FROM node:lts-alpine
USER 1000:1000
RUN mkdir /home/node/app
WORKDIR /home/node/app
# Run the development server
CMD ["yarn", "run", "start"]