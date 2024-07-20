import React from 'react'
import { IconType } from 'react-icons'

type HeadingProps={
    icon?: IconType,
    title : string,
}

const Heading :React.FC<HeadingProps>= ({icon :Icon, title}) => {
  return (
    <div className='flex items-center gap-2 mx-6 lg:mx-12 my-4 dark:text-white text-black '>
        {Icon && <Icon size={14} />}
    <span className='font-bold uppercase text-lg relative -bottom-px'>
        {title}
    </span>
    </div>
  )
}

export default Heading