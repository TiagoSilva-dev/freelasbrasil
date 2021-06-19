import React from 'react';
import logo from '../../assets/383.png';
import './style.css';
export default function Header() {
  return (
    <header className="header">
      <section>
        <img src={logo} alt="" />
      </section>
    </header>
  );
}