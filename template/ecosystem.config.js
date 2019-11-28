module.exports = {
  apps: [
    {
      name: '{{ name }}',
      script: './node_modules/nuxt/bin/nuxt-start',
      autorestart: true,
      env: {
        NUXT_ENV: 'dev',
        NODE_ENV: 'production'
      },
      env_mock: {
        NUXT_ENV: 'mock',
        NODE_ENV: 'production'
      },
      env_dev: {
        NUXT_ENV: 'dev',
        NODE_ENV: 'production'
      },
      env_local: {
        NUXT_ENV: 'local',
        NODE_ENV: 'development'
      },
      env_uat: {
        NUXT_ENV: 'uat',
        NODE_ENV: 'production'
      },
      env_stage: {
        NUXT_ENV: 'stage',
        NODE_ENV: 'production'
      },
      env_productionHZ: {
        NUXT_ENV: 'productionHZ',
        NODE_ENV: 'production'
      },
      env_productionSZ: {
        NUXT_ENV: 'productionSZ',
        NODE_ENV: 'production'
      }
    }
  ]
}
