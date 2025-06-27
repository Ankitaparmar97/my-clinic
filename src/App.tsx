// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header2 from './Header2'
import Header from './Header'
import Nav from './src/Nav';
// import Button from './src/Button';
// import DentalServices from './src/Dentalservices';
// import AboutUs from "./src/AboutUs";
// import Gallery from "./src/Gallery";
// import ContactUs from "./src/ContactUs";
// import Blog from "./src/Blog";
// import {createBrowserRouter}from 'react-router-dom';
// import Home from "./src/Home";
// const router = createBrowserRouter(
//   [
//     {path:"/",
//     element: <div>
//       <Nav/><Home/>,
//       </div>},
//     {path:"AboutUs",
//     element: <div>
//       <Nav/><AboutUs/>,
//       </div>},
//     {path:"Dentalservices",
//     element: <div>
//       <Nav/><DentalServices/>,
//       </div>},
//     {path:"Gallery",
//     element: <div>
//       <Nav/><Home/>,
//       </div>},
//     {path:"Blog",
//     element: <div>
//       <Nav/><Blog/>,
//       </div>},
//   ]
// );
function App() {

  return (
    <>
    {/* <div>
      <RouterProvider router={router} />
    </div> */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: "stretch" }}>
      <Header />
      <Header2 />
      {/* <Nav /> */}

    </div>
     <Nav />
      {/* <div className='image-container'>
    </div>
    <div>
      <h1 style={{ color: 'black' }}>Dental Clinic</h1>
    </div>
    <div>
      <DentalServices/>
    </div>
    <div>
      <AboutUs/>
    </div>
    <div>
      <Gallery/>
    </div>
    <div>
      {<ContactUs/>}
    </div>
    <div>
      <Blog/> 
    </div> */}
    </>
  )
}

export default App
