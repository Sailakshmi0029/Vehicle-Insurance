
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Components/Login';
import Bikeentry from './Components/Bikeentry';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';
import Payment from './Components/Payment';
import UserLogin from './Components/UserLogin';
import ReviewPage from './Components/ReviewPage';
import PaymentSuccessPage from './Components/PaymentSuccessPage';


function App(){
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/1' element={<Bikeentry/>}/>
         <Route path='/2' element={<SecondPage/>}/>
         <Route path='/3' element={<ThirdPage/>}/>
         <Route path='/payment' element={<Payment/>}/>
         <Route path='/userlogin' element={<UserLogin/>}/>
         <Route path='/7' element={<PaymentSuccessPage/>}/>
         <Route path='/reviewpage' element={<ReviewPage/>}/>
         
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
