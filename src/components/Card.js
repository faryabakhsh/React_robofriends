import React from 'react'

export default function (props) {
  return (
      
   <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img src ={`https://robohash.org/${props.id}?200x200`}/>
      <div>
          <h2>{props.name}</h2>
            <p>{props.email}</p>
      </div>
    </div>
    
  )
}
