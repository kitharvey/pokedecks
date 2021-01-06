import { motion } from 'framer-motion';
import React, {useContext} from 'react'
import Card from '../Deck/Card';
import { AppContext } from './Page';



const CenterCard: React.FC = ({}) => {
    const {state} = useContext(AppContext)
        return (
<div className="h-96 w-80 select-none relative">
                            <motion.div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                initial={{
                                    scale: 1,
                                    y: 0,
                                    opacity: 1,
                                }}
                                animate={{
                                    boxShadow: "0 5px 25px 1px rgba(0,0,0,.25)",
                                    scale: 1,
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    // type: "spring",
                                    stiffness: 30,
                                    damping: 30,
                                    opacity: {
                                    duration: 0.5
                                    }
                                }}
                                whileHover={{
                                    cursor: "grab",
                                }}
                                whileTap={{ 
                                    cursor: "grabbing",
                                }}
                                drag
                                dragConstraints={{
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                  }}
                            >
                                <Card id={state.pokemonData.id} />
                            </motion.div>
                </div>
        );
}


export default CenterCard