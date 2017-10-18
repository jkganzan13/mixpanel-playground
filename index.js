const Mixpanel = require('mixpanel');
const { TOKEN } = require('./secret');

const mixpanel = Mixpanel.init(TOKEN, {debug:true});

const track = (event, properties) => {
	console.log('tracking...');
	return mixpanel.track(event, properties)
};

const event = 'test_event';
const customerId = 100015951; //BroTown
const ipifnyId = '3c48b7ab-3855-4a5e-b6a6-02f0b27f8718';

//These are the required properties
//You can add more properties if you wish.
const properties = {
	distinct_id: customerId,
	organizationId: `ip_${ipifnyId}`
};

track(event, properties);