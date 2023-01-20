# Dockerfile for a multi-stage build of the app, the first container using Node.js to build, whereas the latter stores the generated files for Nginx

# ========== BUILDER ==========
FROM node:16 as builder
LABEL stage=builder

# Copy the files for dependencies, so we can install those first and use Docker caching to speed up builds
WORKDIR /workspace
COPY package.json /workspace/package.json
#COPY package-lock.json /workspace/package-lock.json
RUN npm install

# Copy the source
COPY . /workspace
COPY ./nginx.conf /etc/nginx/nginx.conf
# Make sure target directory for compiled files is empty
RUN rm -rf /workspace/target && mkdir /workspace/target
# Build app
RUN npm run build

# To make sure that front end is building correctly
RUN echo "Front end resources after build:"
RUN ls -l target/

# ========== RUNNER ==========
# Simple Nginx image that contains the built front end files and will proxy API requests further
FROM nginx

# Copy files from builder
WORKDIR /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /workspace/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /workspace/dist/mundial /usr/share/nginx/html
COPY --from=builder /workspace/dist/mundial /var/www/html

CMD ["nginx", "-g", "daemon off;"]
# Health check example, different values can be specified when running
HEALTHCHECK --interval=20s --timeout=20s --retries=3 --start-period=120s CMD curl --fail http://127.0.0.1:80 | grep "Welcome to my app!" || exit 1"