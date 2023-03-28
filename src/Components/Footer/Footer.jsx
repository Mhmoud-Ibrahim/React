import React from 'react'
import './footer.css'
export default function Footer() {
  return<>
  
<section className='footer mt-3 py-5'>
<div className="container">
  <div className="row">
    <div className="col-md-4 text-center">
    <h1 className='h4'>LOCATION</h1>
    <div className="item text-center  ">
       <h4>2215 John Daniel Drive</h4>
    <h4>Clark, MO 65243</h4>
    </div>
   
    </div>
    <div className="col-md-4 text-center">
  <h1 className='h4'>AROUND THE WEB</h1>
  <div className="social ">
    <i className='fab fa-facebook-f p-3 text-white m-2'></i>
    <i className='fab fa-twitter p-3 text-white m-2 '></i>
    <i className='fab fa-linkedin-in  p-3 text-white m-2 '></i>
    <i className='fab fa-dribbble p-3 text-white m-2 '></i>
  </div>
    </div>
    <div className="col-md-4 text-center">
      <div className="item">
      <h1 className='h4'>ABOUT FREELANCER</h1>
      <h4>Freelance is a free to use, MIT licensed </h4>
       <h4>Bootstrah4 theme created by Route</h4>
      </div>
    </div>
  </div>
</div>

</section>
<div className="footerend text-center py-2">
  <h1 className='h6' >Copyright © Your Website 2021</h1>
</div>
  </>
}
