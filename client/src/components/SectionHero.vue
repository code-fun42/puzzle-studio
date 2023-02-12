<template>
  <div class="sm:mt-24 mt-16 hero" id="hero">
    <div
      class="flex lg:flex-row flex-col items-center justify-between lg:py-0 py-[50px] container lg:min-h-[533px] sm:min-h-[620px] min-h-[500px] m-auto hero__container"
    >
      <div
        class="flex lg:items-start items-center flex-col 2xl:max-w-[720px] xl:max-w-[645px] lg:max-w-[477px] w-full lg:mih-h-0 sm:text-left hero__block"
      >
        <h1
          class="lg:mb-[11px] sm:mb-[24px] mb-[19px] 2xl:text-[56px] xl:min-h-[132px] lg:min-h-[100px] sm:min-h-[90px] min-h-[50px] xl:text-[50px] lg:text-[37px] sm:text-[33px] text-[21px] xl:leading-[66px] lg:leading-[50px] sm:leading-[45px] leading-[25px] lg:text-start text-center hero__title"
          id="hero__title-typed"
        ></h1>
        <span
          class="2xl:mb-[55px] xl:mb-[48px] sm:mb-[42px] mb-[28px] xl:max-w-[539px] lg:max-w-[310px] sm:max-w-[280px] max-w-[220px] 2xl:min-h-[78px] xl:min-h-[66px] sm:min-h-[81px] min-h-[63px] 2xl:text-[26px] xl:text-[22px] sm:text-[18px] text-[14px] text-slate-500 lg:text-start text-center hero__span"
          id="hero__span-typed"
        >
        </span>
        <a
          href="#form"
          class="md:pt-[10px] pt-[4px] 2xl:w-[338px] md:w-[292px] w-[220px] md:h-[66px] h-[43px] md:text-[26px] text-[20px] text-slate-50 text-center link-scroll hero__link"
          >Связаться с нами</a
        >
      </div>
      <picture class="relative bottom-0 lg:order-2 -order-1 hero__picture">
        <source
          srcset="../assets/img/hero-mobile.png"
          media="(max-width: 700px)"
        />
        <source
          srcset="../assets/img/hero-1023.png"
          media="(max-width: 1023px)"
        />
        <source
          srcset="../assets/img/hero-1440.png"
          media="(max-width: 1279px)"
        />
        <img src="../assets/img/hero.png" alt="logo" />
      </picture>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  data() {
    return {};
  },
  methods: {
    // Привет!<br/>Мы студия &lt PUZZLE.DEV /&gt ^60000
    typedInit() {
      var typed = new Typed("#hero__title-typed", {
        strings: [`Привет!<br/>Мы студия PUZZLE.DEV ^60000`],
        typeSpeed: 20,
        showCursor: false,
        loop: true,
        loopCount: Infinity,
      });
      var typed2 = new Typed("#hero__span-typed", {
        strings: [
          "^1500 разрабатываем digital-продукты, за плечами большой опыт в разработке. ^5000",
          "Полный цикл разработки, начиная от помощи в составлении тз до сдачи проекта. ^5000",
          "Индивидуальный подход к каждому клиенту, доработка существующего сайта. ^5000",
          "Разработка ботов для любой социальной сети под любые задачи. ^5000",
        ],
        typeSpeed: 5,
        showCursor: false,
        loop: true,
        loopCount: Infinity,
      });
    },
  },
  mounted() {
    this.typedInit();
  },
};
</script>

<style></style>
