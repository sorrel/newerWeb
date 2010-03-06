class Article < ActiveRecord::Base
  attr_accessible :content, :title, :page
  
  def self.findAboutPage
    find(:first, :conditions => "title = 'About the site'")
  end
  
  def self.findHistoryPage
    find(:first, :conditions => "title = 'Site History'")
  end
  
  def self.findDesignPage
    find(:first, :conditions => "title = 'Design Decisions'")
  end
end
