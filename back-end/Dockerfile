# pull the official base image
FROM node:12-alpine
# set working direction
WORKDIR /app
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# exposing port
EXPOSE 3001
# start app
CMD ["npm", "start"]