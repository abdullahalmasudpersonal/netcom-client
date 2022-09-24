
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Header2 from "./Pages/Shared/Header3/Header";
import Home from "./Pages/Home/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Post from "./Pages/Profile/Post/Post";
import Profiles from "./Pages/Profiles/Profiles/Profiles";
import About from "./Pages/Profiles/About/About";


function App() {
  return (
    <div>
      <RequireAuth><Header2 /></RequireAuth>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
   {/*      <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} /> */}


        <Route path='/profile' element={<RequireAuth><Profiles /></RequireAuth>}>
          <Route index element={<Post/>} />
          <Route path='about' element={<About/>} />
        </Route>
       {/*  <Route path='/post' element={<RequireAuth><Post /></RequireAuth>} /> */}

      </Routes>
    </div>
  );
}

export default App;
