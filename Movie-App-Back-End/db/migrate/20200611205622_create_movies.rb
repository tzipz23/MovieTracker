class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :description
      t.string :director
      t.string :year
      t.string :genre
      t.boolean :favorite

      t.timestamps
    end
  end
end
