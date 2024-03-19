'use client'

import SearchBar from "@/components/searchBar/SearchBar"

import './Content.css'

interface ContentProps {
  children: React.ReactNode
}

const Content = ({children}: ContentProps) => {
  return (
    <div className='container-folder'>
      <SearchBar />
      <div className='container-folder-and-cards'>
        {children}
      </div>
    </div>
  )
}

export default Content