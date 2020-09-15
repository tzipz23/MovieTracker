class ActorsController < ApplicationController

    def index
        actors = Actor.all
        render json: actors.to_json(
            :include => {:movies => {
              :only => [:title, :description, :genre]
              }},
            :except => [:created_at, :updated_at]
          )
    end

end
