const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify AgInspectionReport', async () => {
    const { verified, verifiableCredential } = await issuer.issue({
        credentialSubject: {
            id: 'did:example:123',
            type: "AgInspectionReport",
            observation: [
                {
                    type: "Observation",
                    property: {
                        type: "ChemicalProperty",
                        name: "Iridium",
                        formula: "Ir",
                        inchi: "InChI=1S/Ir",
                        inchikey: "GKOZUEZYRPOHIO-UHFFFAOYSA-N"
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "99.054",
                        unitCode: "P1"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "ChemicalProperty",
                        name: "Astatine",
                        formula: "At",
                        inchi: "InChI=1S/At",
                        inchikey: "RYXHOMYVWAEKHL-UHFFFAOYSA-N"
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "0.94618",
                        unitCode: "P1"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 3738",
                        name: "Rockwell Hardness Test (Scale A)",
                        description: "The Rockwell hardness test is an empirical indentation hardness test that can provide useful information about metallic materials."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "00.00",
                        unitCode: "UNKNOWN"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 3738",
                        name: "Rockwell Hardness Test (Scale A)",
                        description: "The Rockwell hardness test is an empirical indentation hardness test that can provide useful information about metallic materials."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "00.00",
                        unitCode: "UNKNOWN"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 3738",
                        name: "Rockwell Hardness Test (Scale A)",
                        description: "The Rockwell hardness test is an empirical indentation hardness test that can provide useful information about metallic materials."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "00.00",
                        unitCode: "UNKNOWN"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 1352",
                        name: "Torque-controlled fatigue testing",
                        description: "ISO 1352:2011 specifies the conditions for performing torsional, constant-amplitude, nominally elastic stress fatigue tests on metallic specimens without deliberately introducing stress concentrations. The tests are carried out at ambient temperature (ideally at between 10 °C and 35 °C) in air by applying a pure couple to the specimen about its longitudinal axis."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "00.00",
                        unitCode: "UNKNOWN"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 180",
                        name: "Izod Impact Strength Test",
                        description: "ISO 180 defines the method used for pendulums to determine the impact resistance of a plastic specimen when supported in a cantilever configuration. Test results are used to evaluate the resilience of materials, typically plastics."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "48.524",
                        unitCode: "B13"
                    }
                }
            ],
            facility: {
                type: "Place",
                globalLocationNumber: "2134520702897",
                geo: {
                    type: "GeoCoordinates",
                    latitude: "-28.6717",
                    longitude: "44.5761"
                },
                address: {
                    type: "PostalAddress",
                    organizationName: "Senger - Deckow",
                    streetAddress: "0281 Pollich Inlet",
                    addressLocality: "New Alvinaburgh",
                    addressRegion: "Missouri",
                    postalCode: "64401",
                    addressCountry: "French Southern Territories"
                }
            },
            inspector: {
                type: "Inspector",
                person: {
                    type: "Person",
                    firstName: "Khalid",
                    lastName: "Torp",
                    email: "Henri.King48@example.net",
                    phoneNumber: "555-608-4228",
                    worksFor: {
                        type: "Organization",
                        name: "Breitenberg, Rippin and Crooks",
                        description: "Focused user-facing moratorium",
                        address: {
                            type: "PostalAddress",
                            streetAddress: "8792 Dare Mountains",
                            addressLocality: "Lake Mikayla",
                            addressRegion: "Massachusetts",
                            postalCode: "71166",
                            addressCountry: "Iraq"
                        },
                        email: "Russ56@example.net",
                        phoneNumber: "555-235-8496"
                    },
                    jobTitle: "Human Branding Director"
                },
                credential: [
                    {
                        type: "Credential",
                        credentialCategory: "Regional Paradigm Analyst",
                        credentialValue: "Facilitator"
                    }
                ]
            },
            shipment: {
                type: "ParcelDelivery",
                deliveryAddress: {
                    type: "PostalAddress",
                    organizationName: "Johns - Weber",
                    streetAddress: "31798 Lonnie Road",
                    addressLocality: "North Maritzaburgh",
                    addressRegion: "Iowa",
                    postalCode: "64833-2062",
                    addressCountry: "Belize"
                },
                originAddress: {
                    type: "PostalAddress",
                    organizationName: "Weber LLC",
                    streetAddress: "93418 Stehr Spur",
                    addressLocality: "West Garretview",
                    addressRegion: "Alabama",
                    postalCode: "44221",
                    addressCountry: "Armenia"
                },
                deliveryMethod: "Air transport",
                trackingNumber: "467711847236"
            },
            applicant: {
                type: "Organization",
                name: "Stiedemann Inc",
                description: "Polarised demand-driven matrices",
                address: {
                    type: "PostalAddress",
                    streetAddress: "65138 Roselyn Camp",
                    addressLocality: "New Bulah",
                    addressRegion: "Maryland",
                    postalCode: "55187",
                    addressCountry: "Japan"
                },
                email: "Elta.Schmeler@example.org",
                phoneNumber: "555-349-2900"
            },
            agPackage: {
                type: "AgPackage",
                packageName: "Sleek Steel Shoes",
                grade: "B",
                responsibleParty: {
                    type: "Organization",
                    name: "Kunde LLC",
                    description: "Optimized secondary adapter",
                    address: {
                        type: "PostalAddress",
                        streetAddress: "78657 Beverly Hills",
                        addressLocality: "Rogahnfurt",
                        addressRegion: "New Mexico",
                        postalCode: "73208",
                        addressCountry: "Iran"
                    },
                    email: "Elva_Mann67@example.com",
                    phoneNumber: "555-839-3293"
                },
                voicePickCode: "5984",
                date: "1-2-2021",
                labelImageUrl: "http://placeimg.com/640/480",
                labelImageHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                agProduct: [
                    {
                        type: "AgProduct",
                        upc: "213282058597",
                        plu: "3704",
                        gtin: "12051624169107",
                        product: {
                            type: "Product",
                            manufacturer: {
                                type: "Organization",
                                name: "Metz, Lind and Koelpin",
                                description: "Focused static architecture",
                                address: {
                                    type: "PostalAddress",
                                    streetAddress: "4174 Lehner Manors",
                                    addressLocality: "Pollichfurt",
                                    addressRegion: "South Carolina",
                                    postalCode: "27471",
                                    addressCountry: "Nauru"
                                },
                                email: "Annabel_Schowalter76@example.org",
                                phoneNumber: "555-317-8792"
                            },
                            name: "Intelligent Concrete Shoes",
                            description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                            sizeOrAmount: {
                                type: "QuantitativeValue",
                                unitCode: "hg/ha",
                                value: "756"
                            },
                            weight: {
                                type: "QuantitativeValue",
                                unitCode: "hg/ha",
                                value: "8511"
                            },
                            sku: "372865988982"
                        },
                        scientificName: "impedit aut rerum",
                        labelImageUrl: "http://placeimg.com/640/480",
                        labelImageHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                    }
                ]
            },
            inspectionDate: "2-1-2021",
            inspectionType: "Food Safety",
            notes: "Voluptatem at accusantium sint est officiis et."

        }
    }, [
        'https://www.w3.org/2018/credentials/v1',
        'https://w3id.org/traceability/v1',
    ]);
    expect(verified).toBe(true);
    fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/AgInspectionReport.json'), JSON.stringify(verifiableCredential, null, 2));
});
