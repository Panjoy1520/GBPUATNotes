import React from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

function FavouritePage() {
  return (
    <div className="flex bg-neutral-900 text-white min-h-screen">
          <SideBar  />
          <div className="flex flex-col flex-1">
            <TopBar place={"Favourites"}/>
            <main className=" overflow-y-auto">
              <h1 className='text-center text-2xl'>Coming soon...</h1>
            </main>
          </div>
        </div>
  )
}

export default FavouritePage