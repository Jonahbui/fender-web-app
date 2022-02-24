class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :departure
      t.string :destination

      t.timestamps
    end
  end
end
