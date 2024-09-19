const normalizeCard = (cardData) => {
    return {
        title: cardData.title,
        subtitle: cardData.subtitle,
        description: cardData.description,
        phone: cardData.phone,
        email: cardData.email,
        web: cardData.web,
        image: {
            url: cardData.url,
            alt: cardData.alt,
        },
        address: {
            state: cardData.state,
            country: cardData.country,
            city: cardData.city,
            street: cardData.street,
            houseNumber: cardData.houseNumber,
            zip: cardData.zip,
        },
    };
};

export default normalizeCard;