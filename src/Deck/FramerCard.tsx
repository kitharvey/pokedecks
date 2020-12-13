import React, {useEffect} from "react";
import {
  motion,
  useMotionValue,
  PanInfo
} from "framer-motion";
import Card from "../Components/Card";
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
    setPokemonNameSwipedUp?: (x: string) => void
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


  
  const FramerCard: React.FC<CardProps> = (props) => {

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
      setPokemonNameSwipedUp,
      whileHover,
      whileTap
    } = props
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);


    useEffect(() => {
      if((index === length + 1) && setIndex) {
        setIndex(0)
      } 
    }, [index, setIndex, length])




  
    function handleDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
        if (info.offset.x < -200) {
          if(setExitX) setExitX(-1000);
          if(setIndex) setIndex(index + 1);
        }
        if (info.offset.x > 200) {
          if(setExitX) setExitX(1000);
          if(setIndex) setIndex(index + 1);
        }
        if (info.offset.y < -300 && pokeArray) {
          console.log(pokeArray[index])
          if(setPokemonNameSwipedUp) setPokemonNameSwipedUp(pokeArray[index].name)
        }
    }

    const EndCard: React.FC = () => {
      return (
      <div className="h-full w-full bg-white rounded-xl p-2.5 relative z-10 flex flex-col items-center justify-around" >
        <div className="text-2xl font-bold text-gray-500" >End of the Deck</div>
        <img src={logo} draggable="false" onDragStart={ e => e.preventDefault()} className="w-auto" alt="poke-logo" />
        <div className="text-2xl font-bold text-gray-500">Swipe to Reload</div>
      </div>
      )
    }
  
    return (
      <motion.div
        style={{
          width: 256,
          height: 384,
          position: "absolute",
          top: 0,
          borderRadius: "10px",
          x: x,
          y: y,
          cursor: "grab",
        }}
        whileHover={whileHover}
        whileTap={whileHover}
        drag={drag}
        dragDirectionLock
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
          {(pokeArray) &&  (
            (index >= length) 
              ? <EndCard />
              : <Card  link={pokeArray[index].url} name={pokeArray[index].name} index={index} /> )
              // ? <div>{index}</div>
              }
      </motion.div>
    );
  }

export default FramerCard