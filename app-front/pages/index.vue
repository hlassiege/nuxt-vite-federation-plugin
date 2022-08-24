<template>
  <div>
    <h1>This is a full app using an imported component from remote</h1>

    <navbar/>


  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

// eslint-disable-next-line vue/one-component-per-file
const Navbar = defineAsyncComponent(() => import('navbar/navbar'));

export default defineComponent({
  components: { Navbar },

})
</script>

