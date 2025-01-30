import Botton from "./components/Botton"
import Card from "./components/Card"
import Cards from "./components/Card"
import Contacto from "./components/Contacto"
import Home from "./components/Home"


function App() {
  let h1=<h1>Hola amigo</h1>

  let persons={
    name:"Redu",
    age:30
  }

  let nums=[1,2,3,4,5]


  let estilo={
    backgroundColor:"green",
    color:"white"
  }

  let datos=[
    {
      id:0,
      titulo:"Toni de la Rosa",
      img:"https://randomuser.me/api/portraits/men/85.jpg",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima perferendis voluptatem, voluptatum, quis optio cumque saepe veniam ducimus deleniti qui quos iusto quam hic provident? Reiciendis eius quas consequatur?",
    },
    {
      id:1,
      titulo:"Rosa de Toni",
      img:"https://randomuser.me/api/portraits/women/39.jpg",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima perferendis voluptatem, voluptatum, quis optio cumque saepe veniam ducimus deleniti qui quos iusto quam hic provident? Reiciendis eius quas consequatur?",
    },
    {
      id:2,
      titulo:"Rosa y Toni",
      img:"https://randomuser.me/api/portraits/men/66.jpg",
      content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A minima perferendis voluptatem, voluptatum, quis optio cumque saepe veniam ducimus deleniti qui quos iusto quam hic provident? Reiciendis eius quas consequatur?",
    }
]
  return (
    <>
      {/* <h1>Cabecera h1</h1>
      {h1}
      {"hola de nuevo"}
      {<span>Heyyy</span>}
      {1234} */}
      {/* se recorre el array automáticamente y escribe cada número */}
      {/* {[1,2,3,4]} */}

      {/* No se renderiza, no se pinta nada  */}
      {/* {true}
      {[1,2,true,false,undefined,null,"hola"]} */}

       {/* Los Objetos no son hijos de elementos, se puede acceder a una propiedad, pero no al objeto entero dentro de <></> */}
       {/* {persons.name} */}

       {/* No se puede meter un condicional directamente, tampoco un bucle, el único bucle que se puede poner es .map, como consicional se puede poner el ternario */}
       {/* {if(true){"hola"}} */}
       {/* {nums.map(num=><li key={num}>{num}</li>)} */}

       {/* Funciones, sólo son válidas si devuelven algo , y hay que autollamarlas con ()*/}
       {/* {
       
       (function(){
          return "hola"
        })()

       } */}


       {/* Componentes. También s epueden anidar componentes */}
       
       {/* <Home /> */}
       {/* <Contacto></Contacto> */}
       {/* <Botton></Botton>
       <Botton titulo="Eliminar"></Botton>
       <Botton titulo="Ver"></Botton> 
       <Botton></Botton> */}

       {
        datos.map(dato => {
          return <Card key={dato.id} titulo={dato.titulo} img={dato.img} content={dato.content}></Card>
        })
       }
       

    </>
  )
}

export default App
