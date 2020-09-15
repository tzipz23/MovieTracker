class MoviesController < ApplicationController

    def index
    render json: Movie.all.to_json(
        :include => {:actors => {
          :only => [:name]
          }},
        :except => [:created_at, :updated_at]
      )
    end

    def new

    end

    def create
        new_movie = Movie.create(movie_params)
        MovieActor.create(movie_id: new_movie.id, actor_id: params[:actor])
        render json: new_movie.to_json(:include => :actors)
    end

    def show
      render json: Movie.find(params[:id])
    end

    def update
      found_movie = Movie.find(params[:id])
  
      #find the movie with id of 1(or whatever id)
      #update that movie in the DB
      #respond back with the updated movie

      found_movie.update(movie_params) #.update returns a boolean
      render json: found_movie
    end

    def destroy
      Movie.find(params[:id]).delete
      render json: {message: "Movie Deleted"}
    end

    private
    
    def movie_params
        params.require(:movie).permit(:title, :description, :director, :year, :genre, :favorite, :image, :trailer)
    end

end