import { getCharacterDetail } from "../redux/actions";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {Link, useParams} from 'react-router-dom';
import { useState } from "react";

const CharacterDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const detail = useSelector((state) => state.characterDetail)

  useEffect(() => {
    dispatch(getCharacterDetail(id))
  },[])


  return (
    <div>
      <h1>soy los detalles</h1>
      <h1>{detail?.name}</h1>
      <img src={detail?.image} alt={detail?.name} />
      <h2>{detail?.status}</h2>
    </div>
  )
};

export default CharacterDetail;