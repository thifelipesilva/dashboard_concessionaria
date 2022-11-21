FROM node:16
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
ENV PORT 8000
EXPOSE $PORT
CMD ["npm", "run", "dev"]