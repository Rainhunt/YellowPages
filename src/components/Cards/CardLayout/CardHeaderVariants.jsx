import React from 'react'
import StandardHeader from '../StandardVariant/StandardHeader'
import DisplayHeader from '../DisplayVariant/DisplayHeader';

export default function CardHeaderVariants({ cardData, variant }) {
    switch (variant) {
        case "display":
            return (
                <DisplayHeader
                    title={cardData.title}
                    subtitle={cardData.subtitle}
                    description={cardData.description}
                />
            )
        case "standard":
        default:
            return (
                <StandardHeader
                    image={cardData.image.url}
                    alt={cardData.image.alt}
                    title={cardData.title}
                    subtitle={cardData.subtitle}
                />
            );
    }
}
