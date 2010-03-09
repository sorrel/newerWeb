class AddSideColumnToArticles < ActiveRecord::Migration
  def self.up
    add_column :articles, :sideColumn, :text
  end

  def self.down
    remove_column :articles, :sideColumn
  end
end
