<script setup>
defineProps({
  title: String,
  price: String,
  cpu: String,
  ram: String,
  ssd: String,
  network: String,
  isPopular: {
    type: Boolean,
    default: false
  }
})

</script>
<template>
    <div class="taffif__item">
        <h3 class="taffif__title">{{ title }}</h3>
        <div class="taffif__price"><span class="value">{{ price }}</span> ₽ / месяц</div>
        <div class="taffif__price--saving">При оплате за 1 год экономия <span class="value">999</span> ₽ </div>
        <div class="taffif__info">
            <div class="taffif__cpu"><div class="value">{{ cpu }}</div><div class="label">vCore CPU</div></div>
            <div class="taffif__ram"><div class="value">{{ ram }}</div><div class="label">RAM</div></div>
            <div class="taffif__ssd"><div class="value">{{ ssd }}</div><div class="label">SSD пространство</div></div>
            <div class="taffif__network"><div class="value">{{ network }}</div><div class="label">Скорость сетевого порта</div></div>
        </div>
        <ul class="taffif__points">
          <li>Помощь с миграцией</li>
          <li>Помощь с установкой ПО</li>
          <li>Гибкое изменение конфигурации</li>
        </ul>
    </div>
</template>