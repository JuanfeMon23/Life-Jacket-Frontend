import React, { useEffect } from 'react'
import { Title } from "../../components/globalComponents/Title";
import {ExchangeInfo} from './ExchangeInfo';
import { ExchangeDetail } from './ExchangeDetail';
import { useExchange } from '../context/ExchangeContext';

export  function CreateExchange() {
  const {exchanges, getExchanges} = useExchange();

  useEffect(() => {
    getExchanges();
  }, [])

  let idUltimoExchange = null;

  if (exchanges && exchanges.length > 0) {

    const ultimoExchange = exchanges[exchanges.length - 1];

    idUltimoExchange = ultimoExchange.idExchange;
  }

  return (
    <div>
      <Title Title='Crear intercambio'/>
      <div className=' flex flex-col sm:flex-row'> 
        <ExchangeDetail idExchange={idUltimoExchange}/>
        <ExchangeInfo idExchange={idUltimoExchange}/>
      </div>

    </div>
  )
}
