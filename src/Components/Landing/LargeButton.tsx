import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

interface LargeButtonProps {
  link: string
  title: string
  cards: React.ReactNode[]
}

const LargeButton: React.FC<LargeButtonProps> = ({ link, title, cards }) => {
  const history = useHistory()
  const [translateX, setTransLateX] = useState<number>(10)
  const [rotate, setRotate] = useState<number>(5)

  const handleMouseOver = () => {
    setTransLateX(100)
    setRotate(15)
  }
  const handleMouseOut = () => {
    setTransLateX(10)
    setRotate(5)
  }
  return (
    <motion.div
      onClick={() => history.push(link)}
      className="cursor-pointer w-1/2 h-4/5 m-auto rounded-md flex flex-col items-center justify-center transition-all bg-black bg-opacity-0 hover:bg-opacity-20"
      onHoverStart={handleMouseOver}
      onHoverEnd={handleMouseOut}
    >
      <div className="h-96 w-80 select-none rounded-md pointer-events-none">
        <motion.div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            scale: 0.8,
          }}
        >
          <motion.div
            className="bg-white"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              borderRadius: '10px',
              boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
            }}
            animate={{
              x: -translateX,
              rotate: -rotate,
            }}
          >
            {cards[0]}
          </motion.div>
          <motion.div
            className="bg-white"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              borderRadius: '10px',
              boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
            }}
            animate={{
              y: -translateX / 5,
            }}
          >
            {cards[1]}
          </motion.div>
          <motion.div
            className="bg-white"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              borderRadius: '10px',
              boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
            }}
            animate={{
              x: translateX,
              rotate,
            }}
          >
            {cards[2]}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="font-bold text-4xl transition-colors group-hover:text-blue-700"
        animate={{
          y: translateX / 8,
        }}
      >
        {title}
      </motion.div>
    </motion.div>
  )
}

export default LargeButton
