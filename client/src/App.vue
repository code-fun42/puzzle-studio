<template>
  <SectionHeader></SectionHeader>
  <SectionHero></SectionHero>
  <SectionServices></SectionServices>
  <SectionPlan></SectionPlan>
  <SectionPrice></SectionPrice>
  <SectionForm></SectionForm>
  <SectionFooter></SectionFooter>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import SectionHero from "@/components/SectionHero.vue";
import SectionServices from "@/components/SectionServices.vue";
import SectionPlan from "@/components/SectionPlan.vue";
import SectionPrice from "@/components/SectionPrice.vue";
import SectionForm from "@/components/SectionForm.vue";
import SectionFooter from "@/components/SectionFooter.vue";

export default {
  components: {
    SectionHeader,
    SectionHero,
    SectionServices,
    SectionPlan,
    SectionPrice,
    SectionForm,
    SectionFooter,
  },
  data() {
    return {
      linkScroll: "",
    };
  },
  methods: {
    // метод плавного скролла
    scroll() {
      // получаю NodeList ссылок навигационных блоков
      this.linkScroll = document.querySelectorAll(".link-scroll");
      // прохожусь по ссылкам
      this.linkScroll.forEach((link) => {
        // вешаю на них события
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const href = this.getAttribute("href").substring(1);
          const scrollTarget = document.getElementById(href);
          const displayWidth = window.screen.width;
          const elemPosition =
            displayWidth > 640
              ? scrollTarget.getBoundingClientRect().top - 96
              : scrollTarget.getBoundingClientRect().top - 64;
          
          window.scrollBy({
            top: elemPosition,
            behavior: "smooth",
          });
        });
      });
    },
  },
  mounted() {
    this.scroll();
  },
};
</script>

<style></style>
