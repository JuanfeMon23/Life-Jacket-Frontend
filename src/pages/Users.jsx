import React from 'react'
import { UserRegister } from '../components/formComponents/UserRegister'
import { Navigation } from '../components/globalComponents/Navigation'
import { Title } from '../components/globalComponents/Title'

export function Users() {
  return (
    <div className='flex'>
        <Navigation/>
        {<Title Title='Usuarios'/>}
        <UserRegister />
    </div>
  )
}
