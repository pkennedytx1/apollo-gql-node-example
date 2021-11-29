### GraphQL Apollo and Node API Example
Hello, this week we are going to take a look at an alternative to the typical node, express, and mongose setup and take stab at something a bit newer and streamlined. Always know there are many flavors of the same technology. This still implements the basics: An API, a database, and and ORM to bridge the two.

## Getting Started
Install packages
```yarn```

Build docker container locally
```docker-compose build```

Run docker container locally
```docker-compose up```

## Running the API on local (not in a Docker container)
Install packages with yarn like above.

Replace the host.docker.internal:1234 with localhost:4000 in the .env file within the DATABASE_URL value.

Run the db image only
```yarn rundb```

In a new terminal tab navigate to the root directory of the project and run
```yarn dev```