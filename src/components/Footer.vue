<script setup>

</script>

<template>
    <div class="footer">
        <div class="container footer-content">
            <div class="row">
                <div class="col-md-6">
                    <div class="school-contact">
                        <div class="logo" style="width:20%">
                            <a href="index.html">
                                <img class="logo-light" src="../assets/images/logo_school.png" alt="Corporate Logo">
                            </a>
                        </div>
                        <p class="description"> Trường THCS Trưng Vương - Đơn vị anh hùng thời kì đổi mới - Là một trong những ngôi trường có tuổi đời lâu nhất của thành phố Hà Nội.</p>
                        <div class="widget-information">
                            <ul class="information-list">   
                                <li><span>Địa chỉ: </span>26 Hàng Bài, Q.Hoàn Kiếm, TP.Hà Nội</li>
                                <li><span>Hotline: </span><a href="tel:+842438254182">0243.825.4182</a></li>
                                <li><span>Email: </span><a href="mailto:c2trungvuong-hk@hanoiedu.vn" target="_blank">c2trungvuong-hk@hanoiedu.vn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="school-info">
                        <h4 class="widget-title">Thông tin</h4>
                        <div class="inner">
                            <ul class="footer-link link-hover">
                                <li><a href="coming-soon.html">Về nhà trường</a></li>
                                <li><a href="coming-soon.html">Các chương trình học</a></li>
                                <li><a href="coming-soon.html">Tuyển sinh</a></li>
                                <li><a href="coming-soon.html">Thành tích học sinh</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-md-2">
                    <h4 class="widget-title">Lối tắt</h4>
                    <div class="inner">
                        <ul class="footer-link link-hover">
                            <li><a href="coming-soon.html">Tin tức</a></li>
                            <li><a href="coming-soon.html">Hoạt động</a></li>
                            <li><a href="coming-soon.html">Góc lịch sử</a></li>
                            <li><a href="coming-soon.html">Hợp tác quốc tế</a></li>
                            <li><a href="coming-soon.html">Câu lạc bộ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    bottom: 0;
    background: var(--main-bg-blue);
    padding: 6.25rem;
    font-weight: 400;
}

.footer-content {
    max-width: 1185px;
}

.school-contact {
    color: var(--text-grey);
}

.description {
    padding: 1rem 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 1rem 0;
}

a {
    text-decoration: none;
    color: var(--text-grey);
}

a:hover {
    color: var(--text-hover-color);
}

h4 {
    color: var(--text-light);
    margin-bottom: 2rem;
}

.school-info {
    margin-left: 5rem;
}
</style>