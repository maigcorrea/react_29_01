import React from 'react';
import css from './Home.module.css';

const Home = () => {
    const estilo= {
        color:"red",
        fontSize: 20,
    }

  return (
    <>
        <h1 style={estilo}>HOME</h1>

        {/* Se pone className porque no es html, es js */}
        {/* aria- para el tema de la accesiblidad, navegadores lectores */}
        <br />
        <div  id="" className={css.card}>
            <h2>MI HOME</h2>
        </div>

        <div  id="" className={css.card}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quasi temporibus dignissimos aut voluptas alias, ullam quae, velit quas odit, magni ab! Modi, dolorem. Eveniet sit placeat nam tempore ea.</p>
        </div>


        {/* eventos */}
        {/* <button onClick={}>Click</button> */}
    </>
  )
}

export default Home