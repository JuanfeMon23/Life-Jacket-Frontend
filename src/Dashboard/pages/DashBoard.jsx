import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";



export function DashBoard() {


    useEffect(() => {
        
    },[])

  return (
    <div className=' flex'>
        <div>
            <Navigation/>
        </div>

        <div>
            {<Title Title='DashBoard'/>}
        </div>
    </div>
  )
}