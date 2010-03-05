@designPage = "<h1>Design page</h1>"
@historyPage = "History Page"

#<% history = ""<p>For now, I'm just getting the pictures to work correctly.</p><br />
#
#<div class='special trans'>
#	<%= hurwoodgroup2005 %>
#	<span><strong>The Hurwood Family</strong> <em>2005</em></span>
#</div>"  %>
module PagesHelper
  
  # Images
  def hurwoodgroup2005
      image_tag("hurwoodgroup2005.png", :alt => "The Hurwoods 2005")
  end
  
  def hurwoodgroup2010
      image_tag("tree-group.png", :alt => "The Hurwoods 2010")
  end
  
end
