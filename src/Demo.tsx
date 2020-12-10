import React, {useState, useEffect} from 'react'

interface DemoProps {

}

const Demo: React.FC = ({}) => {
    const array = [1,2,3,4]
    const [chosenNumber, setChosen] = useState<number>(0)
    const [statearray, setArray] = useState<number[]>(array)

    useEffect(() => {
        console.log(chosenNumber)
        const arr = array
        if(chosenNumber === 0 ) setArray(array)
        else setArray(arr.filter( num => num === chosenNumber))
    }, [chosenNumber])

    const handleClick = (number: number) => {
        if(number === chosenNumber) setChosen(0)
        else setChosen(number)
    }
        return (
            <div className="flex" >
                {statearray.map(number => <div key={number} className="h-12 w-12 bg-gray-400 m-1 flex items-center justify-center" onClick={() => handleClick(number)} >{number}</div>)}
            </div>
        );
}


export default Demo