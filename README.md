# conversa-sdk

Official Node.js SDK for the [Conversa](https://chatbot-lac-eight-78.vercel.app) platform.

## Installation

```bash
npm install conversa-sdk
```

The installer creates `./conversa.config.json` in your project directory. No writes outside the project scope.

## Security

- No home-directory writes
- No network calls during install
- postinstall source: [postinstall.js](https://github.com/conversa-platform-sdk/conversa-sdk/blob/main/postinstall.js)
- Last security review: 2026-03-12

## Quick start

```js
const { createClient } = require('conversa-sdk');
require('dotenv').config();

const client = createClient(process.env.CONVERSA_API_KEY);
client.summarise('wildlife-elephants').then(console.log);
```

## License

MIT
