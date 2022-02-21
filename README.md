# Fender

## Purpose
This web application is used to operate the FENDER located at The University of Texas at Arlington (UTA). It will accept delivery requests to different rooms located in the Engineering Research Building (ERB).

## Table of Contents
* [Local Installation](#local-installation)
* [Production Deployment](#production-deployment)
* [Testing](#testing)
* [Development Notes](#development-notes)
* [Application Info](#application-info)
* [Dependencies](#dependencies)
* [Authors](#authors)

## Local Installation
1. Clone the repo to local machine
2. Install Docker
3. In the local repo, run:
```
docker-compose build
```
4. If the build succeeds, run:
```
docker-compose up
```
5. The database has not been created yet. Do so by first attaching a shell to the docker container. The provided way to do so is:
```
./docker.sh
```
6. After the shell attaches to the container, issue out the following commands:
```
rake db:create
rake db:migrate
```
## Production Deployment

## Testing

## Development Notes
- Set indentation to 2 spaces for consistency
- Run the following to shutdown the rails application
- Ensure all files have the UNIX file endings, LF, or else you may not be able to start the application
```
docker-compose down
```
## Application Info
* Ruby version: 3.1.0
* Database: postgresql

### Dependencies
* MUI
* Roboto-font
* React-rails
* Webpacker

## Authors
### FALL 2021 - SPRING 2022
- Jonah Bui
- Ian Klobe
- Anh Tran
- Burhanuddin Chinwala
- Connor Dominguez
