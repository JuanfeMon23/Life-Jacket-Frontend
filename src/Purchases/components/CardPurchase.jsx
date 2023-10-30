import React,{useState, useEffect} from 'react'
import {Card, CardBody} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import {AiTwotoneEdit} from 'react-icons/Ai';
import {FaSearch} from 'react-icons/fa';
import {Input} from "@nextui-org/react";
import { WatchPurchase } from './WatchPurchase';
import { usePurchases } from '../context/purchaseContext';



export  function CardPurchase() {
    const {purchases} = usePurchases();

    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const keys = [ 'purchaseDepartment'];

    const handleChange = (e) => {
      setQuery(e.target.value);
    };

    useEffect(() => {
      const search = purchases.filter((purchase) => 
        keys.some((key) => purchase[key].toLowerCase().includes(query))
      );
      setSearchResults(search);
    },[query, purchases]);

  return ( 
    <>
      <div className="w-[340px] h-[100px] px-5 m-5 rounded-2xl  justify-center items-centertext-white relative ">
        <Input
          onChange={handleChange}
          value={query}
          label={'Buscar compra'}
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder={''}
          startContent={
            <FaSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" /> 
          }
  />

    </div>
    <div className=' flex flex-wrap'>
      {searchResults.map((purchase) => (
          <Card key={purchase.idPurchase} className=' h-30 w-13 mx-2 my-2 shadow-2xl'>
          <div className='bg-gradient-to-r from-[#252525] to-[#231949] h-10 text-white justify-around flex mx-3 rounded-lg' >
            <p>Precio</p>
            <p>{purchase.purchaseFinalPrice}</p>  
          </div>
    
          <CardBody className=' bg-white'>
            <div className=' bg-white flex  items-center'> 
                <p className=' text-zinc-950 mx-3 text-sm '>Fecha: </p>
                <div className=' border-2 border-indigo-500/75 rounded-lg py-1 px-1 flex w-40'>
                  <p className=' text-zinc-950 text-center text-xs'>{purchase.purchaseDate}&nbsp;</p>
    
                </div>
            </div>
            <div className=' flex my-2 items-center'>
                <p className=' mx-3 text-sm'>Cliente: </p>
                <p className='border-2 border-indigo-500/75 rounded-lg py-1 px-1 w-40 text-xs'>{purchase.client.clientName}</p>
            </div>
    
            <div className='flex justify-center pt-3'>
              <div>
                <button className=''> <WatchPurchase purchase={purchase} id={purchases.id}/></button>
              </div>
            </div>
          </CardBody>
          </Card> 
       ))}
       </div>

       </>
  )
}
