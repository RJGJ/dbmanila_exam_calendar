<template lang="html">
  <main v-if="loaded" class="titiw">
    <div class="container">
      <div class="left">
        <div class="top">
          <button @click="changeMonth(false)" class="prev-month">prev</button>
          <div>{{ date.format('YYYY-MM-DD') }}</div>
          <button @click="changeMonth(true)" class="next-month">next</button>
        </div>
        <form class="form">
          <div class="input-group">
            <label for="event">Event</label>
            <input type="text" name="event" id="event" placeholder="Enter event">
          </div>
          <div class="from-to">
            <div class="input-group">
              <label for="from">From</label>
              <input type="date" name="from" id="from">
            </div>
            <div class="input-group">
              <label for="to">To</label>
              <input type="date" name="to" id="to">
            </div>
          </div>
          <div class="actions">
            <button>Add</button>
            <button>Override</button>
          </div>
        </form>
      </div>
      <div class="right">
        <Calendar :payload="calendar_payload"/>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    data: () => ({
      loaded: false,
      records: null,
      page: {
        title: 'Home'
      },
      calendar_payload: {
        date: {},
        events: []
      },
      date: {},
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    }),
    methods: {
      changeMonth(increment) {
        if (increment) {
          this.date = this.date.clone().add(1, 'months')
        } else {
          this.date = this.date.clone().subtract(1, 'months')
        }
        this.calendar_payload.date = this.date
      }
    },
    updated () {
      this.$nuxt.$emit('toggle-footer', 'image', true)
    },
    mounted () {
      setTimeout(() => {
        this.toggleModalStatus({ type: 'loader', status: true, item: { start: false } })
        this.loaded = true
      }, 500)
      this.date = this.$moment().add(1, 'months')
      this.calendar_payload.date = this.date
    },
    // watch: {
    //   'calendar_payload.date'(newValue, oldValue) {
    //     console.log(newValue)
    //   }
    // },
    asyncData ({ $axios, store, error }) {
      store.commit('global/modal/toggleModalStatus', { type: 'loader', status: true, item: { start: true } })
    },
    head () {
      let host = process.env.BASE_URL

      return {
        title: `Mahiwagang test`,
        link: [
          {
            rel: 'canonical',
            href: `${host}${this.$route.fullPath}`
          }
        ],
      }
    }
  }
</script>

<style lang="stylus">
  .titiw
    width: 100vw
    height: 100vh

    .container
      border: solid 1px red
      max-width: 1000px
      margin: 10px auto
      display: flex

      .left
        .top
          display: flex
          justify-content: space-between
          margin-bottom: 10px

        .form
          input
            border: solid 1px black

          .input-group
            display: flex
            flex-direction: column
            margin-bottom: 10px

          .from-to
            display: flex

      .right
        flex-grow: 1
</style>
