const mapUser = (user) => {
    return {
        first: user.name.first,
        middle: user.name.middle,
        last: user.name.last,
        phone: user.phone,
        email: user.email,
        url: user.image.url,
        alt: user.image.alt,
        state: user.address.state,
        country: user.address.country,
        city: user.address.city,
        street: user.address.street,
        houseNumber: user.address.houseNumber,
        zip: user.address.zip,
        isAdmin: user.isAdmin,
        isBusiness: user.isBusiness,
        classCode: user.classCode,
        createdAt: user.createdAt
    };
};

export default mapUser;