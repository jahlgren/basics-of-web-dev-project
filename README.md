# Australian Cattle Dog Website

This repository contains the source code for a simple website dedicated to providing information about the Australian Cattle Dog breed. 

![Home Page](public/images/home-screenshot.jpg?raw=true)

## Features
- Home page with a welcome message
- Subpages for:
  - About the Breed: Information about the history, characteristics, and temperament of the Australian Cattle Dog breed.
  - Care Guide: Comprehensive guidelines for nurturing and caring for Australian Cattle Dogs.
  - Gallery: Captivating images showcasing the beauty and personality of Australian Cattle Dogs.

## Getting Started
To get started with this project, you can follow these steps:

### Cloning the Repository
You can clone this repository to your local machine using the following command:
```
git clone https://github.com/jahlgren/basics-of-web-dev-project.git
```

### Running with Docker
To run the website using Docker, follow these steps:

1. Build the Docker image:
   ```
   docker build -t acd-website .
   ```
2. Run the Docker container:
   ```
   docker run -p 3000:3000 acd-website
   ```
This will start the website on port 3000 of your local machine. You can access it in your web browser at http://localhost:3000

### Running without Docker
If you prefer not to use Docker, you can run the project directly using npm. First, navigate to the project directory:
```
cd basics-of-web-dev-project
```
Then, install the dependencies:
```
npm install
```
Finally, start the server:
```
npm start
```
This will start the website, and you can access it in your web browser at http://localhost:3000

### Development Mode
If you want to run the project in development mode with hot reloading, you can use the following command:
```
npm run dev
```
This will start the development server with hot reloading enabled, allowing you to make changes to the code and see them reflected immediately in the browser.
