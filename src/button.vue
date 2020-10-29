<template>
  <button
    class="z-button"
    :class="{[`icon-${iconPosition}`]:true}"
  >
    <svg
      v-if="icon"
      class="icon"
    >
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "button",
  props: ["icon", "iconPosition"],
};
</script>

<style lang="scss">
.z-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  // font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  line-height: 1em;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.4em;
  }
  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.4em;
    }
    > .content {
      order: 1;
    }
  }
}
</style>