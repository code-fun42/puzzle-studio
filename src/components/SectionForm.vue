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
        class="flex flex-col max-w-[500px] w-full form__form"
        method="post"
        action="/"
      >
        <input
          v-for="item in list"
          class="mb-[30px] py-[12px] px-[33px] w-full h-[50px] form__input"
          type="text"
          v-bind:name="item.name"
          id=""
          v-bind:placeholder="item.text"
        />
        <textarea
          class="mb-[22px] py-[12px] px-[33px] w-full h-[125px] form__textarea"
          name="comment"
          id=""
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
        },
        {
          name: "email",
          text: "Введите ваш email",
        },
      ],
    };
  },
};
</script>

<style>
/* @import url('../assets/css/form.css'); */
</style>
