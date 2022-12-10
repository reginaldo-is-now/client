import React from 'react'

function SectionTitle({
    title,
}) {
    return (
    <div className='flex gap-10 items-center'>
        <h1 className='text-2xl text-white'>{title}</h1>
        <div className='w-40 h-[1px] bg-tertiary'>

        </div>
    </div>
  )
}

export default SectionTitle