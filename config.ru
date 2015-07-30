# Require config/environment.rb
require ::File.expand_path('../config/environment',  __FILE__)

web: bundle exec shotgun config.ru -p $PORT

set :app_file, __FILE__

run Sinatra::Application
