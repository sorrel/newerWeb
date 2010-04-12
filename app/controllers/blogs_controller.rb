class BlogsController < ApplicationController
  
  def show
    @blog = Blog.find(params[:id])
    @blogs = Blog.all
    @title = @blog.title
    @page = "blogs/" + String(@blog.id)
  end
  
  def index
    @blogs = Blog.all
    @title = "Writings"
    @page = "blogs"
  end
  
end