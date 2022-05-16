FROM node:18-alpine

# Working directory
WORKDIR /usr/src/app

# Copy files into the working directory
COPY . .

# Installing dependencies
RUN npm install

# Exposing the API port
EXPOSE 8080

CMD ["npm", "start"]
