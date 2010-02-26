require 'spec_helper'

describe BlogsController do
  integrate_views
  
  describe "GET 'show' and 'index'" do
    
    before(:each) do
        @attr = 
        {
          :name => "Example User",
          :title => "This is a test title",
          :tags => "testing test working?",
          :post => "The moves show how an entire ecosystem of new hardware is ready to spring up around new Apple products. While Apple in recent years has spawned cottage industries of new software businesses -- particularly around its iTunes App Store -- the accessory business around its gadgets has also thrived and driven the growth of many third-party manufacturers. According to Piper Jaffray & Co. estimates iPod and iPhone accessory sales -- including cases, headphones and chargers -- totaled about $3.7 billion world-wide in 2009."
        }
        
        4.times {Blog.create!(@attr)}
      end

    it "should be successful" do
      get :index
      response.should be_success
    end
    
    it "should have the right title" do
      get :index
      response.should have_tag("title", "All the blogs")
    end
    
    it "should be successful" do
      get :show, :id => 4
      response.should be_success
    end
    
    it "should have the right title" do
      get :show, :id => 4
      response.should have_tag("title", @attr => :title)
    end 
    
  end
  
end