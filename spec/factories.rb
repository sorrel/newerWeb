# By using the symbol ':blog', we get Factory Girl to simulate the Blogs model.
Factory.define :blog do |blog|
  blog.author     "Michael Hartl"
  blog.tags       "Test testing starting"
  blog.title      "A first title for testing"
  blog.post       "The moves show how an entire ecosystem of new hardware is ready to spring up around new Apple products. While Apple in recent years has spawned cottage industries of new software businesses -- particularly around its iTunes App Store -- the accessory business around its gadgets has also thrived and driven the growth of many third-party manufacturers. According to Piper Jaffray & Co. estimates iPod and iPhone accessory sales -- including cases, headphones and chargers -- totaled about $3.7 billion world-wide in 2009."
end