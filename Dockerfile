FROM node
WORKDIR /usr/src/Web_App
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 7000
CMD node index.js