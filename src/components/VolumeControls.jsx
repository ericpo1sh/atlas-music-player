import React from 'react'
import volume from '../assets/volume.svg'

const VolumeControls = () => {
  return (
    <div className='flex-col flex items-center mt-6'>
      <div className='w-96 flex justify-between gap-4'>
        <img src={volume} className='w-5'></img>
        <input type='range' min='0' max='100' className='w-full cursor-pointer caret-slate-500 bg-slate-500 accent-slate-500 rounded-lg '></input>
      </div>
    </div>
  )
}

export default VolumeControls
