import React from 'react'
import StandardHeader from '../StandardVariant/StandardHeader'

export default function CardHeaderVariants({ cardData, variant }) {
    switch (variant) {
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
