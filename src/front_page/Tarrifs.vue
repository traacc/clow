<script setup>
import Tarrifs from '../front_page/Tarrifs_item.vue'
</script>
<template>
    <section class="tariffs">
        <div class="container">
            <div class="inner">
            <div class="tariffs__header">
                <h2 class="tariffs__section-title section-title">Популярные тарифы </h2>
                <div class="tariffs__price-switch">
                    <div class="tariffs__price-item active">За месяц</div>
                    <div class="tariffs__price-item">За год</div>
                </div>
            </div>
            <div class="tarrifs__wrapper">
                <div class="tarrifs__service-switcher">
                    <div class="tarrifs__service-switcher-item active">
                        <div class="title">Виртуальный хостинг</div>
                        <div class="body">
                            <div class="desc">В современном мире, где стремительно развиваются,</div>
                            <a href="#" class="link">подробнее об услуге</a>
                        </div>

                    </div>
                    <div class="tarrifs__service-switcher-item">
                        <div class="title">Виртуальный хостинг</div>
                        <div class="body">
                        <div class="desc">В современном мире, гдестремительно развиваются,</div>
                            <a href="#" class="link">подробнее об услуге</a>
                        </div>
                    </div>
                    <div class="tarrifs__service-switcher-item">
                        <div class="title">Виртуальный хостинг</div>
                        <div class="body">
                            <div class="desc">В современном мире, гдестремительно развиваются,</div>
                            <a href="#" class="link">подробнее об услуге</a>
                        </div>
                    </div>
                </div>
                <div class="tariffs__list">
                    <div class="tariffs__list--hosting">
                    <Tarrifs 
                        title="Load 100"
                        price="2000"
                        cpu="2 * 2.8 GHz"
                        ram="4 ГБ"
                        ssd="40 ГБ"
                        network="200 мбит"
                    />
                    <Tarrifs 
                        title="Load 100"
                        price="2000"
                        cpu="2 * 2.8 GHz"
                        ram="4 ГБ"
                        ssd="40 ГБ"
                        network="200 мбит"
                        isPopular=true
                    />
                    <Tarrifs 
                        title="Load 100"
                        price="2000"
                        cpu="2 * 2.8 GHz"
                        ram="4 ГБ"
                        ssd="40 ГБ"
                        network="200 мбит"
                    />
                    </div>

                </div>
            </div>

            </div>
        </div>

    </section>
</template>