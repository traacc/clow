<template>
    <section class="feedback">
        <div class="container">
            <div class="inner">
                <div class="feedback__left">
                    <h2 class="feedback__section-title section-title">Написать нам</h2>
                    <p class="feedback__subtitle">Хотите узнать как мы можем помочь вашей команде? Задайте любой вопрос через данную форму или в удобном месенджере</p>
                </div>
                <div class="feedback__form">
                    <h3>Оставьте заявку</h3>
                    <form action="#" method="post" class="feedback__form-content">
                        <div class="feedback__form-row">
                            <div class="feedback__form-group">
                                <label for="name" class="feedback__form-label">Имя</label>
                                <input type="text" id="name" name="name" class="feedback__form-input" placeholder="Представьтесь пожалуйста" required>
                            </div>
                            <div class="feedback__form-group">
                                <label for="email" class="feedback__form-label">Телефон</label>
                                <input type="email" id="email" name="email" class="feedback__form-input" placeholder="+7 (000) 000-00-00" required>
                            </div>
                        </div>

                        <div class="feedback__form-group">
                            <label for="message" class="feedback__form-label">Ваш вопрос</label>
                            <textarea id="message" name="message" class="feedback__form-textarea" placeholder="Сформулируйте в свободной форме ваше обращение" required></textarea>
                        </div>
                        <div class="feedback__form-privacy-note">
                            <img src="../assets/images/feedback/privacy.svg" alt="">
                            <p>Отправляя данную форму, вы соглашаетесь на обработку персональных данных в соответствии с политикой конфиденциальности</p>
                        </div>
                        <button type="submit" class="btn feedback__form-btn">Отправить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>