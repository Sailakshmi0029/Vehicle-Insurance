




// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ThirdPage.css';
// import Header from './Header';
// import Footer1 from './Footer1';
// import p3 from '../images/p3.jpeg.jpg';
// import axios from 'axios';


// const ThirdPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { state } = location;
//   const [price, setPrice] = useState('');
//   const [error, setError] = useState('');
//   const [claimAmount, setClaimAmount] = useState('');
//   const [premiumAmount, setPremiumAmount] = useState('');
//   const [toEmail, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');

//   const userName = state?.name || 'User';
//   const vyear = state?.year;
//   console.log(vyear);
//   const vnumber = state?.vnumber;
//   console.log(vnumber);

//   const change = (e) => {
//     setPrice(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const buttonClick = async (e) => {
//     try {
//       const response = await axios.get(`http://192.168.1.23:9090/vehicle/calculate`, {
//         params: {
//           price,
//           vyear
//         }
//       });
//       const [a, b] = response.data;
//       setClaimAmount(a);
//       setPremiumAmount(b);
//       console.log(response.data);
//       if (response.status === 200) {
//         console.log('Form submitted successfully');
//         // Handle success case
//       } else {
//         console.log('Form submission failed');
//         // Handle error case
//       }
//     } catch (error) {
//       setError('error loading', error);
//     }
//   };

//   const handleClick = () => {
//     navigate('/payment', { state: { premiumAmount } });
//   };

  

//   const sendEmail = async () => {
//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!emailRegex.test(toEmail)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }
//     setEmailError('');
  
//     try {
//       const response = await axios.post(`http://192.168.1.56:9090/vehicle/sendEmail?toEmail=${toEmail}&vnumber=${vnumber}&price=${price}&claimAmount=${claimAmount}&premiumAmount=${premiumAmount}`);
  
//       if (response.status === 200) {
//         console.log('Email sent successfully');
//       } else {
//         console.log('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
  
//     alert(`Email sent to: ${toEmail}`);
    
//     const modalElement = document.getElementById('exampleModal');
//     const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
//     modalInstance.hide();
//   };
  

//   return (
//     <div className='tp-main'>
//       <Header />
//       <div className='tp-sidenav '>
//         <h1>Hello, {userName}!</h1>
//         <div className='row p-2 ms-3  '>
//           <div className='col-12 col-lg-3 border py-3 rounded'>
//             <h5 className='tp-heading'>Vehicle information:</h5>
//             <div className="card">
//               <div className="card-header">
//                 Bike Details
//               </div>
//               <div className="card-body">
//                 <div>
//                   <label htmlFor='vehicle-price'>Vehicle price:</label><p />
//                   <input type='text' maxLength={6} max={999999} id='vehicle-price' name='price' value={price}
//                     onKeyPress={(e) => {
//                       const isValidInput = /[0-9]/;
//                       if (!isValidInput.test(e.key)) {
//                         e.preventDefault();
//                       }
//                     }} onChange={change} />
//                 </div>
//                 <div className='vehicle-details'>
//                   <label htmlFor='vehicle-price'>Registration year: </label>
//                   <input type='text' id='vehicle-price' disabled value={vyear} name='registration year' />
//                 </div>
//                 <button type="button" className="btn btn-primary" onClick={buttonClick}>Save</button>
//               </div>
//             </div>
//           </div>
//           <div className='ms-3 col-lg-8 col-12 border rounded'>
//             <h5 className='tp-heading'>Quotation:</h5>
//             <div className="tp-card ">
//               <div className=" tp-card-body d-flex justify-content-around align-items-center  border shadow py-2">
//                 <div className='tp-insurancelogo'>
//                   <img src={p3} alt='ramanasoftlogo' className='image1' />
//                 </div>
//                 <div className='tp-idvprice'>
//                   <p className='fs-6 fw-bold mt-2'><span className="text-secondary">IDV : </span> <i className="fa-solid fa-indian-rupee-sign"></i>{claimAmount}</p>
//                 </div>
//                 <div>
//                   <button type="button" onClick={handleClick} className="btn btn-primary px-4 mb-2" disabled={!premiumAmount}>  <i className="fa-solid fa-indian-rupee-sign"></i> {premiumAmount} <i className="fa-solid fa-arrow-right"></i></button>
//                 </div>
//               </div>
//             </div>
//             <p />

//             <div>
//               <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" disabled={!premiumAmount}>Get Email</button>

//               <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       <h5 className="modal-title" id="exampleModalLabel">New message</h5>
//                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div className="modal-body">
//                       <form>
//                         <div className="mb-3">
//                           <label htmlFor="recipient-name" className="col-form-label">E-mail-id</label>
//                           <input type="text" className="form-control" id="recipient-name" name='toEmail' value={toEmail} onChange={handleEmailChange} />
//                           {emailError && <div className="text-danger">{emailError}</div>}
//                         </div>
//                       </form>
//                     </div>
//                     <div className="modal-footer">
//                       <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                       <button type="button" className="btn btn-primary" onClick={sendEmail}>Send E-mail</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//       <Footer1 />
//     </div>
//   );
// };

