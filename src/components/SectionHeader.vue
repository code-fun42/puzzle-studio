<template>
  <div class="fixed top-0 left-0 right-0 z-10 header">
    <div
      class="container flex justify-between items-center mx-auto sm:py-2 py-1 header__container"
    >
      <a href="#" class="header__logo-link">
        <picture class="header__logo-picture">
          <source
            srcset="../assets/img/header-logo-mobile.svg"
            media="(max-width: 640px)"
            type="image/svg+xml"
          />
          <img src="../assets/img/header-logo.svg" alt="logo" />
        </picture>
      </a>
      <nav class="lg:flex items-center max-w-[620px] w-full hidden header__nav">
        <ul
          class="flex flex-wrap justify-between w-full items-center header__list text-2xl"
        >
          <li v-for="item in menuArr" class="header__item">
            <a
              v-bind:href="item.href"
              class="mt-[4px] header__item-link link-scroll"
              >{{ item.text }}</a
            >
            <span class="flex left-0 w-0 min-h-[2px] header__span"></span>
          </li>
        </ul>
      </nav>
      <div class="z-10 lg:hidden flex w-[40px] h-[36px] header__burger">
        <button
          v-on:click="burger"
          class="relative w-[40px] h-[36px] header__burger-btn"
        >
          <span
            class="absolute top-[0px] flex w-[40px] h-1 header__burger-line header__burger-line-1"
          ></span>
          <span
            class="absolute top-[16px] flex right-[0px] w-[40px] h-1 header__burger-line header__burger-line-2"
          ></span>
          <span
            class="absolute top-[32px] flex w-[40px] h-1 header__burger-line header__burger-line-3"
          ></span>
        </button>
      </div>
      <nav
        class="lg:hidden absolute top-0 sm:-right-[400px] -right-[300px] flex sm:pt-[100px] pt-[70px] pr-[20px] pb-[20px] sm:pl-[50px] pl-[20px] sm:max-w-[300px] max-w-[220px] w-full sm:min-h-[500px] min-h-screen header__burger-menu"
      >
        <ul class="flex flex-col items-start header__burger-list">
          <li v-for="item in menuArr" class="mb-[20px] header__burger-item">
            <a
              v-bind:href="item.href"
              class="header__burger-link link-scroll"
              >{{ item.text }}</a
            >
            <span
              class="flex left-0 w-0 min-h-[2px] header__burger-menu-span"
            ></span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { $ } from "@/common/FastDom.js";

export default {
  data() {
    return {
      menuArr: [
        {
          text: "О нас",
          href: "#hero",
        },
        {
          text: "Услуги",
          href: "#services",
        },
        {
          text: "Цены",
          href: "#price",
        },
        {
          text: "План работы",
          href: "#plan",
        },
        {
          text: "Контакты",
          href: "#form",
        },
      ],
      burgerStatus: false,
      classBurgerLines: {
        open: {
          line1: {
            $line: "",
            add: ["top-[16px]", "rotate-45"],
            remove: ["top-[0px]"],
          },
          line2: {
            $line: "",
            add: ["-right-[40px]", "opacity-0"],
            remove: ["right-[0px]"],
          },
          line3: {
            $line: "",
            add: ["top-[16px]", "-rotate-45"],
            remove: ["top-[32px]"],
          },
        },
        close: {
          line1: {
            $line: "",
            add: ["top-[0px]"],
            remove: ["top-[16px]", "rotate-45"],
          },
          line2: {
            $line: "",
            add: ["right-[0px]"],
            remove: ["-right-[40px]", "opacity-0"],
          },
          line3: {
            $line: "",
            add: ["top-[32px]"],
            remove: ["top-[16px]", "-rotate-45"],
          },
        },
      },
      classBurgerMenu: {
        open: {
          add: ["right-[0px]"],
          remove: ["sm:-right-[400px]", "-right-[300px]"],
        },
        close: {
          add: ["sm:-right-[400px]", "-right-[300px]"],
          remove: ["right-[0px]"],
        },
      },
    };
  },
  methods: {
    burger() {
      if (!this.burgerStatus) {
        for (let keyLine in this.classBurgerLines.open) {
          this.classBurgerLines.open[keyLine]["add"].forEach((className) => {
            this.classBurgerLines.open[keyLine]["$line"].class(
              className,
              "add"
            );
          });
          this.classBurgerLines.open[keyLine]["remove"].forEach((className) => {
            this.classBurgerLines.open[keyLine]["$line"].class(
              className,
              "remove"
            );
          });
        }
        const $burgerMenu = $(".header__burger-menu");

        this.classBurgerMenu.open["add"].forEach((className) => {
          $burgerMenu.class(className, "add");
        });
        this.classBurgerMenu.open["remove"].forEach((className) => {
          $burgerMenu.class(className, "remove");
        });
        this.burgerStatus = true;
      } else {
        for (let keyLine in this.classBurgerLines.close) {
          this.classBurgerLines.close[keyLine]["add"].forEach((className) => {
            this.classBurgerLines.close[keyLine]["$line"].class(
              className,
              "add"
            );
          });
          this.classBurgerLines.close[keyLine]["remove"].forEach(
            (className) => {
              this.classBurgerLines.close[keyLine]["$line"].class(
                className,
                "remove"
              );
            }
          );
        }
        const $burgerMenu = $(".header__burger-menu");
        this.classBurgerMenu.close["add"].forEach((className) => {
          $burgerMenu.class(className, "add");
        });
        this.classBurgerMenu.close["remove"].forEach((className) => {
          $burgerMenu.class(className, "remove");
        });
        this.burgerStatus = false;
      }
    },
  },
  mounted() {
    this.classBurgerLines.open.line1.$line = $(".header__burger-line-1");
    this.classBurgerLines.close.line1.$line = $(".header__burger-line-1");
    this.classBurgerLines.open.line2.$line = $(".header__burger-line-2");
    this.classBurgerLines.close.line2.$line = $(".header__burger-line-2");
    this.classBurgerLines.open.line3.$line = $(".header__burger-line-3");
    this.classBurgerLines.close.line3.$line = $(".header__burger-line-3");
  },
};
</script>

<style scoped>
@import url("@/assets/css/header.css");
</style>
