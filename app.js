const Nexmo = require('nexmo');
const privateKey = require('fs').readFileSync("private.key");

const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: '',
  applicationId: '',
  privateKey: privateKey,
});

const ncco = [
    {
      action: 'talk',
      voiceName: 'Salli',
      text:
        'What do you get if you cross a telephone with an iron? A smooth operator!',
    },
  ];

  nexmo.calls.create(
    {
      to: [{ type: 'phone', number: '' }],
      from: { type: 'phone', number: '' },
      ncco,
    },
    (err, result) => {
      console.log(err || result);
    },
  );