import '../CSS/home.css';

function Home(){
return(
    <div className='image'>
    <img src={require('../images/logo2.png')}/>
    <div className='home'><h1>A outfit for one time use, Naahh!!</h1><h2>JUST-RENT it...</h2><h5>Let's Normalize clothing renting..</h5></div>
    <button>Shop Now</button>
    </div>
)
}
export default Home;