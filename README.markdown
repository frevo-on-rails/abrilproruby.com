# Abril Pro Ruby 2014

Source of the main website for [Abril Pro Ruby 2014](http://abrilproruby.com/) conference.

## Set up

1. Make sure you have Ruby 2.0.0 and the `bundler` gem. Type in a terminal:

        $ ruby -v
        ruby 2.0.0...
        $ gem install bundler

2. Run the `bundle install` command to install all the dependencies.

        $ bundle install

3. Run the middleman.

        $ bundle exec middleman

4. The site is available in the address `http://localhost:4567`.

## Build and publish

1. To publish the website simply run:

        $ bundle exec middleman deploy

This command will build and deploy the website to Github Pages.

## Credit

Design and front-end by [Guava Software](http://guava.com.br/).
