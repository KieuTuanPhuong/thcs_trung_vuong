<script>
</script>

<template>
    <div class="summarize-bg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="summarize-gallery">
                        <img class="summarize-img shadow-lg" src="../assets/images/about/about-24.jpg" alt="">
                        <div class="summarize-video">
                            <div class="summarize-cirle"></div>
                            <img class="shadow-lg" src="../assets/images/about/about-25.jpg" alt="">
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                    <div class="summarize-content">
                        <h2>Tổng kết tháng 12</h2>
                        <span><font-awesome-icon :icon="['fas', 'water']" /></span>
                        <p>
                            Trong không khí trang trọng của ngày lễ kỉ niệm Ngày thành lập 
                            quân đội nhân dân Việt Nam (22/12/1944 – 22/12/2023), mỗi người 
                            chúng ta dường như đều hướng trái tim đến Tổ quốc, đất nước thân yêu. 
                            Vậy nên trong chuyên mục “Mỗi tuần một câu chuyện đẹp, một cuốn sách hay, 
                            một tấm gương sáng” ngày hôm nay với chủ đề “Tổ quốc trong từng trang sách nhỏ”, 
                            ta sẽ cùng nhau tìm hiểu một cuốn sách được coi là cuốn hồi kí ghi lại rõ nét 
                            cuộc sống nơi hải đảo: “Đảo chìm” của Trần Đăng Khoa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.summarize-bg {
    background-image: url(../assets/images/background/ds6.png);
    color: var(--text-light);
    padding: 5rem 0;
}

h2 {
    font-weight: 700;
}

span {
    font-size: 3rem;
    color: #3856a7;
}

.summarize-gallery {
    padding: 5.6rem 0 3.75rem;
}

.summarize-img {
    border-radius: 50%;
}

.summarize-cirle {
    position: absolute;
    width: 215px;
    height: 215px;
    border-radius: 50%;
    background: var(--text-light);
    top: 68.5%;
    left: 31.5%;
}

.summarize-video > img {
    position: absolute;
    border-radius: 50%;
    top: 70%;
    left: 32%;
}

@media only screen and (max-width: 1440px) {
    .summarize-cirle {
        top: 95%;
        left: 21.5%;
    }

    .summarize-video > img {
        top: 97%;
        left: 22%;
    }
}

@media only screen and (max-width: 768px) {
    .summarize-gallery {
        display: flex;
        justify-content: center;
    }

    .summarize-cirle {
        top: 99%;
        left: 51.5%;
    }

    .summarize-video > img {
        top: 101%;
        left: 52%;
    }
}

@media only screen and (max-width: 425px) {
    .summarize-gallery {
        padding: 1.6rem 0 8rem;
    }

    .summarize-cirle {
        width: 180px;
        height: 180px;
        top: 90%;
        left: 37.5%;
    }

    .summarize-video > img {
        width: 180px;
        height: 180px;
        top: 91.5%;
        left: 38%;
    }

    .summarize-content {
        padding: 0 1rem;
    }
}

@media only screen and (max-width: 320px) {
    .summarize-img {
        max-width: 80%;
    }

    .summarize-cirle {
        width: 150px;
        height: 150px;
        top: 80%;
        left: 40.5%;
    }

    .summarize-video > img {
        width: 150px;
        height: 150px;
        top: 81.5%;
        left: 41%;
    }
}
</style>
