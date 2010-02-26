require 'spec_helper'

describe PagesController do
  integrate_views
  
  describe "GET 'home'" do
    it "should be successful" do
      get 'home'
      response.should be_success
    end
    
    it "should have the right title" do
      get 'home'
      response.should have_tag("title", "Home")
    end
  end
  
  describe "GET 'about'" do
    it "should be successful" do
      get 'about'
      response.should be_success
    end
    
    it "should have the right title" do
      get 'about'
      response.should have_tag("title", "About the site")
    end
  end
  
  describe "GET 'family'" do
    it "should be successful" do
      get 'family'
      response.should be_success
    end
    
    it "should have the right title" do
      get 'family'
      response.should have_tag("title", "The Hurwood Family")
    end
  end
  
end
  
  