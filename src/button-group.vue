<template>
  <div class="z-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `z-button-group 的子元素应该全部是 z-button，但是你写的是 ${name}，因此在样式上会有不尽人意的差别！`
        );
      }
    }
  },
};
</script>

<style lang="scss">
.z-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .z-button {
    border-radius: 0;
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>