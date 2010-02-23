# == Schema Information
# Schema version: 20100218174045
#
# Table name: blogs
#
#  id         :integer         not null, primary key
#  post       :text
#  tags       :string(255)
#  author     :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Blog < ActiveRecord::Base
  attr_accessible :post, :tags, :author, :title
  
  
end
