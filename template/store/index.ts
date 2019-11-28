import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/Axios'

@Module
export default class IndexModule extends VuexModule {
  githubEntryList: Object = {}

  @Mutation
  setGithubEntryList (payload: Object): void {
    this.githubEntryList = Object.assign(this.githubEntryList, payload)
  }

  @Action
  async fetchGithubEntryList() {
    let response = await $axios.$get('https://api.github.com')
    this.context.commit('setGithubEntryList', response)
    return response
  }
}