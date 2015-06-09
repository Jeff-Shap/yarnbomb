json.array!(@yarns) do |yarn|
  json.extract! yarn, :id, :name, :color, :weight, :gauge
  json.url yarn_url(yarn, format: :json)
end
