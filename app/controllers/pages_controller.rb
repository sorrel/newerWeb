class PagesController < ApplicationController
  def home
    @title = "Home"
    @page = "home"
  end

  def about
    @art = Article.findAboutPage
    @title = @art.title
    @page = @art.page
    @content = @art.content
  end
  
  def history
    @art = Article.findHistoryPage
    @title = @art.title
    @page = @art.page
    @content = @art.content
    render(:action => :about)
  end

  def design
    @art = Article.findDesignPage
    @title = @art.title
    @page = @art.page
    @content = @art.content
    render(:action => :about)
  end  

  def family
    @title = "The Hurwood Family"
    @page = "family"
  end

end
