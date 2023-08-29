import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import "./index.css";
import {movies} from "./moviesData"


class App extends React.Component {
  constructor(){
    super();
    this.state={
      movies : movies,
      cartCount : 0
      
    }
}

handelIncStar=(movie)=>{
const {movies}=this.state;

const mid = movies.indexOf(movie);
if(movies[mid].star>=5){
    return;
}
movies[mid].star += 0.5;
this.setState({
    movies

})

}
handeldecStar=(movie)=>{
const {movies}=this.state;

const mid = movies.indexOf(movie);
if(movies[mid].star<=0){
    return;
}
movies[mid].star -= 0.5;
this.setState({
    movies

})

}
handelfev = (movie) => {
const { movies } = this.state;

const mid = movies.indexOf(movie);

if (movies[mid] !== -1) {
  // Toggle the favorite status
  movies[mid].fav = !movies[mid].fav;

  this.setState({
    movies
  });
}
};
handelCart = (movie) => {
let { movies,cartCount } = this.state;
const mid = movies.indexOf(movie);
movies[mid].cart = !movies[mid].cart;
 if(movies[mid].cart){
  cartCount=cartCount+1
 }else{
  cartCount-=1;
 }

  this.setState({
    movies,
    cartCount
  });

};

  render(){ 
    const {movies,cartCount}=this.state;
  return (
    <> 
    <div className="movie">    
    <Navbar cartCount={cartCount}/>
    <MovieList movies={movies}
    addStar={this.handelIncStar}
    removStar={this.handeldecStar}
    AddFev={this.handelfev}
    AddCart={this.handelCart}
    />
    </div> 
    
    </>
  );
}
}

export default App;
