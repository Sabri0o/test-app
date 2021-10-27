# Stage 1
# pull the official base image
FROM node:12-alpine as build-stage
# set working direction
WORKDIR /app
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./

RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 8080

CMD nginx -g 'daemon off;'

