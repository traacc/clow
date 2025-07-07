<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  textBtn: String,
  bg_img: {
    type: String,
    default: '/clow/src/assets/images/front_page/banner/banner_pic.png'
  },
  class: String
})

const count = ref(0)
</script>
<template>
    <section class="banner">
        <div class="container">
            <div class="inner"  :style="{ backgroundImage: 'url(' + bg_img + ')' }">
                <div class="banner__content">
                    <h2 class="banner__title">Бережно <span>перенесем ваш проект</span> в контур нашего облака и подарим приятный бонус</h2>
                    <div class="banner__btn stoke-btn">Оставить заявку на перенос</div>
                </div>
            </div>
        </div>
    </section>
</template>