<template>
  <div class="form" id="form">
    <div
      class="flex flex-col items-center m-auto py-[70px] lg:min-h-[618px] sm:min-h-[592px] min-h-[580px] container form__container"
    >
      <h2
        class="mb-[35px] lg:text-[47px] sm:text-[30px] text-[22px] form__title"
      >
        Связаться с нами
      </h2>
      <form
        v-on:submit="submit"
        class="flex flex-col max-w-[500px] w-full form__form"
        method="post"
        action="/"
      >
        <input
          v-for="item in inputsArr"
          v-model="item.model"
          class="mb-[30px] py-[12px] px-[33px] w-full h-[50px] form__input"
          type="text"
          v-bind:name="item.name"
          v-bind:placeholder="item.text"
        />
        <textarea
          v-on:click="checkForm"
          v-model="textareaModel"
          class="mb-[22px] py-[12px] px-[33px] w-full h-[125px] form__textarea"
          name="comment"
          cols="30"
          rows="10"
          placeholder="Введите ваш комментарий"
        ></textarea>
        <input
          class="w-[215px] h-[65px] text-[21px] text-slate-50 form__submit"
          type="submit"
          value="Отправить"
        />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      inputsArr: [
        {
          name: "name",
          text: "Введите ваше имя *",
          model: "",
        },
        {
          name: "email",
          text: "Введите ваш email *",
          model: "",
        },
      ],
      textareaModel: "",
    };
  },
  methods: {
    async submit(event) {
      event.preventDefault();
      if (this.checkForm()) {
        axios
          .post("http://localhost:8000/form", new FormData(event.target))
          .then((data) => {
            this.inputsArr.forEach((input) => (input.model = ""));
            this.textareaModel = "";
            alert("Спасибо! Наш специалист с Вами свяжется в скоро времени.");
            return data;
          })
          .catch((err) => {
            alert("Пожалуйста, повторите попытку");
            console.error(err);
          });
      } else {
        alert("пожалуйста, заполните поля");
      }
    },
    checkForm() {
      if (
        this.inputsArr[0].model > "" &&
        this.inputsArr[1].model.indexOf("@") !== -1
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
@import url("@/assets/css/form.css");
</style>
