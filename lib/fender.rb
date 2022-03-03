require 'singleton'

class FenderBot
  include Singleton
  attr_accessor :battery_life
  attr_reader :phone_number, :address, :email

  def initialize()
    @battery_life = 0.0
    @phone_number = "N/A"
    @address =  "Engineering Research Building Entrance Path, Arlington, TX 76010"
    @email = "jonh@doe.edu"
  end
  
end