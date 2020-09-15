class MovieActorsController < ApplicationController

        def index
                render json: MovieActor.all
        end

        def create
                new_movie = MovieActor.create(mactor_params)
        
                render json: new_movie.to_json(:include => :actors)
        end


        def mactor_params
                params.require(:MovieActor).permit(:movie_id, :actor_id)
        end
end
