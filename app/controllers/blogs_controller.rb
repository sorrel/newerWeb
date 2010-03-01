class BlogsController < ApplicationController
  
  def show
    @blog = Blog.find(params[:id])
    @blogs = Blog.all
    @title = @blog.title
    @page = "blog"
  end
  
  def index
    @blogs = Blog.all
    @title = "All the blogs"
    @page = "blog"
  end
  
end