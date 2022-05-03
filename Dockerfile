#FROM node:16 as dev

#WORKDIR /usr/src/app

#COPY package*.json .
#RUN npm install

#COPY . .
#RUN --mount=type=cache,target=./node_modules/.cache/webpack npm run build

#FROM bitnami/nginx
#COPY --from=dev /usr/src/app/build /app
#EXPOSE 8080

### STAGE 1: Build ###
FROM node:16 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/mundial /usr/share/nginx/html
EXPOSE 8080