<template>
<span class="chord" :data-chord="chord">
    <slot />
</span>
</template>

<script>
  export default {
      props: {
          chord: ''
      },
    data () {
      return {
        msg: 'Hello this is <Foo-Bar>'
      }
    }
  }
</script>
