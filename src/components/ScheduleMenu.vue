<script setup>

</script>

<template>
<section class="schedule-section">
    <div class="row">
        <div class="col-lg-6">
            <div class="text-center my-5">
                <h3 class="title">THỰC ĐƠN HÀNG TUẦN</h3>
            </div>

            <div id="menuCarousel" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#menuCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#menuCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#menuCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/images/about/about-32.jpg" class="d-block w-100 slide-image" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/about/thucdon2.jpg" class="d-block w-100 slide-image" alt="...">
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center">
                <button class="btn carousel-control shadow" type="button" data-bs-target="#menuCarousel" data-bs-slide="prev">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="btn carousel-control shadow" type="button" data-bs-target="#menuCarousel" data-bs-slide="next">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="text-center my-5">
                <h3 class="title">LỊCH CÔNG TÁC HÀNG TUẦN</h3>
            </div>

            <div id="scheduleCarousel" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#scheduleCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#scheduleCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#scheduleCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/images/about/about-33.jpg" class="d-block w-100 slide-image" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/about/thucdon2.jpg" class="d-block w-100 slide-image" alt="...">
                    </div>
                </div>
            </div>
            
            <div class="d-flex justify-content-center">
                <button class="btn carousel-control shadow" type="button" data-bs-target="#scheduleCarousel" data-bs-slide="prev">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="btn carousel-control shadow" type="button" data-bs-target="#scheduleCarousel" data-bs-slide="next">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>

</section>

</template>

<style scoped>
.schedule-section {
    padding: 5rem 2rem;
    background: var(--text-light);
}

.carousel-item {
    max-height: 500px;
}

.slide-image {
    height: 500px;
    object-fit: cover;
}

.carousel-control {
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
    margin: 1rem 5rem;
    color: var(--secondary-blue);
    background: var(--text-light);
    border-radius: 50%;
}
</style>