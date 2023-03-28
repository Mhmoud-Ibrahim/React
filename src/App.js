
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import $ from 'jquery';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import Portfolio from './Components/Portfolio/Portfolio';
let routers = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/> },
    {path:'Home',element:<Home/>},
    {path:'About',element:<About/> },
    {path:'Portfolio',element:<Portfolio/>},
    {path:'Contact',element:<Contact/>},
    {path:'*',element:<Notfound/> },
  ]}
])


function App() {
 return<>
 <RouterProvider router={routers}></RouterProvider>
 </>
}
export default App;
