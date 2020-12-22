import React from 'react'

type FlexBetweenProps = {
    category: string;
    details: React.ReactNode;
};

const FlexBetween: React.FC<FlexBetweenProps> = ({category, details}) => {
    return (
        <div className="w-full flex justify-between">
            <p>{category}</p>
            <div>
                {details}
            </div>
        </div>
    )
} 



export default FlexBetween