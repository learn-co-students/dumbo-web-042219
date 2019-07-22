class MessageSerializer < ActiveModel::Serializer
  attributes :id, :to_otter, :from_otter, :created_at, :text
end
