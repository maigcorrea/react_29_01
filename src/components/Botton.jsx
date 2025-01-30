import css from './Botton.module.css';

const Botton = ({titulo="Mostrar",estilo}) => {
    
  return (
    <>
        <button style={estilo}>{titulo}</button>
    </>
  )
}

export default Botton