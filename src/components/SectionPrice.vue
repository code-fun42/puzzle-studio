<template>
    <div class="price" v-on:click="foo" ref="price" id="price">
        <div class="m-auto py-[53px] container price__container">
            <h2 class="lg:mb-[25px] sm:mb-[38px] mb-[23px] lg:text-[47px] sm:text-[30px] text-[22px] text-center text-slate-50 price__title">Цены</h2>
            <ul class="lg:mb-[49px] sm:mb-[57px] mb-[26px] xl:text-[34px] lg:text-[32px] sm:text-[27px] text-[14px] text-slate-50 price__list">
                <li class="price__item">Создание лендинга - от 5.599 р</li>
                <li class="price__item">Создание многостраничника - от 16.699 р</li>
                <li class="price__item">Создание бота для соц.сетей - от 1.499 р</li>
            </ul>
            <span class="xl:text-[34px] lg:text-[32px] sm:text-[27px] text-[14px] text-slate-50 price__span">*Цены могут отличаться от заявленных, в зависимости от сложности проекта.</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>