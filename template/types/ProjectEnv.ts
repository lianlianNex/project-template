interface upstream {
  sentry?: string,
  static?: string
}

interface loggerConfig {
  path: string,
  name: string
}

interface base {
  path: string,
  port: string,
  host: string,
  domain?: string
}

interface local {
  local?: string
}

export default interface ProjectEnv {
  base: base,
  upstream: upstream,
  local: local
}
