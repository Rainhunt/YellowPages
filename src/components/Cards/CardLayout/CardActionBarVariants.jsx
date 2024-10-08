import React from 'react'
import StandardActionBar from '../StandardVariant/StandardActionBar'

export default function CardActionBarVariants({ cardData, variant }) {
    switch (variant) {
        case "display":
            return (
                <></>
            );
        case "standard":
        default:
            return (
                <StandardActionBar
                    cardId={cardData._id}
                    userId={cardData.user_id}
                    likes={cardData.likes}
                    phone={cardData.phone}
                />
            );
    }
}
