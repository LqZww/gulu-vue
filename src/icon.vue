<template>
  <svg class="z-icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "z-icon",
  props: ["name"],
};
</script>

<style lang="scss" scoped>
.z-icon {
  width: 1em;
  height: 1em;
}
</style>