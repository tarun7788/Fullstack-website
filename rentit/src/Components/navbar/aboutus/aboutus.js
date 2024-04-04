import  React from 'react'
import './Aboutus.css';



function Aboutus() {
  return (
    
    <div className='a123456' >
        <div className='text'>
        <h1 className='e068'>About-US</h1>
       <p>
        Welcome to Rent It, the go-to place to boost your style without the commitment of
ownership by renting high-quality clothing and accessories. At Rent It, we recognise that
fashion is constantly changing and that the urge to try new styles is a constant. Because of
this, we've developed a platform that gives you access to a carefully curated selection of the
newest trends, timelessly elegant items, and statement pieces, all of which are available for
rental whenever it's most convenient for you.</p>
<p>
Join us at Rent It, a place where convenience, affordability, and sustainability converge with
fashion. Learn to enjoy changing up your clothes and enjoy the opportunity to try new things
with your personal style. It's time to Rent It and adopt a more adaptable and environmentally
responsible attitude to clothing.
</p>
</div>
<h1>Feel Free To Contact-Us</h1>
<div className='container'>
    <div className='Contact-Us'>
        
        <form action="https://formspree.io/f/xvoewwkr" method='post' className='contact-inputs'>
        <input type="text" className='a068'
        name='username' 
        placeholder='User Name' 
        autoComplete='off' 
        required />
        <input type="email" className='b068'
        name='email' 
        placeholder='E-Mail' 
        autoComplete='off' 
        required />
        <textarea className='c068'
       name='Message' 
       placeholder='Type Your Message'
       cols="30" 
       rows="6" 
       autoComplete='off' 
       required>
       </textarea>
       <input className='d068'
        type='submit' 
        value='send'/>
        </form>

    </div>
</div>



</div>
  );
}

export default Aboutus;
