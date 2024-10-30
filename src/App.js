import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NavBar from './Components/NavBar';
import StoreDetails from './Pages/StoreDetails';
import LoginPage from './Pages/LoginPage';
import FeedsView from './Pages/FeedsView';
import ProfileInfo from './Pages/ProfileInfo';
import OrderHistory from './Pages/OrderHistory';
import Cart from './Pages/Cart';
import PaymentSuccess from './Pages/PaymentSuccess';
import SubmitPage from './Pages/SubmitPage';
import SubmitRequirement from './Pages/SubmitRequirement';

function App() {
  return (
    <>
     <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path="/" element={<MainPage />} />
         <Route path="/store-details" element={<StoreDetails />} />
         <Route path='/Feed-views' element={<FeedsView/>} />
         <Route path="/Login-Page" element={<LoginPage/>} />
         <Route path='/Profile-info' element={<ProfileInfo/>} />
         <Route path='/Order-history' element={<OrderHistory/>} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/Payment-success' element={<PaymentSuccess/>} />
         <Route path='/Submit-page' element={<SubmitPage/>} />
         <Route path='/Submit-requirement' element={<SubmitRequirement/>} />
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
