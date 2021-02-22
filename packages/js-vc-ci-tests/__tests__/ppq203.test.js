const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify ppq203', async () => {
  const { verified, verifiableCredential } = await issuer.issue({
    credentialSubject: {
      id: 'did:example:123',

      type: 'ppq203',
      facility: {
        type: 'Place',
        globalLocationNumber: '2285095806234',
        geo: {
          type: 'GeoCoordinates',
          latitude: '44.2734',
          longitude: '-165.2613',
        },
        address: {
          type: 'PostalAddress',
          organizationName: 'Bednar - Mitchell',
          streetAddress: '053 Feeney Courts',
          addressLocality: 'West Jaimefurt',
          addressRegion: 'Illinois',
          postalCode: '87360',
          addressCountry: 'USA',
        },
      },
      inspector: {
        type: 'Inspector',
        person: {
          type: 'Person',
          firstName: 'Hazle',
          lastName: 'Balistreri',
          email: 'Kallie96@example.org',
          phoneNumber: '555-677-7154',
          worksFor: {
            type: 'Organization',
            name: 'Nader, Keebler and Marvin',
            description: 'Agricultural inspection services',
            address: {
              type: 'PostalAddress',
              streetAddress: '31283 Keith Fall',
              addressLocality: 'New Brentfort',
              addressRegion: 'Florida',
              postalCode: '36538',
              addressCountry: 'USA',
            },
            email: 'Shaun35@example.net',
            phoneNumber: '555-112-1673',
          },
          jobTitle: 'Global Communications Coordinator',
        },
        qualification: [
          {
            type: 'Qualification',
            qualificationCategory: 'National Group Technician',
            qualificationValue: 'Supervisor',
          },
          {
            type: 'Qualification',
            qualificationCategory: 'Certified ppq 203 officiant',
            qualificationValue: 'Assistant',
          },
        ],
      },
      shipment: {
        type: 'ParcelDelivery',
        deliveryAddress: {
          type: 'PostalAddress',
          organizationName: 'Hessel - Larson',
          streetAddress: '591 Ronaldo Route',
          addressLocality: 'Maidaland',
          addressRegion: 'Utah',
          postalCode: '97698',
          addressCountry: 'USA',
        },
        originAddress: {
          type: 'PostalAddress',
          organizationName: 'Lehner - Okuneva',
          streetAddress: '2662 Arianna Island',
          addressLocality: 'Abshiretown',
          addressRegion: 'Colorado',
          postalCode: '14618-9463',
          addressCountry: 'USA',
        },
        deliveryMethod: 'Rail freight transport',
        trackingNumber: '37737905572',
      },
      applicant: {
        type: 'Person',
        firstName: 'Gabriel',
        lastName: 'Mayert',
        email: 'Rowena48@example.com',
        phoneNumber: '555-790-8611',
        worksFor: {
          type: 'Organization',
          name: "Bob's Farms",
          description: 'Providers of high quality produce.',
          address: {
            type: 'PostalAddress',
            streetAddress: '42752 Lynch Plains',
            addressLocality: 'Javontetown',
            addressRegion: 'Alaska',
            postalCode: '40590-0942',
            addressCountry: 'USA',
          },
          email: 'Estelle_Daugherty@example.net',
          phoneNumber: '555-424-3995',
        },
        jobTitle: 'Export Manager',
      },
      inspectionDate: '2020-03-15',
      inspectionType: 'Phytosanitary',
      observation: [
        {
          type: 'Observation',
          property: {
            type: 'ChemicalProperty',
            name: 'Rutherfordium',
            formula: 'Rf',
            inchi: 'InChI=1S/Rf',
            inchikey: 'YGPLJIIQQIDVFJ-UHFFFAOYSA-N',
          },
          measurement: {
            type: 'MeasuredValue',
            value: '20.352',
            unitCode: 'P1',
          },
        },
      ],
      certificateNumber: '455043082347',
      foreignPortExport: {
        type: 'Place',
        address: {
          type: 'PostalAddress',
          addressLocality: 'Olsonville',
          addressCountry: 'United States Minor Outlying Islands',
        },
      },
      carrierId: '392572629281',
      portOfEntry: {
        type: 'Place',
        address: {
          type: 'PostalAddress',
          addressLocality: 'East Billie',
          addressRegion: 'North Carolina',
        },
      },
      signatureDate: '2021-02-16',

    },
  }, [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/traceability/v1',
  ]);
  expect(verified).toBe(true);
  fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/ppq203.json'), JSON.stringify(verifiableCredential, null, 2));
});
