FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN rm -rf node_modules
RUN npm cache clean --force
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3002
# Start the app
CMD [ "yarn", "start" ]