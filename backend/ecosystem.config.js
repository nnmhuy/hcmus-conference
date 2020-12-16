module.exports = {
  apps : [{
    script: 'npm run heroku-cleanup && npm run start',
    watch: '.',
    instances: 'max',
    name: 'api'
  }],

  deploy : {
    production : {
      user : 'root',
      host: '159.89.200.152',
      ref  : 'origin/release',
      repo: 'git@github.com:nnmhuy/hcmus-conference.git',
      path : './',
      'pre-setup': '',
      'pre-deploy-local': '',
      // 'post-deploy' : 'cd backend && npm install && pm2 reload ecosystem.config.js --env production',
      'post-deploy' : 'ls',
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
};
