require 'spec_helper'

describe Article do
  before(:each) do
    @valid_attributes = {
      :content => "value for content",
      :title => "value for title",
      :page => "value for page"
    }
  end

  it "should create a new instance given valid attributes" do
    Article.create!(@valid_attributes)
  end
end
