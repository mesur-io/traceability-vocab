const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify IntentToSell', async () => {
  const { verified, verifiableCredential } = await issuer.issue({
    credentialSubject: {
      id: 'did:example:123',

      type: 'IntentToSell',
      seller: {
        type: 'Person',
        firstName: 'Marcos',
        lastName: 'Osinski',
        email: 'Earnest_Hahn87@example.net',
        phoneNumber: '555-814-3786',
        worksFor: {
          type: 'Organization',
          name: "Poppy's Produce",
          description: 'Providing the highest quality produce.',
          address: {
            type: 'PostalAddress',
            streetAddress: '30423 Scotty Crossroad',
            addressLocality: 'North Mireille',
            addressRegion: 'Rhode Island',
            postalCode: '54011',
            addressCountry: 'USA',
          },
          email: 'Raegan_Boehm@example.org',
          phoneNumber: '555-408-7603',
        },
        jobTitle: 'VP of Sales',
      },
      purchaser: {
        type: 'Person',
        firstName: 'Kaycee',
        lastName: 'Pfeffer',
        email: 'Milton79@example.com',
        phoneNumber: '555-396-9693',
        worksFor: {
          type: 'Organization',
          name: 'Wolff Group',
          description: 'Grocery Store supplier',
          address: {
            type: 'PostalAddress',
            streetAddress: '65195 Nestor Glens',
            addressLocality: 'Jaskolskiview',
            addressRegion: 'Tennessee',
            postalCode: '74088-3168',
            addressCountry: 'USA',
          },
          email: 'Leon.Stroman5@example.org',
          phoneNumber: '555-456-2198',
        },
        jobTitle: 'Buyer',
      },
      product: {
        type: 'Product',
        manufacturer: {
          type: 'Organization',
          name: "Poppy's Produce",
          description: 'Providing the Highest Quality Produce',
          address: {
            type: 'PostalAddress',
            streetAddress: '30423 Scotty Crossroad',
            addressLocality: 'North Mireille',
            addressRegion: 'Rhode Island',
            postalCode: '54011',
            addressCountry: 'USA',
          },
          email: 'Declan.Veum@example.net',
          phoneNumber: '555-315-7196',
        },
        name: 'Avocados',
        description: 'Delicious avocados',
        sizeOrAmount: {
          type: 'QuantitativeValue',
          unitCode: 'hg/ha',
          value: '4306',
        },
        weight: {
          type: 'QuantitativeValue',
          unitCode: 'hg/ha',
          value: '3076',
        },
        sku: '556185142112',
      },
      declarationDate: '2020-03-21',
      sellByDate: '2021-06-30',

    },
  }, [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/traceability/v1',
  ]);
  expect(verified).toBe(true);
  fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/IntentToSell.json'), JSON.stringify(verifiableCredential, null, 2));
});
