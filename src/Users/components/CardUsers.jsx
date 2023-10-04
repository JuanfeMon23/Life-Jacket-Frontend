import React, {useState, useEffect} from 'react';
import { useUsers } from '../Context/userContext';
import {Card,CardBody, } from "@nextui-org/react";
import { WatchUser } from './WatchUser';
import {AiTwotoneEdit} from 'react-icons/Ai'
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import {FaSearch} from 'react-icons/fa';
import {Input, useDisclosure} from "@nextui-org/react";
import { EditUser } from './EditUser';


export function CardUsers() {
  const {users} = useUsers();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const keys = ['userName', 'userLastName', 'userEmail'];

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const search = users.filter((user) => 
      keys.some((key) => user[key].toLowerCase().includes(query))
    );
    setSearchResults(search);
  },[query, users]);


  return (
    <> 
    <div className="w-[340px] h-[100px] px-5 rounded-2xl  justify-center items-centertext-white relative ">
      <Input
        onChange={handleChange}
        value={query}
        label={'Buscar usuario'}
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
    {searchResults.map((data) => (
        <Card key={data.idUser} className=' h-30 w-13 mx-2 my-2 shadow-2xl'>
          <div className='bg-gradient-to-r from-[#252525] to-[#231949] h-10 text-white justify-around flex mx-3 rounded-lg' >
            <p>Rol</p>
            <p>{data.Role.rolName}</p>  
          </div>
          
          <CardBody className=' bg-white'>
            <div className=' bg-white flex  items-center m-2'> 
                <p className=' text-zinc-950 mx-3 text-sm '>Nombres:</p>
                <div className=' border-2 border-indigo-500/75 rounded-lg py-1 px-1 flex w-40'>
                  <p className=' text-zinc-950 text-center text-xs'>{data.userName}&nbsp;</p>
                </div>
            </div >

            <div className=' bg-white flex  items-center m-2'>
              <p className=' text-zinc-950 mx-3 text-sm '>Apellidos: </p>
              <div className=' border-2 border-indigo-500/75 rounded-lg py-1 px-1 flex w-40'>
              <p className=' text-zinc-950 text-xs'>{data.userLastName}</p>
              </div>
            </div>

            <div className=' flex my-2 items-center m-2'>
                <p className=' mx-3 text-sm'>Correo: </p>
                <p className='border-2 border-indigo-500/75 rounded-lg py-1 px-1 w-40 text-xs'>{data.userEmail}</p>
            </div>

            <div className='flex  justify-around pt-3'>
              <div>
                <button className=''> <WatchUser user={data} id={data.id}/></button>
              </div>
              <div>
                <button><EditUser/></button>            
              </div>
                  {/* <button className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white w-12' link={''} ></button> */}
                  {/* <EditUser/> */}
                <Button onPress={onOpen} className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg'><Link to={`/Users/${data.idUser}`}><AiTwotoneEdit className='text-white text-2xl'/></Link></Button>
                {/* <button> <Link  to={`/Users/${data.idUser}`}><EditUser user={data} id={data.idUser}/></Link> </button> */}
            </div>
          </CardBody>
        </Card> 
    ))}
    </div>
  
    </>
  )
}
