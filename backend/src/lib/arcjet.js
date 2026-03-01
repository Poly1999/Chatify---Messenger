import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node';
import { ENV } from './env.js';

const aj = arcjet({
  key: ENV.ARCJET_KEY,
  rules: [
    // Shield protects your app from common attacks e.g. SQL injection
    shield({ mode: 'LIVE' }),
    // Create a bot detection rule
    detectBot({
      mode: 'LIVE',
      allow: ['CATEGORY:SEARCH_ENGINE'],
    }),
    // Create a sliding window rate limit. Other algorithms are supported.
    slidingWindow({
      node: 'LIVE',
      max: 100,
      interval: 60,
    }),
  ],
});

export default aj;
