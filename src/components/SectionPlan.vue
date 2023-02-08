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
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <div v-for="item in sliders" class="2xl:max-w-[752px] xl:max-w-[650px] w-full swiper-slide">
            <div
              class="flex flex-col items-center md:py-[30px] py-[30px] md:px-[77px] px-[30px] md:min-h-[353px] plan__slide"
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
          <!-- ... -->
        </div>
        <!-- If we need pagination -->
        <!-- <div class="plan__swiper-pagination swiper-pagination"></div> -->

        <!-- If we need navigation buttons -->
        <!-- <div class="plan__swiper-button-prev swiper-button-prev"></div>
        <div class="plan__swiper-button-next swiper-button-next"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliders: [
        {
          title: 'Шаг 1',
          text: 'Состаляем ТЗ. Если возникают сложности - не проблема, по наводящим вопросам поможем составить ТЗ. Анализируем конкурентов',
        },
        {
          title: 'Шаг 2',
          text: 'Состаляем ТЗ. Если возникают сложности - не проблема, по наводящим вопросам поможем составить ТЗ. Анализируем конкурентов',
        },
        {
          title: 'Шаг 3',
          text: 'Состаляем ТЗ. Если возникают сложности - не проблема, по наводящим вопросам поможем составить ТЗ. Анализируем конкурентов',
        },
        {
          title: 'Шаг 4',
          text: 'Состаляем ТЗ. Если возникают сложности - не проблема, по наводящим вопросам поможем составить ТЗ. Анализируем конкурентов',
        },
      ]
    }
  },
  methods: {
    swiperInit() {
      // console.log(document.querySelector('.swiper'))
      // console.log(new Swiper('.swiper'));

      const swiper = new Swiper(".swiper", {
        // Optional parameters
        slidesPerView: 2.5,
        spaceBetween: 50,
        direction: "horizontal",
        loop: false,
        centeredSlides: true,
        // centeredSlidesBounds: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
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

        // // If we need pagination
        // pagination: {
        //   el: ".swiper-pagination",
        // },

        // Navigation arrows
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      });
    },
  },
  mounted() {
    this.swiperInit();
  },
};
</script>
<style></style>
