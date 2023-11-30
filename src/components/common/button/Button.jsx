import React from 'react'

function Button({children}) {
  return (
    <button className="px-[34px] py-[13px] bg-blue border-[2px] border-blue rounded-[8px] text-[16px] font-bold leading-[24px] text-white">{children}</button>
  )
}

export default Button;