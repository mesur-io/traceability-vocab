const faker = require('faker');
const _ = require('lodash');
const { getPlace } = require('./Place');
const { getInspector } = require('./Inspector');
const { getParcelDelivery } = require('./ParcelDelivery');
const { getAgPackage } = require('./AgPackage');
const { getEntity } = require('./Entity');
const { getInspectionReport } = require('./InspectionReport');
//Include test data for inspection type.  This data is very rudimentary for now, and it is probably overkill to have a separate file, but it might be useful in the future across multiple Ag schemas.
const agTypes = require('../../data/generated/AgInspection-types.json');
//Include test data for Ag products.
const prods = require('../../data/generated/AgProducts.json');

const getAgInspectionReport = () => {
    //get an inspection type
    const randomType = Object.keys(agTypes)[
        faker.random.number(Object.keys(agTypes).length - 1)
    ];
    const inspectionType = agTypes[randomType].name;

    //get a product
    const randomProd = Object.keys(prods)[
        faker.random.number(Object.keys(prods).length - 1)
    ];
    const itemShipped = prods[randomProd].Item;



    // pull in outside schemas
    const facility = getPlace();
    delete facility['@context'];
    const inspector = getInspector();
    delete inspector['@context'];
    const inspectDate = new Date(faker.date.recent());
    const shipment = getParcelDelivery();
    delete shipment['@context'];
    const applicant = getEntity();
    delete applicant['@context'];
    const agPackage = getAgPackage();
    delete agPackage['@context'];
    const inspection = getInspectionReport();

    //AgInspection is a subclass of InspectionReport. Here we bring in Inspection report, change the type and add the new properties.
    inspection["type"] = "AgInspectionReport"
    inspection.facility = facility;
    inspection.inspector = inspector;
    inspection.shipment = shipment;
    inspection.applicant = applicant;
    inspection.agPackage = agPackage;
    inspection.inspectionDate = (inspectDate.getMonth() + 1) + "-" + inspectDate.getDay() + "-" + inspectDate.getFullYear();
    inspection.inspectionType = inspectionType;
    inspection.notes = faker.lorem.sentence();
    return inspection;
};

module.exports = { getAgInspectionReport };
