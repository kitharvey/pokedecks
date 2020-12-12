import React, {useState, useEffect} from "react";
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
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
      if((props.index === props.length + 1) && props.setIndex) {
        props.setIndex(0)
      } 
    }, [props.index, props.setIndex, props.length])




  
    function handleDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
        if (info.offset.x < -200) {
          if(props.setExitX) props.setExitX(-1000);
          if(props.setIndex) props.setIndex(props.index + 1);
        }
        if (info.offset.x > 200) {
          if(props.setExitX) props.setExitX(1000);
          if(props.setIndex) props.setIndex(props.index + 1);
        }
        if (info.offset.y < -300 && props.pokeArray) {
          console.log(props.pokeArray[props.index])
          if(props.setPokemonNameSwipedUp) props.setPokemonNameSwipedUp(props.pokeArray[props.index].name)
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
        whileHover={{
          scale: 1.05,
          boxShadow: "0 15px 50px 1px rgba(0,0,0,.25)",
        }}
        whileTap={{ 
          cursor: "grabbing",
          scale: 1.05,
          boxShadow: "0 15px 50px 1px rgba(0,0,0,.25)"
         }}
        drag={props.drag}
        dragDirectionLock
        dragConstraints={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }}
        onDragEnd={handleDragEnd}
        initial={props.initial}
        animate={props.animate}
        transition={props.transition}
        exit={{
          x: props.exitX,
          transition: { duration: 0.2 }
        }}
      >
          {(props.pokeArray) &&  (
            (props.index >= props.length) 
              ? <EndCard />
              : <Card  link={props.pokeArray[props.index].url} name={props.pokeArray[props.index].name} index={props.index} /> )
              // ? <div>{props.index}</div>
              }
      </motion.div>
    );
  }

export default FramerCard