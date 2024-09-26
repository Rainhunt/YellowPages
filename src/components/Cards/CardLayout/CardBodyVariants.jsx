import React from 'react'
import StandardBody from '../StandardVariant/StandardBody'
import DisplayBody from '../DisplayVariant/DisplayBody';

export default function CardBodyVariants({ cardData, variant }) {
    switch (variant) {
        case "display":
            return (
                <DisplayBody
                    description={cardData.description}
                    phone={cardData.phone}
                    email={cardData.email}
                    web={cardData.web}
                    address={cardData.address}
                    serialNum={cardData.bizNumber}
                />
            )
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
