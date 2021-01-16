import React from 'react'
import egg from "../../Assets/pokemon-egg.png"


const CardLoader: React.FC = () => {
    return (
  
        <div 
            className="h-full w-full p-4 flex flex-col bg-white justify-between relative addFilter"
            
            >
            <div className="w-full h-full relative" 
            style={{
                background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, #eaeaea 100%)`
             }}
            >
                <div className="absolute top-5 w-32 h-12 rounded right-1/2 transform translate-x-1/2 bg-gray-400 animate-pulse " />

                <div className="w-52 h-auto absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2"  >
                <img
                    alt="loader egg"
                    src={egg}
                    draggable="false" 
                    onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
                    style={{
                            filter: "grayscale(1) blur(10px)"
                            }}
                />
                </div>
            </div>
        
            <div className="flex absolute bottom-12 right-1/2 transform translate-x-1/2 " >
                    <div className="-m-0.5 w-10 h-10 rounded-full bg-gray-400 animate-pulse" />
                    <div className="-m-0.5 w-10 h-10 rounded-full bg-gray-400 animate-pulse" />
            </div>
        
        
                <div className="absolute w-32 h-6 rounded bottom-2.5 right-1/2 transform translate-x-1/2 bg-gray-400 animate-pulse"   />
        </div>
        
    )
  }


export default CardLoader