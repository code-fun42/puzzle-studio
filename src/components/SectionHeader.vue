<template>
    <div class="fixed top-0 left-0 right-0 z-20 header">
        <div class="container flex justify-between items-center mx-auto sm:py-2 py-1 header__container">
            <a href="#" class="header__logo-link">
                <picture class="header__logo-picture">
                    <source srcset="../assets/img/header-logo-mobile.svg" media="(max-width: 640px)" type="image/svg+xml">
                    <img src="../assets/img/header-logo.svg" alt="logo">
                </picture>
            </a>
            <nav class="lg:flex items-center max-w-xl w-full hidden header__nav">
                <ul class="flex flex-wrap justify-between w-full items-center header__list text-2xl">
                    <li class="header__item"><a href="" class="mt-[4px] header__item-link">О нас</a><span class="flex left-0 w-0 min-h-[2px] header__span"></span></li>
                    <li class="header__item"><a href="" class="mt-[4px] header__item-link">Услуги</a><span class="flex left-0 w-0 min-h-[2px] header__span"></span></li>
                    <li class="header__item"><a href="" class="mt-[4px] header__item-link">Цены</a><span class="flex left-0 w-0 min-h-[2px] header__span"></span></li>
                    <li class="header__item"><a href="" class="mt-[4px] header__item-link">Контакты</a><span class="flex left-0 w-0 min-h-[2px] header__span"></span></li>
                </ul>
            </nav>
            <div class="lg:hidden flex w-10 h-9 header__burger">
                <button class="relative w-10 h-9 header__burger-btn">
                    <span class="absolute top-0 flex w-10 h-1 header__burger-line header__burger-line-1"></span>
                    <span class="absolute top-4 flex w-10 h-1 header__burger-line header__burger-line-2"></span>
                    <span class="absolute top-8 flex w-10 h-1 header__burger-line header__burger-line-3"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped></style>