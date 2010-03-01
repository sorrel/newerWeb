class PagesController < ApplicationController
  def home
    @title = "Home"
    @page = "home"
  end

  def about
    @title = "About the site"
    @page = "about"
  end

  def family
    @title = "The Hurwood Family"
    @page = "family"
  end

end
