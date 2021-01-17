import React from 'react'



export const LeftCardLoader: React.FC = () => {
    return(
        <div className="h-100 w-full p-4 flex flex-col bg-white">
                <div className="w-7 h-7 rounded bg-gray-500 animate-pulse mr-auto" />
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
                    <div className="w-20 h-7 rounded bg-gray-500 animate-pulse mr-auto" ></div>
                    <div className="flex flex-col w-full mt-4" >
                        <div className="w-full grid grid-cols-2 gap-x-1">
                            <div className="h-5 w-12 my-0.5 rounded bg-gray-400 animate-pulse" />
                            <div className="h-3.5 w-4 my-0.5 rounded bg-gray-200 animate-pulse"/>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-x-1">
                            <div className="h-5 w-20 my-0.5 rounded bg-gray-400 animate-pulse" />
                            <div className="h-3.5 w-4 my-0.5 rounded bg-gray-200 animate-pulse"/>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-x-1">
                            <div className="h-5 w-14 my-0.5 rounded bg-gray-400 animate-pulse" />
                            <div className="h-3.5 w-14 my-0.5 rounded bg-gray-200 animate-pulse"/>
                        </div>
                        <div className="w-full grid grid-cols-2 gap-x-1">
                            <div className="h-5 w-16 my-0.5 rounded bg-gray-400 animate-pulse" />
                            <div className="h-3.5 w-14 my-0.5 rounded bg-gray-200 animate-pulse"/>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}



export const RightCardLoader: React.FC = () => {
        return (
            <div className="h-100 w-full p-4 flex flex-col items-center justify-between bg-white">
                <div className="w-full">
                <div className="w-20 h-7 rounded bg-gray-500 animate-pulse mr-auto" ></div>
                    <div className="flex justify-evenly w-full mt-4" >
                        <div className="flex flex-col items-center" >
                            <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                            <div className="w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse" />
                            <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                        </div>
                        <div className="flex flex-col items-center" >
                            <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                            <div className="w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse" />
                            <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                        </div>
                        <div className="flex flex-col items-center" >
                            <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                            <div className="w-28 h-28 m-1 rounded-full bg-gray-400 animate-pulse" />
                            <div className="w-10 h-3.5 rounded bg-gray-200 animate-pulses"/>
                        </div>
                    </div>
                </div>
              
              <div className="w-full" >
              <div className="w-12 h-7 rounded bg-gray-500 animate-pulse mr-auto" ></div>
                <div className="grid grid-cols-3 gap-y-5 w-full mt-4" >
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                            <div className="w-8 h-4 my-0.5 rounded bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                            <div className="w-8 h-4 my-0.5 rounded bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                            <div className="w-8 h-4 my-0.5 rounded bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                            <div className="w-8 h-4 my-0.5 rounded bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                            <div className="w-8 h-4 my-0.5 rounded bg-gray-200 animate-pulse" />
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-4 rounded bg-gray-400 animate-pulse" />
                            <div className="w-8 h-4 my-0.5 rounded bg-gray-200 animate-pulse" />
                        </div>
                </div>
              </div>
                      

            </div>
        );
}