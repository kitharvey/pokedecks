import React from 'react'
import egg from "../Assets/pokemon-egg.png"


const CardLoader: React.FC = () => {
    return (
  
        <div 
            className="h-full w-full p-2.5 flex flex-col justify-between relative addFilter"
            style={{backgroundColor: "#f5f1e3"}}
            >
            <div className="w-full h-80 relative bg-gray-400 border-solid border-4 border-white" 
                >
                <div className="w-52 h-auto absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 animate-pulse"  >
                <img
                    alt="loader egg"
                    src={egg}
                    draggable="false" 
                    onDragStart={ (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
                    style={{
                            filter: "grayscale(1)"
                            }}
                />
                </div>
                <div className="absolute top-2.5 w-12 h-6  rounded right-1/2 transform translate-x-1/2 bg-gray-200 animate-pulse " />
            </div>
        
            <div className="flex absolute bottom-10 right-1/2 transform translate-x-1/2 " >
                    <div className="-m-0.5 w-10 h-10 rounded-full border-solid border-4 border-white bg-gray-400 animate-pulse" />
                    <div className="-m-0.5 w-10 h-10 rounded-full border-solid border-4 border-white bg-gray-400 animate-pulse" />
            </div>
        
        
                <div className="absolute w-32 h-6 rounded bottom-2.5 right-1/2 transform translate-x-1/2 bg-gray-400 animate-pulse"   />
        </div>
        
    )
  }


export default CardLoader