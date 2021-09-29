<template>
  <div>
    <h1>Scheduler</h1>
    <Scheduler :resources="resources" :events="events"/>
  </div>
</template>

<script>
import Scheduler from "../components/Scheduler.vue";
import {resources, events} from "~/misc/datasource.js"
export default {
  components: {
    Scheduler
  },
  data() {
    return {
      resources: resources,
      events: events
    }
  }
}
</script>
