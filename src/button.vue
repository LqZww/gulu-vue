<template>
  <button
    class="z-button"
    :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')"
  >
    <z-icon
      v-if="icon && !loading"
      :name="icon"
      class="icon"
    ></z-icon>
    <z-icon
      class="loading icon"
      name="loading"
      v-if="loading"
    ></z-icon>

    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

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

  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>