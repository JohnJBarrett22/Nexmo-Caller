const Nexmo = require('nexmo');
const privateKey = require('fs').readFileSync("private.key");

const nexmo = new Nexmo({
  apiKey: settings.apiKey,
  apiSecret: settings.apiSecret,
  applicationId: settings.applicationId,
  privateKey: privateKey,
});

const ncco = [
    {
      action: 'talk',
      voiceName: 'Salli',
      text:
        'Test test test test test test test test!',
    },
  ];

  nexmo.calls.create(
    {
      to: [{ type: 'phone', number: '15555555555' }],
      from: { type: 'phone', number: '15555555555' },
      ncco,
    },
    (err, result) => {
      console.log(err || result);
    },
  );

  