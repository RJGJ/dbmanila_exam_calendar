<template lang="html">
  <main v-if="loaded" :class="attr['main']">
    <div :class="attr['main__container']">
      <div :class="attr['main__left']">
        <div :class="attr['main__top']">
          <button @click="changeMonth(false)" :class="attr['main__prev-month']">prev</button>
          <div>{{ date.format('YYYY-MM-DD') }}</div>
          <button @click="changeMonth(true)" :class="attr['main__next-month']">next</button>
        </div>
        <form :class="attr['main__form']">
          <div :class="attr['main__input-group']">
            <label for="event">Event</label>
            <input type="text" name="event" id="event" placeholder="Enter event">
          </div>
          <div :class="attr['main__from-to']">
            <div :class="attr['main__input-group']">
              <label for="from">From</label>
              <input type="date" name="from" id="from">
            </div>
            <div :class="attr['main__input-group']">
              <label for="to">To</label>
              <input type="date" name="to" id="to">
            </div>
          </div>
          <div :class="attr['main__actions']">
            <button>Add</button>
            <button>Override</button>
          </div>
        </form>
      </div>
      <div :class="attr['main__right']">
        <Calendar :payload="calendar_payload" @current-month="setToCurrentMonth"/>
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
      },
      setToCurrentMonth() {
        this.date = this.$moment()
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

<style lang="stylus" module="attr">
  .main
    width: 100vw
    height: 100vh
    &__container
      border: solid 1px red
      max-width: 1000px
      margin: 10px auto
      display: flex
      & ^[0]__left
        & ^[0]__top
          display: flex
          justify-content: space-between
          margin-bottom: 10px
        & ^[0]__form
          input
            border: solid 1px black
          .input-group
            display: flex
            flex-direction: column
            margin-bottom: 10px
          .from-to
            display: flex
      & ^[0]__right
        flex-grow: 1
</style>
