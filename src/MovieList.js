import {Component} from "react";
//import myImage from './avenger.jpg'
import "./index.css";
import MovieCard from "./MovieCard"

class MovieList extends Component{
    constructor(){
        super();
        this.state={
            movies : [
                {
                    title:"The Avengers",
                    poster:"https://filmartgallery.com/cdn/shop/products/The-Avengers-Vintage-Movie-Poster-Original-1-Sheet-27x41_f7a83b7a-9d50-4743-b630-3fbd34b35e5a.jpg?v=1671051716",
                    plot:"Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
                    price:99,
                    Rating:5.9,
                    star:0,
                    fav:false,
                    cart:false
                },
                {
                    title:"The Dark knight",
                    poster:"https://rukminim1.flixcart.com/image/850/1000/kzzw5u80/poster/o/g/b/large-dark-knight-joker-quote-movie-poster-print-poster-on-large-original-imagbvmyqpzhgqyz.jpeg?q=20",
                    plot:"After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
                    price:199,
                    Rating:6.7,
                    star:0,
                    fav:false,
                    cart:false
                },
                {
                    title:"Avenger End Game",
                    poster:"https://hips.hearstapps.com/hmg-prod/images/d1pklzbuyaab0la-1552597012.jpg",

                    plot:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
                    price:299,
                    Rating:8.9,
                    star:0,
                    fav:false,
                    cart:false
                },
                {
                    title:"War",
                    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/War_official_poster.jpg/220px-War_official_poster.jpg",

                    plot:"Kabir, a secret agent, goes rogue after a mission to catch a terrorist goes awry. However, his boss sends Khalid, another agent and his student, to track him down.",
                    price:199,
                    Rating:7.8,
                    star:0,
                    fav:false,
                    cart:false
                }
            ]

            
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
    const { movies } = this.state;
  
    const mid = movies.indexOf(movie);
  
    if (movies[mid] !== -1) {
      // Toggle the favorite status
      movies[mid].cart = !movies[mid].cart;
  
      this.setState({
        movies
      });
    }
  };
render(){
  // const {title,plot,price,Rating,star,fav,cart,}=this.state
  const {movies}=this.state;


   return (
    <>   
    {movies.map((movie)=>
    <MovieCard key={movie.title} movies={movie} 
    addStar={this.handelIncStar}
     removStar={this.handeldecStar}
     AddFev={this.handelfev}
     AddCart={this.handelCart}
     />)}
    
    </>
   )
}

}

export default MovieList;