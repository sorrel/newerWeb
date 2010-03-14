class Article < ActiveRecord::Base
  attr_accessible :content, :title, :page
  
  def self.findAboutPage
    find(:first, :conditions => "title = 'About the site'")
  end
  
  def self.findHistoryPage
    find(:first, :conditions => "title = 'Site History'")
  end
  
  def self.findDesignPage
    find(:first, :conditions => "title = 'Coding and Design'")
  end
  
  def self.findDuncanPage
    find(:first, :conditions => "title = 'Duncans Page'")
  end
  
  def self.findHeidiPage
    find(:first, :conditions => "title = 'Heidis Page'")
  end
  
  def self.findAsherPage
    find(:first, :conditions => "title = 'Ashers Page'")
  end
  
  def self.findIndigoPage
    find(:first, :conditions => "title = 'Indigos Page'")
  end
end
