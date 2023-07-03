import React, { useEffect } from 'react'
import { fetchData } from '../redux/data/dataSlice'
import { useDispatch } from 'react-redux'

function Home() {

 

  return (
    <div className='bg-primary min-vh-100 text-white py-5' >
      <div className='container' >
        <h2>Home</h2>
      </div>
    </div>
  )
}

export default Home