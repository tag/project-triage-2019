Use `docker-compose build app` to build this docker image, when in this project
directory.

Use `docker-compose up` from the project directory to run the container.

After running this image, the web page should be visible at http://localhost:8080/

The file `docker-compose.yml` maps the container's port 80 (default web port) to
the host's (that's your machine's) port 8080 with the `ports` command.

The `volumes` command in `docker-compose.yml` maps the your folder `app` to the
container's `\srv\app\` folder. Changes made in one place will be made in the
 other.

 The key combo `ctrl-C` will kill the container.

# File paths
Application code will go in `app`.

Publicly viewable pages will go in `app/public`


# `.dockerignore` File
Read the following [explaition of the `.dockerignore` file](https://blog.codeship.com/leveraging-the-dockerignore-file-to-create-smaller-images/)
Create a `.dockerignore` file with at least the following

    .*
    docker-compose.yml
    *.md
