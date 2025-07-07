<script setup>
import Header from './components/Header.vue'
import Hero from './front_page/Hero.vue'
import Services from './front_page/Services.vue'
import Advantages from './front_page/Advantages.vue'
import Banner_Move from './front_page/Banner_Move.vue'
import Tarrifs from './front_page/Tarrifs.vue'
import Reviews from './front_page/Reviews.vue'
import Faq from './components/Faq.vue'
import Feedback from './components/Feedback.vue'
</script>

<template>
  <Header />
  <main class="main">
    <Hero />
    <Services />
    <Advantages />
    <Banner_Move />
    <Tarrifs />
    <section class="solutions">
      <div class="container">
        <div class="inner">
          <h2 class="solutions__title section-title">Современные облачные решения для <span>вашего бизнеса от CloWoow</span></h2>
          <div class="solutions__text">
            <p>Любой современный бизнес для скоростной работы, конкурентноспособности и масштабируемости живет в облаке это не просто тренд, а необходимость. Clowoow предлагает не просто инфраструктуру, а современную экосистему спроектированную для решения реальных бизнес задач: от быстрого развертывания приложения до обеспечения бесперебойной работы проект под любой нагрузкой, мы позаботились о том, что вы забыли об ограничениях. Для мгновенного старта проекта мы предлагаем наиболее востребованные услуги аренды виртуальных VDS серверов на базе виртуализации KVM, виртуальный хостинг,  удаленный рабочий стол VDI, сервер 1С в облаке. Наша облачная инфраструктура обеспечивает исключительно высокий показатель доступности uptime 99.9%, гарантируя, что ваш сервис или сайт будут доступны клиентами круглосуточно, базовая защита от DDoS атак уже включена во все тарифы.</p>
          </div>
        </div>
      </div>
    </section>
    <Reviews />
    <Faq />
    <Feedback />
  </main>

</template>
<style scoped>
</style>
