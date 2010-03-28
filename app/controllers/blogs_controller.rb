class BlogsController < ApplicationController
  
  def show
    @blog = Blog.find(params[:id])
    @blogs = Blog.all
    @title = @blog.title
    @page = "writing"
  end
  
  def index
    @blogs = Blog.all
    @title = "Writings"
    @page = "writing"
  end
  
end