FROM node:8.12.0

# Create app directory
WORKDIR /home/primodeckers/repository/extract-csv/frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

COPY ./package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source

COPY . .

EXPOSE 8080



CMD [ "npm", "run", "serve" ]