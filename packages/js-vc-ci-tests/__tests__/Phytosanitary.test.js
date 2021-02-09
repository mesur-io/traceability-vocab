const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify Phytosanitary', async () => {
    const { verified, verifiableCredential } = await issuer.issue({
        credentialSubject: {
            id: 'did:example:123',
            type: "Phytosanitary",

            observation: [
                {
                    type: "Observation",
                    property: {
                        type: "ChemicalProperty",
                        name: "Promethium",
                        formula: "Pm",
                        inchi: "InChI=1S/Pm",
                        inchikey: "VQMWBBYLQSCNPO-UHFFFAOYSA-N"
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "52.140",
                        unitCode: "P1"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "ChemicalProperty",
                        name: "Osmium",
                        formula: "Os",
                        inchi: "InChI=1S/Os",
                        inchikey: "SYQBFIAQOQZEGI-UHFFFAOYSA-N"
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "47.860",
                        unitCode: "P1"
                    }
                },
                {
                    type: "Observation",
                    property: {
                        type: "MechanicalProperty",
                        identifier: "ISO 148",
                        name: "Charpy Impact Strength Test",
                        description: "ISO 148-1:2016 specifies the Charpy (V-notch and U-notch) pendulum impact test method for determining the energy absorbed in an impact test of metallic materials. This part of ISO 148 does not cover instrumented impact testing, which is specified in ISO 14556."
                    },
                    measurement: {
                        type: "MeasuredValue",
                        value: "58.776",
                        unitCode: "B13"
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
                        value: "5.245",
                        unitCode: "B13"
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
                }
            ],
            facility: {
                type: "Place",
                globalLocationNumber: "1548842633394",
                geo: {
                    type: "GeoCoordinates",
                    latitude: "69.7300",
                    longitude: "45.1844"
                },
                address: {
                    type: "PostalAddress",
                    organizationName: "Schulist - Mitchell",
                    streetAddress: "81887 Bauch Corner",
                    addressLocality: "Paucekborough",
                    addressRegion: "New York",
                    postalCode: "94987-9313",
                    addressCountry: "Jamaica"
                }
            },
            inspector: {
                type: "Inspector",
                person: {
                    type: "Person",
                    firstName: "Brody",
                    lastName: "Stroman",
                    email: "Bertram87@example.net",
                    phoneNumber: "555-107-6775",
                    worksFor: {
                        type: "Organization",
                        name: "Moen Group",
                        description: "Decentralized reciprocal leverage",
                        address: {
                            type: "PostalAddress",
                            streetAddress: "239 Powlowski Valleys",
                            addressLocality: "Huelsland",
                            addressRegion: "New Jersey",
                            postalCode: "78370",
                            addressCountry: "Samoa"
                        },
                        email: "Olen_Wolff10@example.org",
                        phoneNumber: "555-261-9438"
                    },
                    jobTitle: "Senior Communications Director"
                },
                credential: [
                    {
                        type: "Credential",
                        credentialCategory: "Chief Security Architect",
                        credentialValue: "Technician"
                    }
                ]
            },
            shipment: {
                type: "ParcelDelivery",
                deliveryAddress: {
                    type: "PostalAddress",
                    organizationName: "Bayer Inc",
                    streetAddress: "38333 Yessenia Ridges",
                    addressLocality: "Feestland",
                    addressRegion: "Vermont",
                    postalCode: "43207",
                    addressCountry: "Japan"
                },
                originAddress: {
                    type: "PostalAddress",
                    organizationName: "Kuhn LLC",
                    streetAddress: "287 Mathias Springs",
                    addressLocality: "East Nyashire",
                    addressRegion: "Oregon",
                    postalCode: "40359-5190",
                    addressCountry: "Grenada"
                },
                deliveryMethod: "Truck transport",
                trackingNumber: "400186213912"
            },
            applicant: {
                type: "Organization",
                name: "O'Reilly, Stroman and Runte",
                description: "Fundamental systematic interface",
                address: {
                    type: "PostalAddress",
                    streetAddress: "04773 King Port",
                    addressLocality: "East Maritzamouth",
                    addressRegion: "Idaho",
                    postalCode: "01862",
                    addressCountry: "Venezuela"
                },
                email: "Nina_Kunde@example.org",
                phoneNumber: "555-925-9213"
            },
            agPackage: {
                type: "AgPackage",
                packageName: "Incredible Fresh Soap",
                grade: "B",
                responsibleParty: {
                    type: "Person",
                    firstName: "Heaven",
                    lastName: "Schumm",
                    email: "Bret4@example.com",
                    phoneNumber: "555-156-4411",
                    worksFor: {
                        type: "Organization",
                        name: "Dicki - Jones",
                        description: "Stand-alone attitude-oriented artificial intelligence",
                        address: {
                            type: "PostalAddress",
                            streetAddress: "441 Barrows Place",
                            addressLocality: "East Alayna",
                            addressRegion: "California",
                            postalCode: "00183-3773",
                            addressCountry: "Ireland"
                        },
                        email: "Beaulah.Batz30@example.net",
                        phoneNumber: "555-928-9414"
                    },
                    jobTitle: "National Creative Facilitator"
                },
                voicePickCode: "1161",
                date: "1-2-2021",
                labelImageUrl: "http://placeimg.com/640/480",
                labelImageHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                agProduct: [
                    {
                        type: "AgProduct",
                        upc: "757280778442",
                        plu: "4764",
                        gtin: "50553291423711",
                        product: {
                            type: "Product",
                            manufacturer: {
                                type: "Organization",
                                name: "Harvey and Sons",
                                description: "Total optimizing forecast",
                                address: {
                                    type: "PostalAddress",
                                    streetAddress: "8237 Williamson Turnpike",
                                    addressLocality: "Lebsackstad",
                                    addressRegion: "West Virginia",
                                    postalCode: "79051-6021",
                                    addressCountry: "Cayman Islands"
                                },
                                email: "Shemar.Kunde49@example.net",
                                phoneNumber: "555-449-3926"
                            },
                            name: "Handmade Metal Shoes",
                            description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                            sizeOrAmount: {
                                type: "QuantitativeValue",
                                unitCode: "hg/ha",
                                value: "1466"
                            },
                            weight: {
                                type: "QuantitativeValue",
                                unitCode: "hg/ha",
                                value: "127"
                            },
                            sku: "136889517932"
                        },
                        scientificName: "minus ea asperiores",
                        labelImageUrl: "http://placeimg.com/640/480",
                        labelImageHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                    },
                    {
                        type: "AgProduct",
                        upc: "199441753420",
                        plu: "1939",
                        gtin: "96294651753269",
                        product: {
                            type: "Product",
                            manufacturer: {
                                type: "Organization",
                                name: "Fadel, Greenfelder and Jacobson",
                                description: "Distributed multi-state task-force",
                                address: {
                                    type: "PostalAddress",
                                    streetAddress: "74482 Eldon Brook",
                                    addressLocality: "Adrainborough",
                                    addressRegion: "Maine",
                                    postalCode: "98068-5529",
                                    addressCountry: "United Kingdom"
                                },
                                email: "Meggie.Beatty73@example.com",
                                phoneNumber: "555-586-7915"
                            },
                            name: "Licensed Granite Gloves",
                            description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
                            sizeOrAmount: {
                                type: "QuantitativeValue",
                                unitCode: "hg/ha",
                                value: "5430"
                            },
                            weight: {
                                type: "QuantitativeValue",
                                unitCode: "hg/ha",
                                value: "4035"
                            },
                            sku: "202050758293"
                        },
                        scientificName: "incidunt saepe nesciunt",
                        labelImageUrl: "http://placeimg.com/640/480",
                        labelImageHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                    },
                    {
                        type: "AgProduct",
                        upc: "547455218364",
                        plu: "7105",
                        gtin: "85999703800771",
                        product: {
                            type: "Product",
                            manufacturer: {
                                type: "Person",
                                firstName: "Gayle",
                                lastName: "Bednar",
                                email: "Frederic_Schroeder@example.org",
                                phoneNumber: "555-637-6566",
                                worksFor: {
                                    type: "Organization",
                                    name: "Zboncak - Breitenberg",
                                    description: "Visionary dedicated conglomeration",
                                    address: {
                                        type: "PostalAddress",
                                        streetAddress: "539 Freeman Common",
                                        addressLocality: "Naomiborough",
                                        addressRegion: "Nebraska",
                                        postalCode: "76634-5320",
                                        addressCountry: "New Zealand"
                                    },
                                    email: "Imogene91@example.com",
                                    phoneNumber: "555-145-3888"
                                },
                                jobTitle: "District Directives Producer"
                            },
                            name: "Generic Fresh Bike",
                            description: "The Football Is Good For Training And Recreational Purposes",
                            sizeOrAmount: {
                                type: "QuantitativeValue",
                                unitCode: "hg/ha",
                                value: "2538"
                            },
                            weight: {
                                type: "QuantitativeValue",
                                unitCode: "hg/ha",
                                value: "6607"
                            },
                            sku: "781647682482"
                        },
                        scientificName: "et dolorum qui",
                        labelImageUrl: "http://placeimg.com/640/480",
                        labelImageHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                    }
                ]
            },
            inspectionDate: "2-0-2021",
            inspectionType: "Contamination",
            notes: "Optio quisquam rerum minima itaque soluta eaque.",
            certificateNumber: "686911802312",
            plantOrg: {
                type: "Organization",
                name: "Zboncak - Friesen",
                description: "Optional grid-enabled standardization",
                address: {
                    type: "PostalAddress",
                    streetAddress: "7526 Murphy Ridge",
                    addressLocality: "Goldenstad",
                    addressRegion: "Kansas",
                    postalCode: "77452-5723",
                    addressCountry: "Uruguay"
                },
                email: "Margarette52@example.org",
                phoneNumber: "555-892-2581"
            },
            distinguishingMarks: "Corporis quo ipsa accusamus vel atque et.",
            portOfEntry: {
                type: "Place",
                address: {
                    type: "PostalAddress",
                    addressLocality: "West Torrancemouth",
                    addressRegion: "Ohio"
                }
            },
            additionalDeclaration: "Voluptatem explicabo id amet eos in consequuntur fuga voluptatibus.",
            disinfectionDate: "2-1-2021",
            disinfectionTreatment: "Fumigant - Phosphine",
            disinfectionChemical: "Methyl Bromide",
            disinfectionDuration: "114 minutes",
            disinfectionTemperature: "9 Celsius",
            disinfectionConcentration: "27",
            signatureDate: "2-1-2021"

        }
    }, [
        'https://www.w3.org/2018/credentials/v1',
        'https://w3id.org/traceability/v1',
    ]);
    expect(verified).toBe(true);
    fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/Phytosanitary.json'), JSON.stringify(verifiableCredential, null, 2));
});
