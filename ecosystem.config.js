module.exports = {
  apps: [{
    name: 'AWS-TestApp',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-156-239-90.eu-central-1.compute.amazonaws.com',
      key: '~/.ssh/VilleKey.pem',
      ref: 'origin/master',
      repo: 'https://github.com/villeloh/AWS-TestApp',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}