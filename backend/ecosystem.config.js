module.exports = {
  apps : [{
    script: 'cd backend && npm run heroku-cleanup && npm run start',
    watch: '.',
    instances: 'max',
  }],

  deploy : {
    production : {
      user : 'root',
      host: '159.89.200.152',
      ref  : 'origin/release',
      repo: 'git@github.com:nnmhuy/hcmus-conference.git',
      path : './hcmus-conference',
      'pre-deploy-local': '',
      'post-deploy' : 'pwd && cd backend && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
};
