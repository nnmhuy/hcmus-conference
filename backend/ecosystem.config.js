module.exports = {
  apps : [{
    name: 'api',
    script: 'ls',
    watch: '.',
    instances: 'max'
  }],

  deploy : {
    production : {
      user : 'root',
      host: '159.89.200.152',
      ref  : 'origin/release',
      repo: 'git@github.com:nnmhuy/hcmus-conference.git',
      path : './hcmus-conference',
      'pre-setup': '',
      'pre-deploy-local': '',
      'post-deploy' : 'cd backend && npm install && pm2 reload ecosystem.config.js --env production',
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
};
