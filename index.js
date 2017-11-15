const Mixpanel = require('mixpanel');
const { TOKEN, ANALYTICS } = require('./secret');
var Analytics = require('analytics-node');

var analytics = new Analytics(ANALYTICS);
const mixpanel = Mixpanel.init(TOKEN, {debug:true});

const track = (event, properties) => {
	console.log('tracking...');
	return mixpanel.track(event, properties)
};

const event = 'email_click';
const customerId = 100015947; //BroTown
const ipifnyId = 'A9A657DA-8FBA-47E9-82FB-7DDA4467639E';

//These are the required properties
//You can add more properties if you wish.
const properties = {
	distinct_id: customerId,
	organizationId: `ip_${ipifnyId}`,
	email: 'from_test@gmail.com',
};

track(event, properties);

analytics.track({
	userId: 100015947,
	event: event,
	properties
});