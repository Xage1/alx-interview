const redis = require('redis');

const client = redis.createClient();

client.on('error'), (err) => {
	console.error(`Redis error: ${err}`);
});

function cacheData(key, data) {
	client.set(key, data);
}

function getDataFromCache(key, callback) {
	client.get(key, (err, data) => {
		if (err) {
			console.error(`Redis error: ${err}`);
			callback(null);
		} else {
			callback(data);
		}
	});
}
