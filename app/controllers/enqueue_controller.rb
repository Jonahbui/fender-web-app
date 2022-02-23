class EnqueueController < ApplicationController
  def index
    @locations = Location.all
  end
end
