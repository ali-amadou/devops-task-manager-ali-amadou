# Use Node.js 18 
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy app
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]