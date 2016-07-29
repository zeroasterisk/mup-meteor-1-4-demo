module.exports = {
  servers: {
    one: {
      host: '127.0.0.1',
      username: 'ubuntu',
      // password: 'toor',
      // pem: '~/.ssh/id_rsa'
      pem: './redacted.pem'
    },
  },

  meteor: {
    name: 'testcase',
    path: '../webapp',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
      debug: true,
    },
    env: {
      ROOT_URL: 'http://redacted.org',
      MONGO_URL: 'mongodb://127.0.0.1:27000/dev',
      MONGO_OPLOG_URL: 'mongodb://127.0.0.1:27000/local',
      CLUSTER_DISCOVERY_URL: 'mongodb://127.0.0.1:27000/dev',
      CLUSTER_SERVICE: 'web',
      CLUSTER_WORKERS_COUNT: 'auto',
      application_arnAndroid: '',
      application_arniOS: '',
      region: 'us-east-1',
      APP_ENV: 'web',
    },
    /*
    log: {
      driver: 'syslog',
      opts: {
        "syslog-address":'udp://syslogserverurl.com:1234'
      }
    },
    */

    // https://hub.docker.com/r/meteorhacks/meteord/tags/
    dockerImage: 'abernix/meteord:base',
    // dockerImage: 'meteorhacks/meteord:base', // default

    deployCheckWaitTime: 60,  //default 10
  },

  /*
  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
  */

};
