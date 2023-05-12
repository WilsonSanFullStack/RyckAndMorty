import {Link} from 'react-router-dom';

const Card = ({id, name, gender, image}) =>{
  return (
    <div>
      <h1>Esto es la Card</h1>
      <img src={image} alt={name} />
       <Link to={`/detail/${id}`}>
       <h1>{name}</h1>
       </Link>
      <h2>{gender}</h2>
    </div>
  )
};

export  default Card;