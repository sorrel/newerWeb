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
    find(:first, :conditions => "page = 'duncan'")
  end
  
  def self.findHeidiPage
    find(:first, :conditions => "page = 'heidi'")
  end
  
  def self.findAsherPage
    find(:first, :conditions => "page = 'asher'")
  end
  
  def self.findIndigoPage
    find(:first, :conditions => "page = 'indigo'")
  end
end
