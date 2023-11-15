import React from 'react'
import { Title } from "../../components/globalComponents/Title";
import {ExchangeInfo} from './ExchangeInfo';
import { ExchangeDetail } from './ExchangeDetail';

export  function CreateExchange() {
  return (
    <div>
      <Title Title='Crear intercambio'/>
      <div className=' flex'> 
        <ExchangeDetail/>
        <ExchangeInfo/>
      </div>

    </div>
  )
}
