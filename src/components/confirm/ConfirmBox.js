import React, { useEffect, useState } from 'react'
import './ConfirmBox.css'
const ConfirmBox = ({message="Are You Sure ?" , AppearNow=true , func}) => {
    const [State,setState] = useState(1);
    const [Show,SetShow] = useState(AppearNow)
    useEffect(() => {
        if(State===true){
            alert("Ok !, Perform Command !")
            SetShow(false);
            func(false)
        } 
        if(State===false) {
            alert("Ok ! , Disappear Confirm Box")
            SetShow(false);
            func(false)
        }
    },[State,func])

  return (
    <>
    {
        Show ? 
    <div className='confirmbox'>
        <div>{message}</div>
        <div>
            <button onClick={() => setState(false)}>No</button>
            <button onClick={() => setState(true)}>Yes</button>
        </div>
    </div>
    : ''
    }
    </>
  )
}

export default ConfirmBox