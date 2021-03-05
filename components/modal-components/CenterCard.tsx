import React from 'react'
import Card from '../deck/Card';
import { useRouter } from 'next/dist/client/router';

const CenterCard: React.FC = () => {
        const router = useRouter()
        return (
                <div className="h-100 w-full">
                    <Card id={+router.asPath.replace(/[^0-9]/g, "")} />
                </div>
        );
}


export default CenterCard