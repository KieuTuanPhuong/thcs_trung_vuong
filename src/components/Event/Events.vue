<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
    <div class="event-container container">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="card border-0 w-100">
                    <div class="img-container">
                        <img src="../../assets/images/event/event-01.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="event-time">
                        <font-awesome-icon :icon="['far', 'clock']" />
                        08:00AM - 10:00PM
                    </div>
                    <div class="card-body">
                        <div class="event-date">
                            <span class="date">01</span>
                            <span class="month">Tháng 3</span>
                        </div>
                        <h5 class="card-title mb-3">
                            Ngày hội Công nghệ thông tin và STEM
                        </h5>
                        <p class="card-text">
                            Phòng GDĐT quận Hoàn Kiếm tổ chức Ngày hội 
                            Công nghệ thông tin và STEM ngành Giáo dục 
                            và Đào tạo quận Hoàn Kiếm năm 2024 tại trường 
                            THCS Trưng Vương.
                        </p>
                        <span class="event-location">
                            <font-awesome-icon :icon="['fas', 'location-dot']" /> 
                            Trường THCS Trưng Vương
                        </span>
                        <div class="event-interaction">
                            <a class="btn read-more-btn" href="coming-soon.html">Tìm hiểu thêm <i class="icon-4"></i></a>
                            <div class="">
                                <span class="heart-icon px-2"><i class="fa-solid fa-heart" style="font-size: 30px;"></i></span>
                                <span class="likes" style="font-size: 30px;">222</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card border-0 w-100">
                    <div class="img-container">
                        <img src="../../assets/images/event/event-02.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="event-time">
                        <font-awesome-icon :icon="['far', 'clock']" />
                        08:00AM - 10:00PM
                    </div>
                    <div class="card-body">
                        <div class="event-date">
                            <span class="date">20</span>
                            <span class="month">Tháng 1</span>
                        </div>
                        <h5 class="card-title mb-3">
                            Ngày hội "Xuân yêu thương - Tết hội nhập"
                        </h5>
                        <p class="card-text">
                            Nằm trong chuỗi hoạt động hướng tới kỉ niệm 94 năm thành lập 
                            Đảng cộng sản Việt Nam, trường THCS Trưng Vương – Quận Hoàn 
                            Kiếm – Hà Nội tổ chức Ngày hội “Xuân yêu thương – Tết hội nhập”.
                        </p>
                        <span class="event-location">
                            <font-awesome-icon :icon="['fas', 'location-dot']" /> 
                            Trường THCS Trưng Vương
                        </span>
                        <div class="event-interaction">
                            <a class="btn read-more-btn" href="coming-soon.html">Tìm hiểu thêm <i class="icon-4"></i></a>
                            <div class="">
                                <span class="heart-icon px-2"><i class="fa-solid fa-heart" style="font-size: 30px;"></i></span>
                                <span class="likes" style="font-size: 30px;">222</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card border-0 w-100">
                    <div class="img-container">
                        <img src="../../assets/images/event/event-03.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="event-time">
                        <font-awesome-icon :icon="['far', 'clock']" />
                        08:00AM - 10:00PM
                    </div>
                    <div class="card-body">
                        <div class="event-date">
                            <span class="date">25</span>
                            <span class="month">Tháng 12</span>
                        </div>
                        <h5 class="card-title mb-3">
                            Hưởng ứng chương trình "Xuân biên giới - Tết hải đảo"
                        </h5>
                        <p class="card-text">
                            Sáng ngày 25/12/2023 tại sân trường THCS Trưng Vương 
                            đã diễn ra buổi sinh hoạt dưới cờ vô cùng ý nghĩa hưởng 
                            ứng chương trình “Xuân biên giới – Tết hải đảo” năm 2024.
                        </p>
                        <span class="event-location">
                            <font-awesome-icon :icon="['fas', 'location-dot']" /> 
                            Trường THCS Trưng Vương
                        </span>
                        <div class="event-interaction">
                            <a class="btn read-more-btn" href="coming-soon.html">Tìm hiểu thêm <i class="icon-4"></i></a>
                            <div class="interaction-content">
                                <span class="heart-icon px-2"><i class="fa-solid fa-heart" style="font-size: 30px;"></i></span>
                                <span class="likes" style="font-size: 30px;">222</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.event-container {
    padding: 6.25rem 0;
    max-width: 1150px;
}

.card {
    border-radius: 5px;
    color: var(--text-light);
    background: var(--secondary-blue);
    height: 550px;
}

.card:hover {
    background: var(--discord-blue);
}

.img-container {
    overflow: hidden;
}

.card-img-top {
    -webkit-filter: brightness(100%);
    object-fit: cover;
    transition: 0.5s;
}

.card:hover .card-img-top {
    -webkit-filter: brightness(50%);
    transform: scale(1.25);
}

.card-body {
    position: absolute;
    bottom: 0;
    background: var(--secondary-blue);
    padding: 2.5rem;
	transition: 0.5s;
}

.card:hover .card-body {
    background: var(--discord-blue);
	transform: translateY(-60px);
}

.event-time {
    background: var(--info-background);
    padding: 5px 10px;
    width: 180px;
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 10px;
    left: 10px;
}

.event-date {
    background: var(--info-background);
    text-align: center;
    border-radius: 50%;
    width: 5.2rem;
    height: 5.2rem;
    display: grid;
    position: absolute;
    right: 20px;
    top: -50px;
}

.event-date .date {
    font-size: 2rem;
    font-weight: 800;
}

.event-date .month {
    top: 50%;
    left: 10px;
    position: absolute;
}

.card-text {
    font-weight: 300;
}

.event-location {
    font-size: 18px;
    font-weight: 300;
}

.event-interaction {
    width: 100%;
    position: absolute;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
    display: flex;
    justify-content: space-between;
    padding: 0 2.5rem;
    left: 0;
    margin-top: 1rem;
}

.card:hover .event-interaction {
    opacity: 1;
    transform: translateY(0);
}

.read-more-btn {
    background: var(--secondary-blue);
    padding: 0.6rem 1rem;
    color: var(--text-light);
    transition: 0.5s;
}

.read-more-btn:hover {
    background: var(--info-background);
    box-shadow: inset 6.5em 0 0 0 var(--info-background);
}

.read-more-btn:focus {
    box-shadow: inset 6.5em 0 0 0 var(--info-background);
}
</style>