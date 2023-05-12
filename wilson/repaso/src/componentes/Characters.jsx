import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { getCharacters } from '../redux/actions';
import Card from './Card';


const Character = () =>{
  const dispatch = useDispatch();

  const allPepitos = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters())
  }, [])

  return (
    <div>
      <h1>Characters: </h1>
      {allPepitos.map((char) => {
        return (
          <Card
          key={char?.id}
          id={char?.id}
          image={char?.image}
          name={char?.name}
          gender={char?.gender}
          />
        )
      })}
    </div>
  )
};

export default Character;