import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/Axios'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
