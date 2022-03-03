class Ticket < ApplicationRecord
  belongs_to :departure, :class_name => 'Location'
  belongs_to :destination, :class_name => 'Location'
  has_many :addresses
end
