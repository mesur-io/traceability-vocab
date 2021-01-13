const faker = require('faker');
const mask = require('json-mask');
const { getPlace } = require('./Place');
const { getOrganization } = require('./Organization');
const { getAgInspectionReport } = require('./AgInspectionReport');

const getPhytosanitary = () => {

    //Include test data for types of Phyto treatments.
    const disinfectionTypes = require('../../data/generated/Phytosanitary-types.json');
    const randomType = Object.keys(disinfectionTypes)[
        faker.random.number(Object.keys(disinfectionTypes).length - 1)
    ];
    const disinfectionTreatment = disinfectionTypes[randomType].type;
    const disinfectionChemical = disinfectionTypes[randomType].chemical;

    // pull in outside schemas and remove the unneeded properties.  
    //Use JSON-mask (https://github.com/nemtsov/json-mask) to pull in only the properties needed for this schema

    const fullAgInspectionReport = getAgInspectionReport();
    const fields = 'facility(address),notes,inspector(type,person(type,firstName,lastName)),shipment(deliveryMethod,deliveryAddress(type,*),originAddress(type,*),AgPackage(AgProducts(type,name,description,sizeOrAmount,weight,sku)),applicant(type,worksFor(address,name)),inspectionDate';
    const AgInspectionReport = mask(fullAgInspectionReport, fields);

    const plantOrg = getOrganization();
    delete plantOrg['@context'];

    const fullPortOfEntry = getPlace();
    delete fullPortOfEntry['@context'];
    const portFields = 'type,address(type,addressLocality,addressRegion)';
    const portOfEntry = mask(fullPortOfEntry, portFields);

    const disDate = new Date(faker.date.recent());
    const sigDate = new Date(faker.date.recent());

    const example = {
        '@context': ['https://w3id.org/traceability/v1'],
        type: 'Phytosanitary',
        certificateNumber: faker.random.number({ min: 10000000, max: 999999999999 }).toString(),
        plantOrg,
        distinguishingMarks: faker.lorem.sentence(),
        portOfEntry,
        additionalDeclaration: faker.lorem.sentence(),
        disinfectionDate: (disDate.getMonth() + 1) + "-" + disDate.getDay() + "-" + disDate.getFullYear(),
        disinfectionTreatment,
        disinfectionChemical,
        disinfectionDuration: faker.random.number({ min: 30, max: 200 }).toString() + " minutes",
        disinfectionTemperature: faker.random.number({ min: 0, max: 25 }).toString() + " Celsius",
        disinfectionConcentration: faker.random.number({ min: 15, max: 50 }).toString(),
        signatureDate: (sigDate.getMonth() + 1) + "-" + sigDate.getDay() + "-" + sigDate.getFullYear(),
        AgInspectionReport
    };
    return example;
};

module.exports = { getPhytosanitary };
