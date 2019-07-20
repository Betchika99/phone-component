FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN npm install
# RUN npm install --only=production

COPY *.config.js ./
COPY server ./server/
COPY src ./src/
COPY public/index.html ./public/
COPY public/main.css ./public/

EXPOSE 3001
CMD ["npm", "start"]