import Botton from './Botton';
import css from './Card.module.css';

const Card = ({titulo, img, estilo, content}) => {
  return (
    <>
        <div className={css.card}>
            <img src={img} alt={titulo} />
            <h2>{titulo}</h2>
            <p>{content}</p>
            
            <Botton titulo="Me gusta" estilo={estilo}></Botton>
        </div>
    </>
  )
}

export default Card