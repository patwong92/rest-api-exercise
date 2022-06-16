FROM node:16.15.1 as builder
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:16.15.1
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start"]