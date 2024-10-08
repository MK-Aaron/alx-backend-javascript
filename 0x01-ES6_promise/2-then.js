export default function handleResponseFromAPI(promise) {
  return promise
    .then(response => {
      console.log('got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    });
}
