class Api::V1::MessagesController < ApplicationController
  def index
    render json: serialized_grouped_messages
  end

  def show
    render json: serialized_messages_with
  end

  private

    def serialized_grouped_messages
      # This method is bad and was rushed
      all_messages = Message.where(to_otter: current_otter).or(Message.where(from_otter: current_otter))

      grouped = all_messages.group_by do |message|
        if message.from_otter == current_otter
          message.to_otter
        else
          message.from_otter
        end
      end

      grouped.map do |other_otter, messages|
        serialized_messages = messages.map do |message|
          MessageSerializer.new(message).as_json
        end

        hsh = {
          other_otter: OtterSerializer.new(other_otter).as_json,
          messages: serialized_messages
        }
        hsh
      end
    end

    def serialized_messages_with
      messages = current_otter.messages_with(params[:otter_id])
      messages.map do |message|
        MessageSerializer.new(message).as_json
      end
    end

end
