import React from 'react'
import StandardBody from '../StandardVariant/StandardBody'

export default function CardBodyVariants({ cardData, variant }) {
    switch (variant) {
        case "standard":
        default:
            return (
                <StandardBody
                    phone={cardData.phone}
                    address={cardData.address}
                    serialNum={cardData.bizNumber}
                />
            );
    }
}
