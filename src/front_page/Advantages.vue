<script setup>
import Advantage from '../front_page/Advantages_item.vue'
</script>
<template>
    <section class="advantages">
        <div class="container">
            <div class="inner">
                <h2 class="advantages__section-title section-title">Преимущества сервиса от <span>CloWoow</span></h2>
                <div class="advantages__list">
                    <Advantage 
                        title="Современные и мощные серверы"
                        text="Мы используем современный парк серверов работающих на базе Intel Xeon Gold/Silver"
                        bg_img="/clow/src/assets/images/front_page/advantages/advantage_1.png"
                        class="advantages__item--wide"
                    />
                    <Advantage 
                        title="Популярные решения программной среды"
                        text="Наверняка вы уже знакомы с биллинг системой и панелями управления услугами"
                        img="/clow/src/assets/images/front_page/advantages/advantage_2.svg"
                    />
                    <Advantage 
                        title="Высокий показатель доступности"
                        text="SLA показатель 99.8% обеспечивается благодаря резервированию ключевых систем"
                        img="/clow/src/assets/images/front_page/advantages/advantage_3.svg"
                    />
                    <Advantage 
                        title="Реферальная программа"
                        text="Получайте доход привлекая клиентов, простая и понятная реферальная программа"
                        img="/clow/src/assets/images/front_page/advantages/advantage_4.svg"
                    />
                    <Advantage 
                        title="Базовая защита от DDoS атак"
                        text="Базовая защита ваших проектов на уровнях L3/L4 уже включена во все тарифы из коробки"
                        img="/clow/src/assets/images/front_page/advantages/advantage_5.svg"
                    />
                </div>
            </div>
        </div>
    </section>
</template>