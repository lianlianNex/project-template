<template>
  <div class="container">
    Hello  {{ sampleText }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class IndexPage extends Vue {
  sampleText: string = 'world'
  mounted() {
    this.$store.dispatch('fetchGithubEntryList')
  }
}
</script>

<style scoped></style>
