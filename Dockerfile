FROM node:lts-alpine
RUN mkdir /app && chown 1000:1000 /app
WORKDIR /app
# Install the cli that will be used for bootstrapping the project
# RUN yarn global add ...
USER 1000:1000
# Run the development server
CMD ["yarn", "run", "start"]