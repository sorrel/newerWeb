class PagesController < ApplicationController
  def home
    @title = "Home"
  end

  def about
    @title = "About the site"
  end

  def family
    @title = "The Hurwood Family"
  end

end
