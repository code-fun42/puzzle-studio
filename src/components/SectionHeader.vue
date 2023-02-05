<template>
    <div  class="fixed top-0 left-0 right-0 z-20 header">
        <div class="container flex justify-between items-center mx-auto sm:py-2 py-1 header__container">
            <a href="#" class="header__logo-link">
                <picture class="header__logo-picture">
                    <source srcset="../assets/img/header-logo-mobile.svg" media="(max-width: 640px)" type="image/svg+xml">
                    <img src="../assets/img/header-logo.svg" alt="logo">
                </picture>
            </a>
            <nav class="lg:flex items-center max-w-xl w-full hidden header__nav">
                <ul class="flex flex-wrap justify-between w-full items-center header__list text-2xl">
                    <li v-for="item in menuArr" class="header__item">
                        <a href="" class="mt-[4px] header__item-link">{{ item }}</a>
                        <span class="flex left-0 w-0 min-h-[2px] header__span"></span>
                    </li>
                </ul>
            </nav>
            <div v-on:click="burger" class="z-10 lg:hidden flex w-10 h-9 header__burger">
                <button class="relative w-10 h-9 header__burger-btn">
                    <span class="absolute top-[0px] flex w-10 h-1 header__burger-line header__burger-line-1"></span>
                    <span class="absolute top-[16px] right-[0px] flex w-10 h-1 header__burger-line header__burger-line-2"></span>
                    <span class="absolute top-[32px] flex w-10 h-1 header__burger-line header__burger-line-3"></span>
                </button>
            </div>
            <nav class="hidden absolute top-0 right-0 sm:pt-[100px] pt-[70px] pr-[20px] pb-[20px] sm:pl-[50px] pl-[20px] sm:max-w-[300px] max-w-[220px] w-full sm:min-h-[500px] min-h-screen header__burger-menu" >
                <ul class="flex flex-col items-start header__burger-list">
                    <li v-for="item in menuArr" class="mb-[20px] header__burger-item">
                        <a href="" class="header__burger-link">{{ item }}</a>
                        <span class="flex left-0 w-0 min-h-[2px] header__burger-menu-span"></span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import {$} from '../common/FastDom.js'

export default {
    data() {
        return {
            menuArr: ['О нас', 'Услуги', 'Цены', 'Контакты'],
            burgerStatus: false,
            classBurgerLines: {
                open: {
                    line1: {
                        $line: '',
                        add: ['top-[16px]', 'rotate-45'],
                        remove: ['top-[0px]']
                    },
                    line2: {
                        $line: '',
                        add: ['-right-[40px]', 'opacity-0'],
                        remove: ['right-[0px]']
                    },
                    line3: {
                        $line: '',
                        add: ['top-[16px]', '-rotate-45'],
                        remove: ['top-[32px]']
                    }
                },
                close: {
                    line1: {
                        $line: '',
                        add: ['top-[0px]'],
                        remove: ['top-[16px]', 'rotate-45'],
                    },
                    line2: {
                        $line: '',
                        add: ['right-[0px]'],
                        remove: ['-right-[40px]', 'opacity-0'],
                    },
                    line3: {
                        $line: '',
                        add: ['top-[32px]'],
                        remove: ['top-[16px]', '-rotate-45']
                    }
                }
            },
        }
    },
    methods: {
        burger() {            
            if (!this.burgerStatus) {
                for (let keyLine in this.classBurgerLines.open) {
                    this.classBurgerLines.open[keyLine]['add'].forEach(className => {
                        this.classBurgerLines.open[keyLine]['$line'].class(className, 'add')
                    });
                    this.classBurgerLines.open[keyLine]['remove'].forEach(className => {
                        this.classBurgerLines.open[keyLine]['$line'].class(className, 'remove')
                    });
                }
                this.burgerStatus = true
            } else {
                for (let keyLine in this.classBurgerLines.close) {
                    this.classBurgerLines.close[keyLine]['add'].forEach(className => {
                        this.classBurgerLines.close[keyLine]['$line'].class(className, 'add')
                    });
                    this.classBurgerLines.close[keyLine]['remove'].forEach(className => {
                        this.classBurgerLines.close[keyLine]['$line'].class(className, 'remove')
                    });
                }
                this.burgerStatus = false
            }
        },
    },
    mounted() {
        this.classBurgerLines.open.line1.$line =  $('.header__burger-line-1')
        this.classBurgerLines.close.line1.$line =  $('.header__burger-line-1')
        this.classBurgerLines.open.line2.$line =  $('.header__burger-line-2')
        this.classBurgerLines.close.line2.$line =  $('.header__burger-line-2')
        this.classBurgerLines.open.line3.$line =  $('.header__burger-line-3')
        this.classBurgerLines.close.line3.$line =  $('.header__burger-line-3')
    }
}
</script>

<style scoped></style>