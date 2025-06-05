<template>
    <footer>
        <div class="container">
            <div class="footer_all">
                <div class="footer_left">
                    <p class="footer-text">© Cidgita. All Rights Reservedl</p>
                    <router-link to="/" class="footer-link">Документы</router-link>
                </div>
                <div class="footer_right">
                    <router-link to="/" class="footer-link">Telegram</router-link>
                    <router-link to="/" class="footer-link">ВКонтакте</router-link>
                </div>
            </div>
        </div>
    </footer>

</template>
<script setup></script>
<style>
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
.footer-link {
     color: #6F737C;
    font-weight: 500;
    font-size: 20px;
}
.footer_right {
     display: flex;
    gap: 66px;
}
@media(max-width: 1440px) {
.footer-text {
    color: #1E1E1E;
    font-weight: 600;
    font-size: 16px;
}
.footer-link {
     color: #6F737C;
    font-weight: 500;
    font-size: 16px;
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
.footer_left {
    gap: 50px;
}
}
</style>
