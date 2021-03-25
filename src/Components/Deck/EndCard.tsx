import logo from "../../assets/colored-logo.png"
import React from 'react'

const EndCard: React.FC = () => {
        return (
            <div className="h-full w-full bg-white p-4 flex flex-col items-center justify-around rounded-md" >
            <div className="text-2xl font-bold text-gray-500" >End of the Deck</div>
            <img src={logo} draggable="false" onDragStart={ e => e.preventDefault()} className="w-auto" alt="poke-logo" />
            <div className="text-2xl font-bold text-gray-500">Swipe to Reload</div>
          </div>
        );
}


export default EndCard