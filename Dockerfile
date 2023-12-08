
FROM node:18.14.2
WORKDIR /app
COPY . .
EXPOSE 4000
CMD ["node", "server.js"]
