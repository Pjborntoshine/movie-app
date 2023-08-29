import MovieCard from "./MovieCard"


function MovieList(props){
  // const {title,plot,price,Rating,star,fav,cart,}=this.state
  const {movies,addStar,removStar,AddFev,AddCart}=props;
   return (
    <>   
    
    {movies.map((movie)=>
    <MovieCard key={movie.id} movies={movie} 
     addStar={addStar}
     removStar={removStar}
     AddFev={AddFev}
     AddCart={AddCart}
     />)} 
    
    </>
   )
}

export default MovieList;