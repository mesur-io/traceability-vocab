const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify Entity', async () => {
  const { verified, verifiableCredential } = await issuer.issue({
    credentialSubject: {
      id: 'did:example:123',
      type: 'Organization',
      name: 'California Avocados Direct',
      description: 'Fourth generation family avocado farm',
      address: {
        type: 'PostalAddress',
        streetAddress: '9700 Circle R Dr,',
        addressLocality: 'Escondido',
        addressRegion: 'California',
        postalCode: '92026',
        addressCountry: 'USA',
      },
      email: 'Chase97@example.com',
      phoneNumber: '555-187-9457',

    },
  }, [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/traceability/v1',
  ]);
  expect(verified).toBe(true);
  fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/Entity.json'), JSON.stringify(verifiableCredential, null, 2));
});
