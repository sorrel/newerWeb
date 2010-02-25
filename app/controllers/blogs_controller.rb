class BlogsController < ApplicationController
  
  def show
    @blog = Blog.find(params[:id])
    @blogs = Blog.all
  end
  
  def index
    @blogs = Blog.all
  end
  
end