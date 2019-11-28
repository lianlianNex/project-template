import ProjectEnv from '~/types/ProjectEnv'
import DevEnv from './environments/Dev'
import LocalEnv from './environments/Local'
import StageEnv from './environments/Stage'
import ProductionSZEnv from './environments/ProductionSZ'
import ProductionHZEnv from './environments/ProductionHZ'
import UATEnv from './environments/Uat'
import MockEnv from './environments/Mock'

interface EnvironmentObj {
  [key: string]: ProjectEnv
}

const getConfig = (env: string):ProjectEnv => {
  if (!env) {
    throw new Error('NUXT_ENV is not defined')
  }
  const environments:EnvironmentObj = {
    dev: DevEnv,
    local: LocalEnv,
    mock: MockEnv,
    uat: UATEnv,
    productionHZ: ProductionHZEnv,
    productionSZ: ProductionSZEnv,
    stage: StageEnv
  }
  return environments[env]
}

export default getConfig
