import React from "react";
import { motion, useMotionValue, PanInfo, useTransform } from "framer-motion";
import { useAppDispatch } from "../../reduxStore/hooks";
import { setPokemonIndex } from "../../reduxStore/pokemonSlice";
import {
  AnimateProps,
  InitialProps,
  TransitionProps,
} from "../../InterfacesProps/Interfaces";

interface FramerCardProps {
  initial?: InitialProps;
  animate?: AnimateProps;
  transition?: TransitionProps;
  exitX?: number;
  index: number;
  drag?: boolean | "x" | "y";
  setExitX?: (x: number) => void;
  whileHover?: {
    scale: number;
    boxShadow: string;
  };
  whileTap?: {
    cursor?: string;
    scale?: number;
    boxShadow?: string;
  };
}

const FramerCard: React.FC<FramerCardProps> = (props) => {
  const dispatch = useAppDispatch();
  const maximumX = 100;
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-maximumX, 0, maximumX], [-5, 0, 5], {
    clamp: false,
  });

  const {
    initial,
    animate,
    transition,
    exitX,
    index,
    drag,
    setExitX,
    whileHover,
    whileTap,
    children,
  } = props;

  function handleDragEnd(
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    if (info.offset.x < -maximumX) {
      if (setExitX) setExitX(-maximumX * 5);
      dispatch(setPokemonIndex(index + 1));
    }
    if (info.offset.x > maximumX) {
      if (setExitX) setExitX(maximumX * 5);
      dispatch(setPokemonIndex(index + 1));
    }
  }

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
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
        left: 0,
      }}
      onDragEnd={handleDragEnd}
      initial={initial}
      animate={animate}
      transition={transition}
      exit={{
        x: exitX,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FramerCard;
