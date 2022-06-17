# rest-api-exercise

## How to run the application

- Install Docker if you have not done so.
- To confirm if you have docker installed in your terminal, run `docker`
  - You should be able to see the list of options and commands
- Make sure Docker is on. One way to check this is to open Docker Desktop
- On the directory that contains the `docker-compose.yml` file, run `docker-compose build --pull`
  - This will build the images for the server and the client
- Run `docker-compose up -d` to start the application
- To stop the application, run `docker-compose stop`
  - If you want to stop and remove the client and server containers, run `docker-compose down`
