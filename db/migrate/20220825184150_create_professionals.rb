class CreateProfessionals < ActiveRecord::Migration[6.1]
  def change
    create_table :professionals do |t|
      t.string :username
      t.text :password_digest
      t.string :image_url

      t.timestamps
    end
  end
end
