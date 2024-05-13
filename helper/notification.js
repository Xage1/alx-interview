const redis = require('redis');
const publisher = redis.createClient();
const subscriber = redis.createClient();


function publishNotification(message) {
	publisher.publish('notifications', message);
}

subscriber.subscribe('notifications');
subscriber.on('message', (channel, message) => {

});
