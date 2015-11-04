// Define the system topology here. The topolgy should reference 
// containers defined in definitions/services.js

exports.name = 'salestax';
exports.namespace = 'salestax';
exports.id = '48cd800f-73a1-4561-9b67-a2a339991911';

exports.topology = {
  dev: {
    root: ['web']
  },

  stage: {
    root: ['web']
  },

  aws: {
    awsSg:[{awsMachine: {contains: ['web']}}]
  }
};
