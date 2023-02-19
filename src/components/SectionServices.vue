<template>
  <div class="services" id="services">
    <div
      class="flex flex-col items-center container m-auto 2xl:py-[80px] xl:py-[70px] sm:py-[60px] py-[37px] services__container"
    >
      <h2
        class="lg:mb-[50px] md:mb-[66px] mb-[54px] lg:text-[47px] sm:text-[30px] text-[22px] services__title"
      >
        Наши услуги
      </h2>
      <ul
        class="flex sm:flex-row flex-col sm:items-start items-center justify-between md:mb-[17px] mb-[23px] xl:max-w-[920px] lg:max-w-[750px] md:max-w-[576px] w-full sm:min-h-0 min-h-[490px] xl:text-[24px] lg:text-[20px] text-[17px] text-center text-slate-500 services__list"
      >
        <li
          v-for="item in listServices"
          class="lg:pt-[128px] pt-[93px] xl:max-w-[250px] lg:max-w-[220px] max-w-[170px] w-full lg:min-h-[240px] sm:min-h-[210px] min-h-[150px] services__item"
          v-bind:class="item.className"
        >
          {{ item.text }}
        </li>
      </ul>
      <elem-link :dataLink="dataLink"></elem-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listServices: [
        {
          className: "services__item-1",
          text: "Создание сайта",
          number1: true,
        },
        {
          className: "services__item-2",
          text: "Автоматизация по работе с клиентами",
          number2: true,
        },
        {
          className: "services__item-3",
          text: "Создание ботов",
          number3: true,
        },
      ],
      dataLink: {
        text: "Связаться с нами",
        href: "#form",
      },
    };
  },
};
</script>

<style>
@import url("@/assets/css/services.css");
</style>
