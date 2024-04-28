# Australian Cattle Dog Website

This repository contains the source code for a simple website dedicated to providing information about the Australian Cattle Dog breed. 

## Features
- Home page with a welcome message
- Subpages for:
  - About the Breed: Information about the history, characteristics, and temperament of the Australian Cattle Dog breed.
  - Care Guide: Comprehensive guidelines for nurturing and caring for Australian Cattle Dogs.
  - Gallery: Captivating images showcasing the beauty and personality of Australian Cattle Dogs.

## Running with Docker
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
