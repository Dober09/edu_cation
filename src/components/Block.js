import React from 'react'
import '../Styles/block.css'


export default function Block({url ,text}) {
  return (
    <div className="blocks">
      <div className="block">
        <div className="bg">
        <img src={url} alt={text} />
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
