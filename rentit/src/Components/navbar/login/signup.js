import react from 'react'
import  React , { useState } from 'react'
import './signup.css';


function SignUp(){
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password: '',
      });
    const targetDb= 'db2';
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/Signup", {
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

    return(
        <div className='main-signup'>
            <form className='signup1' onSubmit={handleSubmit} >
                <div className='input-block'>
                <h1>Registration</h1>
                <input type='text' placeholder='Name..' style={{width:300, height:30}}  name="name" value={formData.name} onChange={handleChange} required />
                <input type='email' placeholder='Email'style={{width:300, height:30}} name="email" value={formData.email} onChange={handleChange} required />
                <input type='password' placeholder='Password' style={{width:300, height:30}} name="password" value={formData.password} onChange={handleChange} required />
                <input className='submit' type='submit' value='Submit' style={{width:80, left:60}}  />
                </div>
            </form>
        </div>
    )
};
export default SignUp;