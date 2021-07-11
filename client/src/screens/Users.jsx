import React, { useState, useEffect } from 'react'
import { Test } from '../components/Test'
import axios from 'axios'

export const Users = () => {
  const [name, setName] = useState('')

  const getAll = async (name) => {
    console.log(`env variable REACT_APP_API_URL: ${process.env.REACT_APP_API_URL}`)
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/?username=${name}`)
    setName(result.data[0].username)
  }

  useEffect(() => {
    getAll('davidsan')
  }, [])

  return (
    <div>
      <Test />
      <h1>Hello there my friend, {name}.</h1>
    </div>
  )
}
