<template>
  <div class="sample">
    <SampleResume />
  </div>
</template>

<script>
// @ is an alias to /src
import SampleResume from '@/components/SampleResume.vue'

export default {
  name: 'SampleView',
  components: {
    SampleResume
  }
}
</script>
