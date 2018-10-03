json.extract! @party, :name, :location
json.guests @party.guests do |guest|
  json.extract! guest, :name, :age, :favorite_color
  json.gifts guest.gifts do |gift|
    json.extract! gift, :id, :title, :description, :guest_id
  end
end
