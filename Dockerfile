FROM ruby:2.3.3

RUN gem install bundler

RUN gem install launchy -v 2.4.3

RUN gem install faraday -v 1.0.1

RUN gem install nokogiri -v 1.10.10

RUN gem install opencode_theme
