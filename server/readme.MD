# hackjack

add .env file with the following info

```
NODE_ENV=<development or production>
APP_NAME=<name of app>
PORT=<integer>
MONGO_URI=<mongodb connection string>
```

to deploy to gcp, add a .env.yaml file with the following info

```
runtime: nodejs14
service: default
env_variables:
  NODE_ENV: "<development or production>"
  APP_NAME: "<>"
  MONGO_URI: "<>"
```