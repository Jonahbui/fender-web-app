class Ticket < ApplicationRecord
  belongs_to :departure, :class_name => 'Location'
  belongs_to :destination, :class_name => 'Location'
  has_many :addresses

  def self.get_tickets
    tickets = []
    Ticket.all.map do |ticket|
      tickets << {
        key: "ticket-#{ticket.id}",
        id: ticket.id,
        departure: ticket.departure.name,
        destination: ticket.destination.name,
        current: Bot.instance.current_ticket?(ticket.id)
      }
    end
    return tickets
  end
end
