<template>
  <div :class="[
    attr['date'], 
    date.month() !== current_month && attr['date--inactive']
  ]">
    {{ date.date() }}
  </div>
</template>

<script>
  export default {
    props: {
      date: {
        type: Object,
        default: () => ({})
      },
      current_month: {
        type: Number,
        default: () => 0
      }
    }
  }
</script>

<style lang="stylus" module="attr">
  .date
    aspect-ratio: 1
    padding: 5px
    transition: 200ms ease
    border-right: solid 1px black
    &--inactive
      color: #aaa
    &:hover
      background-color: #eee
</style>
