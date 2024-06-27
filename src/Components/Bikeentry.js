import React, { useState } from 'react';
import './Bikeentry.css';
import img2 from "../images/Bike.jpg"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer1';


const BikeEntry = () => {
  const [bikeNumber, setBikeNumber] = useState('');
  const [error, setError] = useState('');
  const [err, setErr] = useState('');

  const handleBikeNumberChange = (e) => {
    setBikeNumber(e.target.value.toUpperCase());
    setError(''); // Reset error message on input change
  };

  const validateBikeNumber = (number) => {
    const regex = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    return regex.test(number);
  };

  //const [veh,setVeh]=useState([]);

  const navigate = useNavigate();
  

  const handleSearch = () => {
    if (validateBikeNumber(bikeNumber)) {
      console.log(`Searching for bike number: ${bikeNumber}`);
      axios.get(`http://192.168.1.200:9090/vehicle/get/${bikeNumber}`)
      .then(resp=>
      {
          //setVeh(resp.data);
          if(resp.data)             
            {
              navigate("/2",{state:{veh:resp.data}});
            }
            else{
              setErr('Vehicle does not exist');
            }
      }
      )
      .catch(error=>
        {
            console.log(error);
           setErr('Vehicle does not exist'); 
        })
      
    } else {
      setError('Please enter a valid bike number (e.g. UP15AB1234)');
    }
  };

  const handleViewPrices = () => {
    console.log('Viewing prices...');
  };

  return (
    <div className='container-fluid'>
      <Header/>
     <div className='content'>
        <div className='left'>
          <img src={img2} alt='Bike Insurance' className='image' />
        </div>
        <div className='right'>
          <h4>Buy your two-wheeler insurance in <br />60 seconds!* <i className="fa-solid fa-bolt fa-xl " style={{ color: "#FFD43B" }}></i></h4>
          <h6>Plan starting @ <i className="fa-solid fa-indian-rupee-sign"></i> 1.3/day</h6>
          <div className='input-section'>
            <input
              type='text'
              placeholder='Enter bike number (e.g. UP15AB1234)'
              value={bikeNumber}
              onChange={handleBikeNumberChange}
            />
            {error && <p className='error'>{error}</p>}
            {err && <p className='error'>{err}</p>}
            <button onClick={handleSearch}>View Prices</button>
          </div>
          <div className='options'>
            Already Existing User Please <a href='/UserLogin' className='option-link'> Login Here</a>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );

};

export default BikeEntry;



