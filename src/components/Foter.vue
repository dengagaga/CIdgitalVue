<template>
    <footer сlass="footer">
        <div class="container">
            <div class="footer_all">
                <div class="footer_left">
                    <p class="footer-text">© Cidgita. All Rights Reservedl</p>
                    <LinkNav class="befAll-two footer-link" title="Документы" />
                </div>
                <div class="footer_right">
                    <LinkNav class="befAll-two footer-link" title="Telegram" />
                    <LinkNav class="befAll-two footer-link" title="ВКонтакте" />
                </div>
            </div>
        </div>
    </footer>

</template>
<script setup>
import LinkNav from './LinkNav.vue'
</script>
<style>
footer {
    margin-top: 105px;
}
.footer_all {
    border-top: 1px solid #0000001A;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
}
.footer_left {
    display: flex;
    gap: 66px;

}
.footer-text {
    color: #1E1E1E;
    font-weight: 600;
    font-size: 20px;
}
.footer-link .nav_right-link-one{
     color: #6F737C;
    font-weight: 500;
    font-size: 20px;
}
.footer-link .nav_right-link-one{
     color: #6F737C;
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
@media(max-width: 1440px) {
    footer {
        margin-top: 80px;
    }
.footer-text {
    color: #1E1E1E;
    font-weight: 600;
    font-size: 16px;
}
.footer-link .nav_right-link-one{
     color: #6F737C;
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
@media(max-width: 1366px) {

}
@media(max-width: 1024px) {
 
}
@media(max-width:450px) {
    .footer_all {
    flex-direction: column;
    gap: 32px;
    padding-top: 40px;
    padding-bottom: 26px;
}
footer {
    margin-top: 70px;
}
.footer_left {
    gap: 50px;
}
}
</style>
