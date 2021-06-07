import React, { Fragment } from 'react'

import { useUser } from 'context/user-context'
import { Link } from 'react-router-dom'

const Home = () => {
  const { logout } = useUser()

  return (
    <Fragment>
      {/* <Button onClick={logout}>logout</Button> */}
      <a href='http://localhost:3000/listAPI/authRequest'>Request autenticada</a>
      <br></br>
      <a href='http://localhost:3000/listAPI/simpleRequest'>Request simples</a>
    </Fragment>
  )
}

export default Home
