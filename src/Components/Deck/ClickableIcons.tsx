import React from 'react'

interface ClickableIconsProps {
  text: string
  icon: React.ReactNode
  colorHover: string
  color: string
}

const ClickableIcons: React.FC<ClickableIconsProps> = ({ text, icon, color, colorHover }) => (
  <div
    className={`relative group text-2xl font-black text-${color} leading-none cursor-pointer hover:text-${colorHover}`}
  >
    {icon}
    <p className="absolute group-hover:opacity-100 opacity-0 transition-all right-1/2 -top-7 py-1 px-2 transform translate-x-1/2 bg-black rounded-md text-white text-xs font-light whitespace-nowrap">
      {text}
    </p>
  </div>
)

export default ClickableIcons
