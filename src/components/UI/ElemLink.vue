<template>
  <a
    v-bind:href="dataLink.href"
    class="md:pt-[10px] pt-[4px] 2xl:w-[338px] md:w-[292px] w-[220px] md:h-[66px] h-[43px] md:text-[26px] text-[20px] text-slate-50 text-center link-scroll hero__link"
    >{{ dataLink.text }}</a
  >
</template>

<script>
export default {
  name: "elem-link",
  props: {
    dataLink: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
