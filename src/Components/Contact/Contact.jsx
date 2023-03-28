import React from 'react'
import './contact.css'
export default function Contact() {
  return <>
  <section id='contact' className='contact'>
 <div className="container d-flex py-3 align-items-center flex-column"> 
            <h1 className="contact-heading text-uppercase mb-0">CONTACT ME</h1>
            <div className="divider-custom divider-light">
                <div className="line2 "></div>
                <div className="divider-custom-icon "><i className="text-white fas fa-star fa-2x m-2"></i></div>
                <div className="line2"></div>
            </div>
        </div>
        <div className="conainer">
          <div className="row w-50 m-auto">
            <input className='form-control mb-3 border-0 py-2'  type="text" placeholder='Name' required/>
          <hr />
            <input className='form-control mb-3 border-0 py-2'  type="email" placeholder='Email Adress' required/>
          <hr />
            <input className='form-control mb-3 border-0 py-2'  type="phone" placeholder='Phone Number' required/>
          <hr />
          <textarea className='mb-3 border-0 form-control' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
          <button className='btn sendBtn text-white py-2  fs-3 w-25 px-0'>Send</button>
          </div>
        </div>
  </section>
 
  
  </>
}
