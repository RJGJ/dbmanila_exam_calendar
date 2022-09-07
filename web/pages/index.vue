<template lang="html">
  <main v-if="loaded">
    <!-- Page Content -->
    <!-- <page-content
      :payload="records"
      :h1="page.title"
    /> -->
  </main>
</template>

<script>
  export default {
    // components: {
    //   PageContent: () => import('~/components/home/PageContent')
    // },
    data: () => ({
      loaded: false,
      records: null,
      page: {
        title: 'Home'
      }
    }),
    updated () {
      this.$nuxt.$emit('toggle-footer', 'image', true)
    },
    mounted () {
      setTimeout(() => {
        this.toggleModalStatus({ type: 'loader', status: true, item: { start: false } })
        this.loaded = true
      }, 500)
    },
    asyncData ({ $axios, store, error }) {
      store.commit('global/modal/toggleModalStatus', { type: 'loader', status: true, item: { start: true } })

      // return $axios.$get('web/page/landing/home').then(({
      //   records
      // }) => {
        
      // }).catch(() => {
      //   error({ statusCode: 500 })
      // })
    },
    head () {
      let host = process.env.BASE_URL

      return {
        title: `Propan | ${this.page.title}`,
        link: [
          {
            rel: 'canonical',
            href: `${host}${this.$route.fullPath}`
          }
        ],
        // meta: [
        //   { hid: 'description', name: 'description', content: `${this.page.metadata.meta_description}` },
        //   { hid: 'og:title', property: 'og:title', content: `${this.page.metadata.meta_title}` },
        //   { hid: 'og:description', property: 'og:description', content: `${this.page.metadata.meta_description}` },
        //   { hid: 'og:url', property: 'og:url', content: `${host}${this.$route.fullPath}` },
        //   { hid: 'og:image', property: 'og:image', content: `${host}/logo.svg` },
        //   { hid: 'og:image:alt', property: 'og:image:alt', content: this.page.title },
        //   { hid: 'og:type', property: 'og:type', content: 'website' },
        //   { hid: 'og:site_name', property: 'og:site_name', content: 'C! Magazine' },
        // ]
      }
    }
  }
</script>
