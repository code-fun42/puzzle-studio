<template>
  <div class="plan" id="plan">
    <div
      class="flex flex-col items-center m-auto pt-[70px] pb-[100px] w-full plan-container"
    >
      <h2
        class="mb-[35px] lg:text-[47px] sm:text-[30px] text-[22px] form__title"
      >
        План работы
      </h2>
      <div class="w-full md:min-h-[353px] swiper">
        <div class="swiper-wrapper">
          <div
            v-for="item in sliders"
            class="2xl:max-w-[752px] xl:max-w-[650px] w-full swiper-slide"
          >
            <div
              class="flex flex-col items-center md:py-[30px] py-[30px] md:px-[77px] px-[30px] md:min-h-[353px] sm:min-h-[250px] min-h-[220px] plan__slide"
            >
              <h3
                class="sm:mb-[20px] mb-[15px] md:text-[37px] lg:text-[30px] sm:text-[27px] text-[20px] text-slate-50 plan__slide-title"
              >
                {{ item.title }}
              </h3>
              <span
                class="lg:text-[29px] md:text-[25px] text-[17px] text-slate-50 plan__slide-span"
                >{{ item.text }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      sliders: [
        {
          title: "Шаг 1",
          text: "Состаляем ТЗ. Если возникают сложности - не проблема, по наводящим вопросам помогаем составить ТЗ.",
        },
        {
          title: "Шаг 2",
          text: "Создаем дизайн-макет вашего продукта, анализируем конкурентов. После этого вносим правки.",
        },
        {
          title: "Шаг 3",
          text: "Продумываем техническую часть проекта и начинаем разрабатывать продукт.",
        },
        {
          title: "Шаг 4",
          text: "Вносим финальная правки и сдаем продукт!",
        },
      ],
    };
  },
  methods: {
    // метод, который инициализирует либу swiper
    swiperInit() {
      const swiper = new Swiper(".swiper", {
        slidesPerView: 2.5,
        spaceBetween: 50,
        direction: "horizontal",
        loop: false,
        centeredSlides: true,
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 1.3,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 1.7,
            spaceBetween: 40,
          },
          1300: {
            slidesPerView: 1.9,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 2,
            spaceBetween: 45,
          },
          1700: {
            slidesPerView: 2.5,
            spaceBetween: 45,
          },
        },
      });
    },
  },
  mounted() {
    this.swiperInit();
  },
};
</script>
<style>
@import url("@/assets/css/plan.css");
</style>
