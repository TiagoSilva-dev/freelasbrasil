import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import api from '../../services/api';

export default function Home() {
  const [busca, setBusca] = useState('');


  return (
    <main className="App">

      <section className="titulo">
        <h1>Seu Freelancer ,<span> no brasil</span> </h1>
      </section>
      <Link to="/dashboard">Dash</Link>
      <section>
        <input placeholder="Procurar Palavras-Chaves" value={busca} onChange={(e) => { setBusca(e.target.value) }} /><button>Buscar</button>
      </section>

    </main>
  );
}