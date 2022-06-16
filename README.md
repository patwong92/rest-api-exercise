# rest-api-exercise

## How to run the application ##
- Install [Docker](https://docs.docker.com/get-docker/) if you have not done so.
- To confirm if you have docker installed, run `docker` on your terminal
  - You should be able to see the list of options and commands
- On the directory that contains the `docker-compose.yml` file, run `docker-compose build --pull`
  - This will build the images for the server and the client
- Run `docker-compose up -d` to start the application
- To stop the application, run `docker-compose stop`
