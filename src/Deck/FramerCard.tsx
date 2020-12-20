import React, {useEffect} from "react";
import {
  motion,
  useMotionValue,
  PanInfo,
  useTransform
} from "framer-motion";
import Card from "./Card";
import { GetPokemonArrayInterface } from "../Components/CardInterface";
import logo from "../Assets/colored-logo.png"

interface CardProps {
    key?: number
    initial?: InitialProps
    animate?: AnimateProps
    transition?: TransitionProps
    exitX?: number
    index: number
    drag?: boolean | "x" | "y"
    setExitX?: (x: number) => void
    setIndex?: (x: number) => void
    pokeArray: GetPokemonArrayInterface[] | undefined
    length: number
    whileHover?: {
      scale: number,
      boxShadow: string
    }
    whileTap?: {
      cursor: string,
      scale: number,
      boxShadow: string
     }
  }
  
  interface TransitionProps {
      scale?: { duration: number },
      opacity?: { duration: number},
      type?: "inertia" | "spring" | "tween",
      stiffness?: number,
      damping?: number,
  }
  
  interface AnimateProps {
      scale: number,
      y: number,
      opacity: number
  }
  interface InitialProps {
      scale: number,
      y: number,
      opacity: number
    
  }

  const getID = (url: string) => {
    const tempURL = url.split("/")
    return +tempURL[tempURL.length - 2]
  }

  const EndCard: React.FC = () => {
    return (
    <div className="h-full w-full bg-white p-2.5 flex flex-col items-center justify-around" >
      <div className="text-2xl font-bold text-gray-500" >End of the Deck</div>
      <img src={logo} draggable="false" onDragStart={ e => e.preventDefault()} className="w-auto" alt="poke-logo" />
      <div className="text-2xl font-bold text-gray-500">Swipe to Reload</div>
    </div>
    )
  }


  
  const FramerCard: React.FC<CardProps> = (props) => {
    const x = useMotionValue(0);
    const maximumX = 300
    const rotate = useTransform(x, [-maximumX, 0, maximumX], [-15, 0, 15], {
      clamp: false,
    })

    const {
      initial,
      animate,
      transition,
      exitX,
      index,
      drag,
      setExitX,
      setIndex,
      pokeArray,
      length,
      whileHover,
      whileTap
    } = props
    

  
    function handleDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
        if (info.offset.x < -maximumX) {
          if(setExitX) setExitX(-1000);
          if(setIndex) setIndex(index + 1);
        }
        if (info.offset.x > maximumX) {
          if(setExitX) setExitX(1000);
          if(setIndex) setIndex(index + 1);
        }
    }


  
    return (
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          borderRadius: "10px",
          x: x,
          rotate: rotate,
          cursor: "grab",
        }}
        whileHover={whileHover}
        whileTap={whileTap}
        drag={drag}
        dragConstraints={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }}
        onDragEnd={handleDragEnd}
        initial={initial}
        animate={animate}
        transition={transition}
        exit={{
          x: exitX,
          transition: { duration: 0.2 }
        }}
      >
          {(pokeArray && (index < length)) 
            ? <Card  id={getID(pokeArray[index].url)}/> 
            : <EndCard />
          }
      </motion.div>
    );
  }

export default FramerCard