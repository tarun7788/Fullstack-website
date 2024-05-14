import  React , { useState } from 'react'
import './Aboutus.css';
import axios from 'axios'



function Aboutus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const targetDb= 'db1';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contactme", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, targetDb }),
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok. Status code: ${response.status}`);
      }

      const data = await response.json();
      console.log('Message sent successfully:', data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
    }
  };
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
        <form onSubmit={handleSubmit} className='contact-inputs'>
            <input className='a068' type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' required />
            <input className='b068'type="email" name="email" value={formData.email} onChange={handleChange} placeholder='email' required />
            <textarea className='c068'  cols="30"  rows="6"  type="text" name="message" value={formData.message} onChange={handleChange} placeholder='Type your message here...' required></textarea>
            <input className='d068' type='submit' value='send'/>
        </form>

    </div>
</div>



</div>
  );
}

export default Aboutus;
