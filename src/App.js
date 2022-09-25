
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Header2 from "./Pages/Shared/Header3/Header";
import Home from "./Pages/Home/Home/Home";
import Profiles from "./Pages/Profiles/Profiles/Profiles";
import About from "./Pages/Profiles/About/About";
import Post from "./Pages/Profiles/Post/Post";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homes from "./Pages/Home/Home/Homes";


function App() {
  return (
    <div>
      <RequireAuth><Header2 /></RequireAuth>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<RequireAuth><Homes /></RequireAuth>} />
   {/*      <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} /> */}


        <Route path='/profile' element={<RequireAuth><Profiles /></RequireAuth>}>
          <Route index element={<Post/>} />
          <Route path='about' element={<About/>} />
        </Route>
       {/*  <Route path='/post' element={<RequireAuth><Post /></RequireAuth>} /> */}

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
