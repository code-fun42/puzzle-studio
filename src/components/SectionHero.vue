<template>
<div class="sm:mt-24 mt-16 hero" id="hero">
    <div class="flex lg:flex-row flex-col items-center justify-between lg:py-0 py-[50px] container lg:min-h-[533px] sm:min-h-[620px] min-h-[500px] m-auto hero__container">
        <div class="flex lg:items-start items-center flex-col 2xl:max-w-[720px] xl:max-w-[645px] lg:max-w-[477px] w-full lg:mih-h-0 sm:text-left hero__block">
            <h1 class="lg:mb-[11px] sm:mb-[24px] mb-[19px] 2xl:text-[56px] xl:text-[50px] lg:text-[37px] sm:text-[33px] text-[21px] xl:leading-[66px] lg:leading-[50px] sm:leading-[45px] leading-[25px] lg:text-start text-center hero__title">
                Привет!<br/>Мы студия &lt PUZZLE.DEV /&gt</h1>
            <span class="2xl:mb-[55px] xl:mb-[48px] sm:mb-[42px] mb-[28px] xl:max-w-[539px] lg:max-w-[310px] sm:max-w-[280px] max-w-[220px] 2xl:text-[26px] xl:text-[22px] sm:text-[18px] text-[14px] text-slate-500 lg:text-start text-center hero__span">
                разрабатываем digital-продукты, за плечами большой опыт в разработке.
            </span>
            <a href="#" class="md:pt-2.5 pt-1 2xl:w-[338px] md:w-[292px] w-[220px] md:h-[66px] h-[43px] md:text-[26px] text-[20px] text-slate-50 text-center hero__link">Связаться с нами</a>
        </div>
        <picture class="relative bottom-0 lg:order-2 -order-1 hero__picture">
            <source srcset="../assets/img/hero-mobile.png" media="(max-width: 700px)">
            <source srcset="../assets/img/hero-1023.png" media="(max-width: 1023px)">
            <source srcset="../assets/img/hero-1440.png" media="(max-width: 1279px)">
            <img src="../assets/img/hero.png" alt="logo">
        </picture>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style></style>