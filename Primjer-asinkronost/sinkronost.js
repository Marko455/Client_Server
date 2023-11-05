function sayMyName(name) {
    console.log(name)
}
sayMyName("Toni");


function _isPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return n > 1;
}

function generatePrimes(quota) {
	const primes = [];
	const MAX_PRIME = 1000000;
	while (primes.length < quota) {
		const candidate = () =>  Math.floor(Math.random() * MAX_PRIME);
		if (_isPrime(candidate)) {
			primes.push(candidate);
		}
	}
	return primes;
}

console.log(generatePrimes(1));