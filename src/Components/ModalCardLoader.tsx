import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import CardLoader from '../Deck/CardLoader'


const ModalCardLoader: React.FC = () => {
    const [isFlipped, setisFlipped] = useState<boolean>(false)
    return(
        <div className="h-96 w-80 select-none" >
            <ReactCardFlip infinite={true} isFlipped={isFlipped} >
                <div className="h-96 w-80" onMouseOver={() => setisFlipped(!isFlipped)}>
                    <CardLoader />
                </div>
                <div className="h-96 w-80" onMouseOver={() => setisFlipped(!isFlipped)}>
                    <div className="h-full w-full p-2.5 fontSizeAdjust flex flex-col items-center justify-between" 
                                style={{backgroundColor: "#f5f1e3"}}
                        >
                            <div className="w-full flex flex-col" >
                                <div className="h-16 w-full rounded-bl-none bg-gray-400 animate-pulse" />
                                <div className="h-4 w-3/4 rounded-b bg-gray-400 animate-pulse" />
                            </div>
                            
                            
                            <div className="flex flex-col bg-white p-2.5 w-full" >
                                <div className="w-full flex justify-between">
                                    <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    <div className="h-4 w-20 my-0.5 rounded bg-gray-400 animate-pulse"/>
                                </div>
                                <div className="w-full flex justify-between">
                                    <div className="h-4 w-12 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse"/>
                                </div>
                                <div className="w-full flex justify-between">
                                    <div className="h-4 w-12 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse"/>
                                </div>
                                <div className="w-full flex justify-between">
                                    <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    <div className="flex flex-col items-end" >
                                        <div className="h-4 w-20 my-0.5 rounded bg-gray-400 animate-pulse"/>
                                        <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse"/>
                                        <div className="h-4 w-24 my-0.5 rounded bg-gray-400 animate-pulse"/>
                                    </div>
                                
                                </div>
                                
                            </div>
                            
                            <div className="flex justify-evenly w-full" >
                                <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse" />
                                <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse" />
                                <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse" />
                            </div>
                
                            <div className="flex justify-evenly bg-white p-2.5 w-full" >
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                                        <div className="w-8 h-4 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                                        <div className="w-8 h-4 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                                        <div className="w-8 h-4 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                                        <div className="w-8 h-4 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                                        <div className="w-8 h-4 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                                        <div className="w-8 h-4 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    </div>
                                    
                            </div>
                    </div>
                </div>
        
            </ReactCardFlip>          
    </div>
       
    )
}


export default ModalCardLoader