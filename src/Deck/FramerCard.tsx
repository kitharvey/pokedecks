import React, {useState, useEffect} from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  PanInfo
} from "framer-motion";
import pikachu from "./pikachucard.jpg"
import { useGetPokemonList } from "../Components/useGetPokemonList";
import { GetPokemonArrayInterface } from "../Components/CardInterface";
import Card from "../Components/Card";

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
    const [pokeArray, setPokeArray] = useState<GetPokemonArrayInterface[]>()
    const [pokemonIndex, setPokemonIndex] = useState<number>(0)
    const [pokemonIndexMax, setPokemonIndexMax] = useState<number>(2)
    const result = useGetPokemonList()
    useEffect(() => {
      let newData
      if(result !== undefined) {
              newData = result.results.slice(0, result.results.length)
              setPokeArray(newData)
              setPokemonIndexMax(result.results.length)
      }
      return () => {
              setPokeArray(pokeArray)
      }
  }, [result])

  useEffect(() => {
    if(pokemonIndex > pokemonIndexMax + 1) setPokemonIndex(0)
    if(pokemonIndex < pokemonIndexMax)setPokemonIndex(pokemonIndex => pokemonIndex + 1)
    console.log(pokemonIndex)
  }, [props.index])



    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.9, 1, 0.9]);
    const rotate = useTransform(x, [-150, 0, 150], [-15, 0, 15], {
      clamp: false
    });

  
    function handleDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
              if (info.offset.x < -200) {
                if(props.setExitX) props.setExitX(-350);
                if(props.setIndex) props.setIndex(props.index + 1);
               
              }
              if (info.offset.x > 200) {
                if(props.setExitX) props.setExitX(350);
                if(props.setIndex) props.setIndex(props.index + 1);
              }
       

    }
  
    return (
      <motion.div
        style={{
          width: 250,
          height: 300,
          position: "absolute",
          top: 0,
          x: x,
          rotate: rotate,
          cursor: "grab",
        }}
        whileTap={{ cursor: "grabbing" }}
        drag={props.drag}
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
          opacity: 0,
          scale: 0.5,
          transition: { duration: 0.2 }
        }}
      >
        <p>{props.index}</p>
          {(pokeArray) && <Card  link={pokeArray[pokemonIndex].url} name={pokeArray[pokemonIndex].name} index={pokemonIndex} />}
      </motion.div>
    );
  }

export default FramerCard