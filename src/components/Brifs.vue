<template>
  <section class="brifs">
    <div class="container">
      <div class="brifs_all">
        <div class="brifs_all-left">
          <h2 class="title_4">
            Узнайте сроки разработки сайта, его стоимость и получите прототип первых блоков в
            подарок!
          </h2>
          <p>
            Расскажите о своей задаче прямо сейчас. Позвоним вам в течение 15 минут и обязательно
            поможем вам с решением.
          </p>
        </div>
        <div class="brifs_all-right">
          <button class="brifs_all-right-btn">Заполнить бриф</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
<style>
.brifs_all {
  background: url('@/assets/img/brifFons.png');
  background-position: left;
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 62px;
  padding-top: 223px;
  border-radius: 22px;
  color: #ffffffbf;
  gap: 77px;
  margin-bottom: 12px;
}

.brifs_all-left {
  max-width: 840px;
}
.brifs_all-right-btn {
  background-color: #fff;
  max-width: 212px;
  width: 100%;
  padding: 0px 24px;
  height: 68px;
  font-weight: 700;
  font-size: 20px;
  color: #080808;
  border-radius: 16px;
}
@media (max-width: 1440px) {
  .brifs_all {
    padding: 80px 42px;
    padding-top: 223px;
  }
  .brifs_all-right-btn {
    background-color: #fff;
    max-width: 196px;
    width: 100%;
    padding: 0px 24px;
    height: 56px;
    font-weight: 700;
    font-size: 18px;
    color: #080808;
    border-radius: 16px;
  }
  .brifs_all-left {
    max-width: 660px;
    font-size: 18px;
  }
}
@media (max-width: 1366px) {
}
@media (max-width: 1024px) {
  .brifs_all {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 60px 30px;
    padding-top: 70px;
  }
  .brifs_all-left {
    max-width: 765px;
    font-size: 18px;
  }
}
@media (max-width: 450px) {
  .brifs_all {
    padding: 12px 12px;
    padding-top: 140px;
    background: url('@/assets/img/brifFonsMob.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
