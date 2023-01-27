import React from 'react'
import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts'

function Home() {

    const {state} = CartState()

  return (
    <div classname ="home">
      <Filters />
      return <SingleProducts prod = {prod} key={prod.id}/>
    </div>
  )
}

export default Home
