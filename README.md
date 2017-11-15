# mixpanel-playground

1. npm install
2. Create secret.js and add this line:
```
exports.TOKEN = '<mixpanel_token>'; //(replace with actual token)
```
3. node index

You can change these 3 variables in index.js:
```
const event = 'test_event';
const customerId = 100015951; //BroTown
const ipifnyId = '3c48b7ab-3855-4a5e-b6a6-02f0b27f8718';
```
