# syntax=docker/dockerfile:1
FROM ruby:3.1.0
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - 
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /fender
COPY Gemfile /fender/Gemfile
COPY Gemfile.lock /fender/Gemfile.lock
RUN bundle install

# Setup packages for React
COPY package.json /fender/package.json
COPY yarn.lock /fender/yarn.lock
RUN npm install --global yarn
RUN yarn install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["bin/webpack-dev-server"]
CMD ["rails", "server", "-b", "0.0.0.0"]