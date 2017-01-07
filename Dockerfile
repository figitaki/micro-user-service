from node:boron

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
ADD package.json /src
RUN npm install

# Install nodemon
RUN npm install -g nodemon

# Bundle app source
ADD ./app /src/app

EXPOSE 8080
CMD ["npm", "start"]
