
//import myImage from './avenger.jpg'
import "./index.css";

function MovieCard(props){
   
  const {movies,addStar,removStar,AddFev,AddCart}=props;
   const {title,plot,price,Rating,star,fav,cart,poster,}=props.movies
   return (
   
   <div className="main">
   <div className="movie-card">
   <div className="left">
   <img alt="moviePoster"src={poster}/>
   </div>
   <div className="right">
    <div className="tital">{title}</div>
    <div className="plot"> {plot}</div>
    <div className="price">Rs{price}</div>
    <div className="footer">
    <div className="rating">{Rating}</div>
    <div className="stars">
    <img className="minus" alt="decrese" src="https://cdn-icons-png.flaticon.com/128/1665/1665714.png" onClick={()=>{removStar(movies)}}/>
    <div className="star"><img alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"/></div>
    <span className="minus">{star}</span>
    <img className="minus" alt="increse" src="https://cdn-icons-png.flaticon.com/128/1665/1665680.png" onClick={()=>{addStar(movies)}}/>
    
    </div>
    {fav?<button className="favorite-btn" onClick={()=>{ AddFev(movies)}}><b>Un-Fevourit</b></button>:
    <button className="favorite-btn1" onClick={()=>{ AddFev(movies)}}><b>Fevourit</b></button>}
    
    {cart?<button className="Cart-btn" onClick={()=>{ AddCart(movies)}}><b>Remove from Cart</b></button>:
    <button className="Cart-btn" onClick={()=>{ AddCart(movies)}}><b>Add to Cart</b></button>}
    
    
    
    </div>
   </div>


   </div>

   </div>

   )


}

export default MovieCard;