// export default ThirdPage; 







// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './ThirdPage.css';
// import Header from './Header';
// import Footer1 from './Footer1';
// import p3 from '../images/p3.jpeg.jpg';
// import axios from 'axios';


// const ThirdPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { state } = location;
//   const [price, setPrice] = useState('');
//   const [error, setError] = useState('');
//   const [claimAmount, setClaimAmount] = useState('');
//   const [premiumAmount, setPremiumAmount] = useState('');
//   const [toEmail, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');

//   const userName = state?.name || 'User';
//   const vyear = state?.year;
//   console.log(vyear);
//   const vnumber = state?.vnumber;
//   console.log(vnumber);

//   const change = (e) => {
//     setPrice(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const buttonClick = async (e) => {
//     try {
//       const response = await axios.get(`http://192.168.1.56:9090/vehicle/calculate`, {
//         params: {
//           price,
//           vyear
//         }
//       });
//       const [a, b] = response.data;
//       setClaimAmount(a);
//       setPremiumAmount(b);
//       console.log(response.data);
//       if (response.status === 200) {
//         console.log('Form submitted successfully');
//         // Handle success case
//       } else {
//         console.log('Form submission failed');
//         // Handle error case
//       }
//     } catch (error) {
//       setError('error loading', error);
//     }
//   };

//   const handleClick = () => {
//     navigate('/payment', { state: { premiumAmount } });
//   };

  

//   const sendEmail = async () => {
//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!emailRegex.test(toEmail)) {
//       setEmailError('Please enter a valid email address');
//       return;
//     }
//     setEmailError('');
  
//     try {
//       const response = await axios.post(`http://192.168.1.95:9090/vehicle/sendEmail?toEmail=${toEmail}&vnumber=${vnumber}&price=${price}&claimAmount=${claimAmount}&premiumAmount=${premiumAmount}`);
  
//       if (response.status === 200) {
//         console.log('Email sent successfully');
//       } else {
//         console.log('Failed to send email');
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
  
//     alert(`Email sent to: ${toEmail}`);
    
//     const modalElement = document.getElementById('exampleModal');
//     const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
//     modalInstance.hide();
//   };
  

//   return (
//     <div className='tp-main'>
//       <Header />
//       <div className='tp-sidenav '>
//         <h1>Hello, {userName}!</h1>
//         <div className='row p-2 ms-3  '>
//           <div className='col-12 col-lg-3 border py-3 rounded'>
//             <h5 className='tp-heading'>Vehicle information:</h5>
//             <div className="card">
//               <div className="card-header">
//                 Bike Details
//               </div>
//               <div className="card-body">
//                 <div>
//                   <label htmlFor='vehicle-price'>Vehicle price:</label><p />
//                   <input type='text' maxLength={6} max={999999} id='vehicle-price' name='price' value={price}
//                     onKeyPress={(e) => {
//                       const isValidInput = /[0-9]/;
//                       if (!isValidInput.test(e.key)) {
//                         e.preventDefault();
//                       }
//                     }} onChange={change} />
//                 </div>
//                 <div className='vehicle-details'>
//                   <label htmlFor='vehicle-price'>Registration year: </label>
//                   <input type='text' id='vehicle-price' disabled value={vyear} name='registration year' />
//                 </div>
//                 <button type="button" className="btn btn-primary" onClick={buttonClick}>Save</button>
//               </div>
//             </div>
//           </div>
//           <div className='ms-3 col-lg-8 col-12 border rounded'>
//             <h5 className='tp-heading'>Quotation:</h5>
//             <div className="tp-card ">
//               <div className=" tp-card-body d-flex justify-content-around align-items-center  border shadow py-2">
//                 <div className='tp-insurancelogo'>
//                   <img src={p3} alt='ramanasoftlogo' className='image1' />
//                 </div>
//                 <div className='tp-idvprice'>
//                   <p className='fs-6 fw-bold mt-2'><span className="text-secondary">IDV : </span> <i className="fa-solid fa-indian-rupee-sign"></i>{claimAmount}</p>
//                 </div>
//                 <div>
//                   <button type="button" onClick={handleClick} className="btn btn-primary px-4 mb-2" disabled={!premiumAmount}>  <i className="fa-solid fa-indian-rupee-sign"></i> {premiumAmount} <i className="fa-solid fa-arrow-right"></i></button>
//                 </div>
//               </div>
//             </div>
//             <p />

//             <div>
//               <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" disabled={!premiumAmount}>Send E-mail</button>

