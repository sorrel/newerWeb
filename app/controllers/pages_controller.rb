class PagesController < ApplicationController
  def home
    @title = "Home"
    @page = "home"
  end

  def about
    @title = "About the site"
    @page = "about"
    @content = "A banana"
  end
  
  def history
    @content = "history"
    @title = "About the history"
    @page = "about"
    render(:action => :about)
  end

  def design
    @content = "design"
    @title = "About the design"
    @page = "about"
    render(:action => :about)
  end  

  def family
    @title = "The Hurwood Family"
    @page = "family"
  end

end
