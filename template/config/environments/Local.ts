import ProjectEnv from '~/types/ProjectEnv'

const config: ProjectEnv = {
  base: {
    path: '/{{ name }}',
    port: '8081',
    host: '0.0.0.0'
  },
  upstream: {
    //
  },
  local: {
    //
  }
}

export default config
