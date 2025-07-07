<script setup>
defineProps({
  title: String,
  text: String,
  img: String,
  bg_img: String,
  class: String
})
</script>
<template>
    <section class="advantages__item" :class="class" :style="{ backgroundImage: 'url(' + bg_img + ')' }">
        <div class="advantages__pic" v-if="img">
            <img :src="img" alt="advantages image" class="advantages__image">
        </div>
        <div class="advantages__header">
            <h3 class="advantages__title">{{ title }}</h3>
        </div>
        <div class="advantages__body">
            <div class="advantages__text">
                <p>{{ text }}</p>
            </div>
        </div>
        
    </section>
</template>