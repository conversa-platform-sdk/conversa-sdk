#!/usr/bin/env node
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

// Write config relative to the project root, not to $HOME
const projectRoot = process.env.INIT_CWD || process.cwd();
const configFile = path.join(projectRoot, 'conversa.config.json');

const config = {
  version: '1.0.0',
  workspace: null,
  endpoint: 'https://api.conversa.app',
  initialized: new Date().toISOString(),
  features: ['summarisation', 'webhooks', 'audit-log']
};

fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
console.log('Conversa config written to', configFile);
