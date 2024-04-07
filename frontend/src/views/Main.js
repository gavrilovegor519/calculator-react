import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Main.css';

function Main() {
  return (
    <div className='Main'>
        <Header/>
        <div className='content'>
            <h1>Главная страница</h1>
        </div>
        <Footer/>
    </div>
  );
}

export default Main;