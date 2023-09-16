FROM node:16-alpine
WORKDIR /opt/frontend
ADD *.json ./
RUN npm ci
ADD . .
RUN npm run build
CMD ["node", "./server/index.js"]