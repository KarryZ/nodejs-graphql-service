# nodejs-graphql-service

## Running the app

1) To start using this app, you need to install and run Docker with Mogodb and Microservices app.

    - Install Docker and run it with Mongodb:
    https://hub.docker.com/_/mongo

    - Clone and run an app with microservices:
    https://github.com/rolling-scopes-school/node-graphql-service

    - Register in apollographql to make requests to service:
    https://studio.apollographql.com/login?from=%2F


2) Open repository of this app and run commands below:


```
# development
    npm install
    npm run start:dev

```

3) Open your profile in apollo studio. Example of url:
    https://studio.apollographql.com/org/YOUR-LOGIN/graphs

4) Start using service:

   1.The first you need to do is regist your user:
    - open mutation and choose registerUser. Put code below in the variables field:
        ```
        {
        "firstName": "first name",
        "lastName": "last name",
        "password": "118649qwe",
        "email": "met9129@gmail.com",
        "favouriteArtistIds": ["62aef8e2cbabce5a0bdc0a26"]
        } 
        ```
    2. Now you need to log in. 
        - Remove old mutation and choose muation getJWT.
        - Put code below in the variables field:
    
        ```
        {
            "email": "met9129@gmail.com",
            "password": "118649qwe"
        }       

        ```
        - Set Headers to authorize. Put as key ```Authorization``` and as value ```Bearer and your jwt string```:
      ![image](https://user-images.githubusercontent.com/17831035/177786947-7a586f91-aedf-4965-9579-89b36161f3ff.png)


    




