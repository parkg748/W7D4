json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :poke_type, :moves
  json.image_url asset_path(@poke.image_url)
  json.item_ids @poke.items.map { |item| item.id  }.reverse
end

json.items do
  @poke.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
