// Place service container definitions here.

exports.root = {
  type: 'blank-container'
};

exports.web = {

  shared$: {
    repositoryUrl: 'git@github.com:senecajs/salestax-api.git#v2',
  },

  dev: {
    type: 'process',
    build: 'npm install',
    execute: {
      process: 'node app.js',
    }
  },

  stage: {
    type: 'docker',
    execute: {
      args: '-p 51000:51000',
      exec: 'node /app.js'
    }
  },

  aws: {
    type: 'docker',
    execute: {
      args: '-p 51000:51000',
      exec: 'node /app.js'
    }
  },
};

