require 'singleton'

class Bot
  include Singleton
  attr_accessor :battery_life, :last_location, :connected, :current_ticket
  attr_reader :phone_number, :address, :email

  def initialize()
    @battery_life = 0.0
    @phone_number = "N/A"
    @address =  "ERB Entrance Path, Arlington, TX 76010"
    @email = "jonh@doe.edu"
    @last_location = "ERB 335A"
    @connected = false
    @current_ticket = -1
  end

  def connected?
    return @connected ? "Online" : "Offline"
  end
  
end