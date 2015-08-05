json.array!(@skeins) do |skein|
  json.extract! skein, :id, :length
  json.url skein_url(skein, format: :json)
end
