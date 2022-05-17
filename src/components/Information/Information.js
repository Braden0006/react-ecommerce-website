import React from 'react'
import InformationCard from '../InformationCard/InformationCard'
import './Information.css'

export default function Information() {
  return (
    <div className='information-container' id='about'>
        <h1 className='information_title'>Why Succulents?</h1>
        <InformationCard />
    </div>
  )
}
