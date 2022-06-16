FROM node:16.15.1 as builder
COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM nginx:alpine
EXPOSE 80
COPY --from=builder /app/dist/client /usr/share/nginx/html