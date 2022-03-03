require 'singleton'

class Bot
  include Singleton
  attr_accessor :battery_life, :last_location, :connected
  attr_reader :phone_number, :address, :email

  def initialize()
    @battery_life = 0.0
    @phone_number = "N/A"
    @address =  "ERB Entrance Path, Arlington, TX 76010"
    @email = "jonh@doe.edu"
    @last_location = "ERB 335A"
    @connected = false
  end

  def connected?
    return @connected ? "Online" : "Offline"
  end
  
end