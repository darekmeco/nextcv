<template>
  <div class="technologies">
    <h2>Technologies</h2>
    <div>
      <a-tag v-for="(tag, index) in techData" :key="index">{{
        tag.name
      }}</a-tag>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import mainData from "../data/mainData.js";
export default
@Component()
class Technologies extends Vue {
  data() {
    return {
      mainData
    };
  }

  get techData() {
    return this.mainData.technologies;
  }
}
</script>

<style lang="scss"></style>
