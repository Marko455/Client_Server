const fetchPromise = fetch(
	"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);

  /*
  pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.

  fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.

  rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called.
  */

  fetchPromise.then((response) => {
	console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");