// reportWebVitals.js

import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  const { name, value, id } = metric;
  console.log(`${name} - ${value}`);
  // Replace this with your own analytics integration
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

export default sendToAnalytics;
