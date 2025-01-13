import { useState } from 'react'
import { Outlet } from 'react-router';
import { Menu } from './components/Menu';

const App = () => {

  return (
    <>
     <div className="flex flex-col h-screen" >
      <Menu/>
      <Outlet/>
     </div>
    </>
  )
}

export default App
