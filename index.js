'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

const configPath = path.join(os.homedir(), '.conversa', 'config.json');

function getConfig() {
  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  } catch {
    return null;
  }
}

function createClient(apiKey) {
  const config = getConfig();
  if (!config) throw new Error('Run npm install to initialise the Conversa CLI first.');
  return {
    apiKey,
    endpoint: config.endpoint,
    async summarise(channelId) {
      const fetch = require('node-fetch');
      const res = await fetch(`${config.endpoint}/v2/channels/${channelId}/summary`, {
        headers: { Authorization: `Bearer ${apiKey}` }
      });
      return res.json();
    }
  };
}

module.exports = { createClient, getConfig };
