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
* [References](#references)
* [Errors](#errors)
* [Authors](#authors)


## Local Installation
1. Clone the repo to local machine
2. Install [Docker](https://www.docker.com/get-started) and complete its setup process
3. In the directory of the local repo, run:
```
docker-compose build
```
4. If the build succeeds, run:
```
docker-compose up
```
5. The database has not been created yet. Do so by first attaching a shell to the docker container. Easy way to attach a shell is by calling the following [powershell script](#development-notes):
```
.\docker.ps1
```
6. After the shell attaches to the container, issue out the following command while the container is running:
```
rails db:create db:migrate db:seed
```
7. DONE
8. If you get the error
```
Webpacker::Manifest::MissingEntryError in ...
```
then you need to run:
```
rails webpacker:install
rails webpacker:install:react
```


## Production Deployment
TBA


## Testing
To execute test cases, run the following inside the docker container:
```
bundle exec rspec
```


## Development Notes
- Set indentation to 2 spaces for consistency
- Press CTRL+C to forcefully shutdown the rails application
- Ensure all files have the UNIX file endings, LF, or else you may not be able to start the application
- A powershell script is attached that will allow you to attach a shell to a docker container. Just run:
```
.\docker.ps1
```
- If you are running the application windows and would like to use powershell scripts, ensure your 
windows device has its [execution policy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.2) set to run scripts.
- Compilation of js-code, as it is served to the web-client, is BEYOND slow. Should find a way to speed up the process. Might be because there are too many needless dependencies. Should find a way to remove or filter them out. Material-UI might be  the biggest culprit.
- For those who have never used docker, DO NOT deploy this website on a web-hosting service. You should just build it from the ground up.


## Application Info
* Ruby version: 3.1.0
* Database: postgresql
* Although not implemented, the website can be hosted on Droplet by Digital Ocean.


## Dependencies
* [Material-UI](https://mui.com/)
* [Roboto-font](https://fonts.google.com/specimen/Roboto)
* [react-rails](https://github.com/reactjs/react-rails)
* [Webpacker](https://rubygems.org/gems/webpacker/versions/0.1)
* [Delayed Job](https://github.com/collectiveidea/delayed_job)
* [Devise](https://github.com/heartcombo/devise)


## References
* [Rails Guide](https://guides.rubyonrails.org/index.html)
* [React Guide](https://reactjs.org/docs/)
* [React for Rails](https://github.com/reactjs/react-rails)
* [Docker for Rails](https://docs.docker.com/samples/rails/)
* [Dockerfile](https://docs.docker.com/engine/reference/builder/)

## Errors
### JSON::ParserError
```
/usr/local/lib/ruby/3.1.0/json/common.rb:216:in `parse': 859: unexpected token at '' (JSON::ParserError)
```
This can be fixed by running:
```
docker-compose run web rails webpacker:clobber
```

## Authors
### FALL 2021 - SPRING 2022
- Jonah Bui
- Ian Klobe
- Anh Tran
- Burhanuddin Chinwala
- Connor Dominguez
