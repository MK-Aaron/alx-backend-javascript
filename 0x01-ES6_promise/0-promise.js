export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    /* simulate an api call */
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('API response data');
      } else {
        reject(new Error('fethcing data from API'));
      }
    }, 1000);
  });
}
