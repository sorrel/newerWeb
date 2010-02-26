class BlogsController < ApplicationController
  
  def show
    @blog = Blog.find(params[:id])
    @blogs = Blog.all
    @title = @blog.title
  end
  
  def index
    @blogs = Blog.all
    @title = "All the blogs"
  end
  
end