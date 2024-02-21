import '../CSS/home.css';


const Home =()=>{
return(
    <div className='image'>
    <img src={require('../images/logo2.png')}/>
    <div className='home'>
        <h1><span>A outfit for one time use</span>, Naahh!! <br/> JUST-RENT it...</h1>
        <h5>Let's Normalize clothing renting..</h5>
        </div>
    <button>Shop Now</button>
    </div>
)
}
export default Home;