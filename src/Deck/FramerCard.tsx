import React, {useState, useEffect} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  PanInfo
} from "framer-motion";
import Card from "../Components/Card";
import { GetPokemonArrayInterface } from "../Components/CardInterface";

interface CardProps {
    key?: number
    initial?: InitialProps
    animate?: AnimateProps
    transition?: TransitionProps
    exitX?: number
    exitY?: number
    index: number
    drag?: boolean | "x" | "y"
    setExitX?: (x: number) => void
    setIndex?: (x: number) => void
    setExitY?: (x: number) => void
    pokeArray: GetPokemonArrayInterface[] | undefined
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
    const [pokemonIndexMax, setPokemonIndexMax] = useState<number>(3)

    useEffect(() => {

      if(props.pokeArray) {
        setPokemonIndexMax(props.pokeArray.length)
      } 
    }, [props.pokeArray])


    useEffect(() => {
      if((props.index === pokemonIndexMax) && props.setIndex) {
        props.setIndex(0)
      } 
    }, [props.index, props.setIndex, pokemonIndexMax])



    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.9, 1, 0.9]);
    // const rotate = useTransform(x, [-150, 0, 150], [-15, 0, 15], {
    //   clamp: false
    // });

  
    function handleDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
        if (info.offset.x < -200) {
          if(props.setExitX) props.setExitX(-800);
          if(props.setExitY) props.setExitY(0);
          if(props.setIndex) props.setIndex(props.index + 1);
        }
        if (info.offset.x > 200) {
          if(props.setExitX) props.setExitX(800);
          if(props.setExitY) props.setExitY(0);
          if(props.setIndex) props.setIndex(props.index + 1);
        }
        if (info.offset.y > 300) {
          if(props.setExitY) props.setExitY(800);
          if(props.setExitX) props.setExitX(0);
          if(props.setIndex) props.setIndex(props.index + 1);
        }
        if (info.offset.y < -300 && props.pokeArray) {
          console.log(props.pokeArray[props.index])
        }


       

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
          // rotate: rotate,
          cursor: "grab",
        }}
        whileTap={{ 
          cursor: "grabbing",
          scale: 1.05,
          boxShadow: "0 25px 50px 12px rgba(0,0,0,.25)"
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
          y: props.exitY,
          // opacity: 0,
          // scale: 0.5,
          // translateX:  ,
          transition: { duration: 0.2 }
        }}
      >
          {(props.pokeArray && props.index < pokemonIndexMax) && <Card  link={props.pokeArray[props.index].url} name={props.pokeArray[props.index].name} index={props.index} />}
      </motion.div>
    );
  }

export default FramerCard