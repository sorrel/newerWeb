class BlogsController < ApplicationController
  
  def show
    @blog = Blog.find(params[:id])
    @blogs = Blog.all
    @title = @blog.title
    @page = "blogs"
  end
  
  def index
    @blogs = Blog.all
    @title = "All the blogs"
    @page = "blogs"
  end
  
end