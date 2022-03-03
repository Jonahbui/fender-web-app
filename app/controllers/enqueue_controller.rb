class EnqueueController < ApplicationController
  # TODO: might not be wise
  skip_before_action :verify_authenticity_token
  def index
  end

  def add
    params.require(:departure)
    params.require(:destination)
    response = { success: true }
    begin
      departure_id = Location.find_by_name(params[:departure]).id
      destination_id = Location.find_by_name(params[:destination]).id
      Ticket.create(departure_id: departure_id, destination_id: destination_id)
    rescue => e
      response[:success] = false
    end

    respond_to do |format|
      format.json { render json: response}
    end
  end

end
