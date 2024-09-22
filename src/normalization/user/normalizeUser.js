const normalizeUser = (userData) => {
    return {
        name: {
            first: userData.first,
            middle: userData.middle,
            last: userData.last
        },
        phone: userData.phone,
        email: userData.email,
        password: userData.password,
        image: {
            url: userData.url,
            alt: userData.alt,
        },
        address: {
            state: userData.state,
            country: userData.country,
            city: userData.city,
            street: userData.street,
            houseNumber: userData.houseNumber,
            zip: userData.zip,
        },
        isBusiness: userData.isBusiness
    };
};

export default normalizeUser;