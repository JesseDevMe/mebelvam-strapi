# Creating multi-stage build for production
FROM node:18

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 1337
CMD ["npm", "run", "start"]
