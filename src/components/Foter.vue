<template>
  <footer сlass="footer">
    <div class="container">
      <div class="footer_all">
        <div class="footer_left">
          <p class="footer-text">© Cidgital. All Rights Reservedl</p>
          <LinkNav class="befAll-two footer-link" :item="footerLinks[0]" />
        </div>
        <div class="footer_right">
          <a href="https://t.me/+_ksoh5c4HopmYTZi" target="_blank" class="befAll-two footer-link befAll">
              <div class="nav_right-link-one">
                <p class="nav_right-link-text_rel">Telegram</p>
                <p class="nav_right-link-text_abs">Telegram</p>
              </div>
          </a>
          <a href="https://vk.com/cidgital" target="_blank" class="befAll-two footer-link befAll">
              <div class="nav_right-link-one">
                <p class="nav_right-link-text_rel">ВКонтакте</p>
                <p class="nav_right-link-text_abs">ВКонтакте</p>
              </div>
          </a> 
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import LinkNav from './LinkNav.vue'
const footerLinks = [
  {
    title: 'Документы',
    link: '/documents',
  },
  {
    title: 'Telegram',
    link: '/',
  },
  {
    title: 'ВКонтакте',
    link: '/',
  },
]
</script>
<style>
footer {
  margin-top: 105px;
}
.footer_all {
  border-top: 1px solid #0000001a;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
}
.footer_left {
  display: flex;
  gap: 66px;
}
.footer-text {
  color: #1e1e1e;
  font-weight: 600;
  font-size: 20px;
}
.footer-link .nav_right-link-one {
  color: #6f737c;
  font-weight: 500;
  font-size: 20px;
}
.footer-link .nav_right-link-one {
  color: #6f737c;
  font-weight: 500;
  font-size: 20px;
}
.footer-link .nav_right-link-one:hover .nav_right-link-text_rel {
  transform: translateY(-28px);
}
.footer-link .nav_right-link-one:hover .nav_right-link-text_abs {
  transform: translateY(-27px);
}
.footer_right {
  display: flex;
  gap: 66px;
}
@media (max-width: 1440px) {
  footer {
    margin-top: 80px;
  }
  .footer-text {
    color: #1e1e1e;
    font-weight: 600;
    font-size: 16px;
  }
  .footer-link .nav_right-link-one {
    color: #6f737c;
    font-weight: 500;
    font-size: 16px;
  }
  .footer-link .nav_right-link-one:hover .nav_right-link-text_rel {
    transform: translateY(-22px);
  }
  .footer-link .nav_right-link-one:hover .nav_right-link-text_abs {
    transform: translateY(-21px);
  }
}
@media (max-width: 1366px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 450px) {
  .footer_all {
    flex-direction: column;
    gap: 32px;
    padding-top: 40px;
    padding-bottom: 26px;
  }
  .footer-text {
    font-size: 15px;
  }
  footer {
    margin-top: 70px;
  }
  .footer_left {
    gap: 50px;
  }
}
</style>
