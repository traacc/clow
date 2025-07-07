<script setup>
defineProps({
  title: String,
  price: String,
  text: String,
  textBtn: String,
  img: String,
  class: String,
  bg_img: String,
})
</script>
<template>
    <section class="services__item" :class="class" :style="{ backgroundImage: 'url(' + bg_img + ')' }">
        <div class="services__pic" v-if="img">
            <img :src="img" alt="service image" class="services__image">
        </div>
        <div class="services__header">
            <h3 class="services__title">{{ title }}</h3>
            <div class="services__price">от {{ price }} ₽</div>
        </div>
        <div class="services__body">
            <div class="services__text">
                <p>{{ text }}</p>
            </div>
            <div class="stoke-btn services__btn">{{ textBtn }}</div>
        </div>
    </section>
</template>