import './home.css';
import { Link } from 'react-router-dom';


function redirect(){

}

const Home =()=>{
return(
    <div className='image'>
    <img src={require('./home.png')}/>
    <div className='home'>
        <h1><span>A outfit for one time use</span>, Naahh!! <br/> JUST-RENT it...</h1>
        <h5>Let's Normalize clothing renting..</h5>
        </div>
        <Link to="/shop">
        <button>Shop Now</button>
      </Link>
    </div>
)
}
export default Home;