//               <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                   <div className="modal-content">
//                     <div className="modal-header">
//                       {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
//                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div className="modal-body">
//                       <form>
//                         <div className="mb-3">
//                           <label htmlFor="recipient-name" className="col-form-label">E-mail-id</label>
//                           <input type="text" className="form-control" id="recipient-name" name='toEmail' value={toEmail} onChange={handleEmailChange} />
//                           {emailError && <div className="text-danger">{emailError}</div>}
//                         </div>
//                       </form>
//                     </div>
//                     <div className="modal-footer">
//                       <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                       <button type="button" className="btn btn-primary" onClick={sendEmail}>Send E-mail</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//       <Footer1 />
//     </div>
//   );
// };

// export default ThirdPage;






import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThirdPage.css';
import Header from './Header';
import Footer1 from './Footer1';
import p3 from '../images/p3.jpeg.jpg';
import axios from 'axios';


const ThirdPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [idv, setClaimAmount] = useState('');
  const [premiumAmount, setPremiumAmount] = useState('');
  const [toEmail, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const userName = state?.name || 'User';
  const vyear = state?.year;
  console.log(vyear);
  const vnumber = state?.formData?.vnumber;
  console.log(vnumber);
  const formData = state?.formData;
  console.log(formData);
  const veh = state?.veh;
  console.log(veh);

  const change = (e) => {
    setPrice(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const buttonClick = async (e) => {
    try {
      const response = await axios.get(`http://192.168.1.200:9090/vehicle/calculate`, {
        params: {
          price,
          vyear
        }
      });
      const [a, b] = response.data;
      setClaimAmount(a);
      setPremiumAmount(b);
      console.log(response.data);
      if (response.status === 200) {
        console.log('Form submitted successfully');
        // Handle success case
      } else {
        console.log('Form submission failed');
        // Handle error case
      }
    } catch (error) {
      setError('error loading', error);
    }
  };

  const handleClick = () => {
    navigate('/payment', { 
      state: { 
        premiumAmount,
        idv,
        formData,
        price,
        veh,
        userName
      } });
  };

  

  const sendEmail = async () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(toEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');
  
    try {
      const response = await axios.post(`http://192.168.1.200:9090/vehicle/sendEmail?toEmail=${toEmail}&vnumber=${vnumber}&price=${price}&idv=${idv}&premiumAmount=${premiumAmount}`);
  
      if (response.status === 200) {
        console.log('Email sent successfully');
      } else {
        console.log('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  
    alert(`Email sent to: ${toEmail}`);
    
    const modalElement = document.getElementById('exampleModal');
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
  };
  

  return (
    <div className='tp-main'>
      <Header />
      <div className='tp-sidenav '>
        <h1>Hello, {userName}!</h1>
        <div className='row p-2 ms-3  '>
          <div className='col-12 col-lg-3 border py-3 rounded'>
            <h5 className='tp-heading'>Vehicle information:</h5>
            <div className="card">
              <div className="card-header">
                Bike Details
              </div>
              <div className="card-body">
                <div>
                  <label htmlFor='vehicle-price'>Vehicle price:</label><p />
                  <input type='text' maxLength={6} max={999999} id='vehicle-price' name='price' value={price}
                    onKeyPress={(e) => {
                      const isValidInput = /[0-9]/;
                      if (!isValidInput.test(e.key)) {
                        e.preventDefault();
                      }
                    }} onChange={change} />
                </div>
                <div className='vehicle-details'>
                  <label htmlFor='vehicle-price'>Registration year: </label>
                  <input type='text' id='vehicle-price' disabled value={vyear} name='registration year' />
                </div>
                <button type="button" className="btn btn-primary" onClick={buttonClick}>Save</button>
              </div>
            </div>
          </div>
          <div className='ms-3 col-lg-8 col-12 border rounded'>
            <h5 className='tp-heading'>Quotation:</h5>
            <div className="tp-card ">
              <div className=" tp-card-body d-flex justify-content-around align-items-center  border shadow py-2">
                <div className='tp-insurancelogo'>
                  <img src={p3} alt='ramanasoftlogo' className='image1' />
                </div>
                <div className='tp-idvprice'>
                  <p className='fs-6 fw-bold mt-2'><span className="text-secondary">IDV : </span> <i className="fa-solid fa-indian-rupee-sign"></i>{idv}</p>
                </div>
                <div>
                  <button type="button" onClick={handleClick} className="btn btn-primary px-4 mb-2" disabled={!premiumAmount}>  <i className="fa-solid fa-indian-rupee-sign"></i> {premiumAmount} <i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
            <p />

            <div>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" disabled={!premiumAmount}>Send E-mail</button>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="recipient-name" className="col-form-label">E-mail-id</label>
                          <input type="text" className="form-control" id="recipient-name" name='toEmail' value={toEmail} onChange={handleEmailChange} />
                          {emailError && <div className="text-danger">{emailError}</div>}
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" onClick={sendEmail}>Send E-mail</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
};

export default ThirdPage;