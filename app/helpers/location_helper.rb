module LocationHelper
  def get_locations
    locations = []
    Location.all.each do |location|
      locations << {name: location.name, id: location.id}
    end
    return locations
  end
end
