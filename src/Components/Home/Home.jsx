import React from 'react';
import img1 from '../../assets/avataaars.svg';
import './Home.css'
export default function Home() {
  return<>
    <header className="masthead vh-100 py-5 mt-5 text-white text-center">
        <div className="container d-flex py-3 align-items-center flex-column"> 
        <img className="masthead-avatar w-100 mb-5" src={img1} alt=""/>
            <h1 className="masthead-heading text-uppercase mb-0">Start React</h1>
            <div className="divider-custom divider-light">
                <div className="line "></div>
                <div className="divider-custom-icon text-danger">
                  <i id='star' className=" fas fa-star fa-2x "></i></div>
                <div className="line"></div>
            </div>
            <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </header> 
  </>
}
