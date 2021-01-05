const faker = require('faker');
const { getPostalAddress } = require('./PostalAddress');
const { getProduct } = require('./Product');

const getParcelDelivery = () => {

    //Get address 
    const deliveryAddress = getPostalAddress();
    delete deliveryAddress['@context'];


    //Include test data for delivery methods.
    const deliveryTypes = require('../../data/generated/Shipping-types.json');
    const randomType = Object.keys(deliveryTypes)[
        faker.random.number(Object.keys(deliveryTypes).length - 1)
    ];
    const deliveryMethod = deliveryTypes[randomType].type;


    const originAddress = getPostalAddress();
    delete originAddress['@context'];

    let products = [];
    let numProds = faker.random.number({ min: 1, max: 3 });
    while (numProds > 0) {
        const prod = getProduct();
        delete prod['@context'];
        products.push(prod);
        numProds -= 1;
    }

    const example = {
        '@context': ['https://w3id.org/traceability/v1'],
        type: 'ParcelDelivery',
        deliveryAddress,
        originAddress,
        deliveryMethod,
        trackingNumber: faker.random.number({ min: 10000000, max: 999999999999 }).toString(),
        products
    };
    return example;
};

module.exports = { getParcelDelivery };
