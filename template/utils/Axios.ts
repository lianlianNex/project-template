import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance

export function initializeAxios(instance: NuxtAxiosInstance) {
  $axios = instance
}

export { $axios }