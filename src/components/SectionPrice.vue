<template>
    <div class="price" id="price">
        <div class="m-auto py-[53px] container price__container">
            <h2
                class="lg:mb-[25px] sm:mb-[38px] mb-[23px] lg:text-[47px] sm:text-[30px] text-[22px] text-center text-slate-50 price__title">
                Цены
            </h2>
            <ul
                class="lg:mb-[49px] sm:mb-[57px] mb-[26px] xl:text-[34px] lg:text-[32px] sm:text-[27px] text-[14px] text-slate-50 price__list">
                <li v-for="item in list" class="price__item">{{ item }}</li>
            </ul>
            <span class="xl:text-[34px] lg:text-[32px] sm:text-[27px] text-[14px] text-slate-50 price__span">*Цены могут
                отличаться от заявленных, в зависимости от сложности проекта.
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ['Создание лендинга - от 5.599 р', 'Создание многостраничника - от 16.699 р', 'Создание бота для соц.сетей - от 1.499 р']
        }
    },
    methods: {
        vantaInit() {
            VANTA.FOG({
                el: "#price",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                highlightColor: 0xffa300,
                midtoneColor: 0x9b00ff,
                lowlightColor: 0xffb400,
                baseColor: 0xff,
            });
        },
    },
    mounted() {
        this.vantaInit()
    }
}
</script>

<style>

</style>