'use-client'

import Image from 'next/image'

import linkIcon from '@/public/link.svg'

import './AddLink.css'

const AddLink = () => {
  return (
    <div className='container-add-link'>
      <form className='add-link'>
        <div className='add-link_icon-box'>
          <Image src={linkIcon} alt='링크' />
          <input className='text-add-link' placeholder='링크를 추가해 보세요' />
        </div>
        <button className='add-link_button'>추가하기</button>
      </form>
    </div>
  )
}

export default AddLink