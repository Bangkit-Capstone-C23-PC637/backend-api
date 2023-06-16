# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy all the files from the current directory to the container
COPY . .

# Set the environment variable for the port
ENV PORT=8080

# Expose the port to the outside world
EXPOSE $PORT

# Start the server
CMD ["npm", "start"]