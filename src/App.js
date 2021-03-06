import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Navbar';
import Login from './pages/Login/Login';
import Footer from './pages/Shared/Footer';
import Purchase from './pages/Purchase/Purchase';
import MyOrder from './pages/Dashboard/MyOrder';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/NotFound/NotFound';
import RequireAuth from './pages/Login/RequireAuth';
import Register from './pages/Login/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Payment from './pages/Dashboard/Payment';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import RequireAdmin from './pages/Login/RequireAdmin';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageOrder from './pages/Dashboard/ManageOrder';
import ManageProduct from './pages/Dashboard/ManageProduct';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<MyOrder></MyOrder>}></Route>
            <Route path='review' element={<AddReview></AddReview>}></Route>
            <Route path='profile' element={<MyProfile></MyProfile>}></Route>
            <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>
            <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
          </Route>       
        <Route path='/blog' element={<Blogs />}></Route>        
        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>        
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
