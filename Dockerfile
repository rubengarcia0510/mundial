FROM node:16 as dev

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
RUN --mount=type=cache,target=./node_modules/.cache/webpack npm run build

FROM bitnami/nginx
#COPY --from=dev /usr/src/app/build /app
COPY --from=dev /usr/src/app/dist/mundial /app
EXPOSE 8080

-----------------------

# Dockerfile for a multi-stage build of the app, the first container using Node.js to build, whereas the latter stores the generated files for Nginx

# ========== BUILDER ==========
FROM node:16 as builder
LABEL stage=builder

# Copy the files for dependencies, so we can install those first and use Docker caching to speed up builds
WORKDIR /workspace
COPY package.json /workspace/package.json
COPY package-lock.json /workspace/package-lock.json
RUN npm install

# Copy the source
COPY . /workspace
# Make sure target directory for compiled files is empty
RUN rm -rf /workspace/target && mkdir /workspace/target
# Build app
RUN your-stack-cli build

# To make sure that front end is building correctly
RUN echo "Front end resources after build:"
RUN ls -l target/

# ========== RUNNER ==========
# Simple Nginx image that contains the built front end files and will proxy API requests further
FROM nginx

# Copy files from builder
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /workspace/target /usr/share/nginx/html

# Health check example, different values can be specified when running
HEALTHCHECK --interval=20s --timeout=20s --retries=3 --start-period=120s CMD curl --fail http://127.0.0.1:80 | grep "Welcome to my app!" || exit 1"