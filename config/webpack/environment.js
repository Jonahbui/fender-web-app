const { environment } = require('@rails/webpacker')

module.exports = environment
if (process.env.RAILS_ENV != 'production') environment.splitChunks()