class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.references :departure
      t.references :destination

      t.timestamps
    end
  end
end
