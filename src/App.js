import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import NavBar from './Components/NavBar';
import StoreDetails from './Pages/StoreDetails';
import LoginPage from './Pages/LoginPage';
import FeedsView from './Pages/FeedsView';
import ProfileInfo from './Pages/ProfileInfo';

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
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
