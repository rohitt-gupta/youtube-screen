import React from 'react'
import logo from '../assets/Logo.png'
import { Menu, Upload, Bell, User } from 'lucide-react'
import Button from '../components/Button'

const PageHeader = () => {
  return (
    <div className='flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4'>
      <div className='flex gap-4 items-center flex-shrink-0'>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="logo" className='h-6' />
        </a>
      </div>
      <div>Right</div>
      <div className='flex flex-shrink-0 md:gap-2'>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  )
}

export default PageHeader