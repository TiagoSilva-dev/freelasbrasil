import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Header from '../../components/Header';
import api from '../../services/api';
export default function Dashboard() {
  const [freelas, setFreelas] = useState([]);

  useEffect(() => {
    async function loadFreelas() {
      await api.get('/freelas').then((response) => {
        setFreelas(response.data);
      }).catch((error) => {
        console.log(error);
      });

    }
    loadFreelas();
  }, [freelas])


  return (
    <div>
      <Header />
      <main>
        <h1>Freelances Disponiveis</h1>
        {freelas.length > 0 ? (freelas.map((item, index) => {
          return (
            <article className="artigo">
              <header className="titulo">
                <a href={item.link} target="blank">{item.titulo}</a>
              </header><span>{item.dias}</span>
              <section>
                <div className="valor">
                  <p>{item.oferta}</p>
                </div>
                <div className="descricao">
                  <span>
                    {item.descricao}
                  </span>
                </div>
              </section>
            </article>
          )
        })) : (<span>Carregando ... </span>)}

      </main>


    </div>
  );
}