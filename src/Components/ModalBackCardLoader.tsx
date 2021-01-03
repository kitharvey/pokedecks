import React from 'react'



const ModalBackCardLoader: React.FC = () => {
    return(
        <div className="h-max w-96" >
                    <div className="h-full w-full p-4 flex flex-col bg-white">
                            <div className="w-6 h-6 rounded bg-gray-500 animate-pulse mr-auto" />
                            <div className="w-full flex flex-col mt-4" >
                                <div className="h-16 w-full rounded-bl-none bg-gray-400 animate-pulse" />
                                <div className="h-6 w-3/4 rounded-b bg-gray-400 animate-pulse" />
                            </div>
                            
                            
                            <div className="flex flex-col  w-full mt-4" >
                                <div className="w-full grid grid-cols-2 gap-x-1">
                                    <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    <div className="h-3.5 w-20 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                </div>
                                <div className="w-full grid grid-cols-2 gap-x-1">
                                    <div className="h-4 w-12 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    <div className="h-3.5 w-16 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                </div>
                                <div className="w-full grid grid-cols-2 gap-x-1">
                                    <div className="h-4 w-12 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    <div className="h-3.5 w-16 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                </div>
                                <div className="w-full grid grid-cols-2 gap-x-1">
                                    <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse" />
                                    <div className="flex flex-col items-start" >
                                        <div className="h-3.5 w-20 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                        <div className="h-3.5 w-16 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                        <div className="h-3.5 w-24 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                    </div>
                                
                                </div>
                                
                            </div>

                            <div className="w-full h-max mt-4" >
                                <div className="w-20 h-6 rounded bg-gray-500 animate-pulse mr-auto" ></div>
                                <div className="flex flex-col w-full mt-4" >
                                    <div className="w-full grid grid-cols-2 gap-x-1">
                                        <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse" />
                                        <div className="h-3.5 w-20 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                    </div>
                                    <div className="w-full grid grid-cols-2 gap-x-1">
                                        <div className="h-4 w-12 my-0.5 rounded bg-gray-400 animate-pulse" />
                                        <div className="h-3.5 w-16 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                    </div>
                                    <div className="w-full grid grid-cols-2 gap-x-1">
                                        <div className="h-4 w-16 my-0.5 rounded bg-gray-400 animate-pulse" />
                                        <div className="h-3.5 w-20 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                    </div>
                                    <div className="w-full grid grid-cols-2 gap-x-1">
                                        <div className="h-4 w-12 my-0.5 rounded bg-gray-400 animate-pulse" />
                                        <div className="h-3.5 w-16 my-0.5 rounded bg-gray-200 animate-pulse"/>
                                    </div>
                                </div>
                            </div>
                           
                    </div>
        </div>       
    )
}


export default ModalBackCardLoader