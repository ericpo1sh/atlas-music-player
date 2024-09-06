import React from 'react'

const PlayListItem = () => {
  return (
    <div className='w-96 flex-col mt-6'>
      <div className='flex justify-between'>
        <div className='text-left'>
          <p className='text-base  font-bold'>Electric Fever</p>
          <p className='text-slate-500 font-medium'>Neon Jungle</p>
        </div>
        <p className='text-slate-500 font-medium text-lg mt-2'>8:41</p>
      </div>
    </div>
  )
}

export default PlayListItem
