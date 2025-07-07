<script setup>
import Service from '../front_page/Services_item.vue'
</script>
<template>
    <section class="services">
        <div class="container">
            <div class="inner">
                <h2 class="services__section-title section-title">Наши <span>услуги</span></h2>
                <div class="services__list">
                    <Service 
                        title="Аренда KVM VDS"
                        price="494"
                        text="На базе современной линейки процессоров Intel Xeon Gold и AMD EPYC на высокоскоростных NVME накопителях c KVM виртуализацией"
                        textBtn="Выбрать VDS"
                        bg_img="/clow/src/assets/images/front_page/services/service_1.svg"
                        class="services__item--wide"
                    />
                    <Service 
                        title="Виртуальный хостинг"
                        price="100"
                        text="Широкая линейка тарифов под любые сайты от страницы до крупного интернет магазина, техническая поддержка 24/7"
                        textBtn="Перейти к услуге"
                        img="/clow/src/assets/images/front_page/services/service_2.svg"
                    />
                    <Service 
                        title="Удаленное рабочее место"
                        price="100"
                        text="Производительные виртуальные десктопы на базе производительных решений в безопасном облаке"
                        textBtn="Перейти к услуге"
                        img="/clow/src/assets/images/front_page/services/service_3.svg"
                    />
                    <Service 
                        title="Сервер 1С в облаке"
                        price="100"
                        text="Привычная и отказоустойчивая среда в облаке из любой точки мира с любого устройства"
                        textBtn="Перейти к услуге"
                        img="/clow/src/assets/images/front_page/services/service_4.svg"
                    />
                </div>
            </div>
        </div>

    </section>
</template>