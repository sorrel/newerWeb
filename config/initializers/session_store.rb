# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_hurwoodweb_session',
  :secret      => 'aed2a05aaa44b3cc9a174531552e3840330118eccdcdaaf56f5037fb766d99af86171c7e9946d463ee557ee63bd1c75bfed390d59817c65edeec9222e1018121'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
