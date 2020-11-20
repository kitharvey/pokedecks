import React from 'react'

interface CardProps {
    name: string
}

const Card: React.FC<CardProps> = ({name}) => {
    return <div>{name}</div>>
}


export default Card