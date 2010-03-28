class PagesController < ApplicationController
  def home
    @title = "Home"
    @page = "home"
  end

  def about
    @art = Article.findAboutPage
    @title = @art.title
    @page = @art.page
  end
  
  def history
    @art = Article.findHistoryPage
    @title = @art.title
    @page = @art.page
    render(:action => :about)
  end

  def design
    @art = Article.findDesignPage
    @title = @art.title
    @page = @art.page
    render(:action => :about)
  end  

  def family
    @title = "The Hurwood Family"
    @page = "family"
  end

  def duncan
    @art = Article.findDuncanPage
    @title = @art.title
    @page = @art.page
    render(:action => :family)
  end
  
  def heidi
    @art = Article.findHeidiPage
    @title = @art.title
    @page = @art.page
    render(:action => :family)
  end
  
  def indigo
    @art = Article.findIndigoPage
    @title = @art.title
    @page = @art.page
    render(:action => :family)
  end
  
  def asher
    @art = Article.findAsherPage
    @title = @art.title
    @page = @art.page
    render(:action => :family)
  end
  
  def search
    # Here we take the given word, and search for it on the web pages
    # we have so far
    @searchString = params[:search]
    @page = 'search'
    @title = "Search Results" + @searchString if @searchString != nil
  end
end
