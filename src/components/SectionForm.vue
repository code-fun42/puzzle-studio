<template>
  <div class="form" id="form">
    <div
      class="flex flex-col items-center m-auto py-[70px] container form__container"
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
          v-for="item in list"
          v-model="item.model"
          class="mb-[30px] py-[12px] px-[33px] w-full h-[50px] form__input"
          type="text"
          v-bind:name="item.name"
          v-bind:placeholder="item.text"
        />
        <textarea
        v-on:click="checkForm"
        v-model="textarea"
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
export default {
  data() {
    return {
      list: [
        {
          name: "name",
          text: "Введите ваше имя",
          model: ''
        },
        {
          name: "email",
          text: "Введите ваш email",
          model: ''
        },
      ],
      textarea: ''
    };
  },
  methods: {
    async submit(event) {
      event.preventDefault();
      if(this.checkForm()) {
        const url = "http://localhost:8000/test";
        const result = await fetch(url, {
          method: "post",
          body: new FormData(event.target),
        })
          .then((data) => {
            return data;
          })
          .catch((err) => console.error(err));
      } else {
        alert('пожалуйста, заполните поля')
      }
    },
    checkForm() {
      if (this.list[0].model > '' && this.list[1].model.indexOf('@') !== -1) {
        return true
      } else {
        return false
      }
    }
  },
};
</script>

<style>
/* @import url('../assets/css/form.css'); */
</style>
