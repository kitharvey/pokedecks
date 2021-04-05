import { motion } from 'framer-motion'
import React from 'react'
import { AnimateProps, InitialProps, TransitionProps } from '../../InterfacesProps/Interfaces'

interface GameFramerCardProps {
  initial?: InitialProps
  animate?: AnimateProps
  transition?: TransitionProps
  exitX?: number
  rotateX?: number
}

const GameFramerCard: React.FC<GameFramerCardProps> = (props) => {
  const { initial, animate, transition, exitX, rotateX, children } = props

  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        borderRadius: '10px',
      }}
      initial={initial}
      animate={animate}
      transition={transition}
      exit={{
        x: exitX,
        rotate: rotateX,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default GameFramerCard
