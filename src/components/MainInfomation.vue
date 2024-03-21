<script setup>
import { ref } from 'vue';

let historyTab = ref(false);
let philosophyTab = ref(false);
let programTab = ref(false);
let structureTab = ref(false);

const showHistory = () => {
    historyTab.value = !historyTab.value;
    philosophyTab.value = false;
    programTab.value = false;
    structureTab.value = false;
}

const showPhilosophy = () => {
    historyTab.value = false;
    philosophyTab.value = !philosophyTab.value;
    programTab.value = false;
    structureTab.value = false;
}

const showProgram = () => {
    historyTab.value = false;
    philosophyTab.value = false;
    programTab.value = !programTab.value;
    structureTab.value = false;
}

const showStructure = () => {
    historyTab.value = false;
    philosophyTab.value = false;
    programTab.value = false;
    structureTab.value = !structureTab.value;
}
</script>

<template>
    <div class="main-info">
        <div class="title-section">
            <span>THCS TRƯNG VƯƠNG - HOÀN KIẾM</span>
            <h2>VỀ THCS TRƯNG VƯƠNG - HOÀN KIẾM</h2>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <div class="history-tab my-2">
                    <a id="historyBtn" @click="showHistory()"
                        class="btn btn-primary" data-bs-toggle="collapse"
                        role="button" aria-expanded="false" aria-controls="history-collapse"
                    >
                        <img class="info-icon" src="../assets/icons/online-degree.png" alt="">
                        <h5>Lịch sử - Truyền thống</h5>
                    </a>
                </div>
            </div>
            
            <div class="card-mobile">
                <Transition name="slide-fade">
                    <div v-show="historyTab">
                        <div class="card card-body p-0 my-3 border-0">
                            <img src="../assets/images/about/about-01.png" alt="">
                        </div>
                    </div>
                </Transition>
            </div>

            <div class="col-lg-3">
                <div class="philosophy-tab my-2">
                    <a id="philosophyBtn" @click="showPhilosophy()"
                        class="btn btn-primary" data-bs-toggle="collapse"
                        role="button" aria-expanded="false" aria-controls="philosopy-collapse"
                    >
                        <img class="info-icon" src="../assets/icons/non-degree-programs.png" alt="">
                        <h5>Triết lý giáo dục</h5>
                    </a>
                </div>
            </div>
            <div class="card-mobile">
                <Transition name="slide-fade">
                    <div v-show="philosophyTab">
                        <div class="card card-body p-0 my-3 border-0">
                            <img src="../assets/images/about/about-02.png" alt="">
                        </div>
                    </div>
                </Transition>
            </div>

            <div class="col-lg-3">
                <div class="program-tab my-2">
                    <a id="programBtn" @click="showProgram()"
                        class="btn btn-primary" data-bs-toggle="collapse"
                        role="button" aria-expanded="false" aria-controls="program-collapse"
                    >
                        <img class="info-icon" src="../assets/icons/off-campus-programs.png" alt="">
                        <h5>Các chương trình học</h5>
                    </a>
                </div>
            </div>
            <div class="card-mobile">
                <Transition name="slide-fade">
                    <div v-show="programTab">
                        <div class="card card-body p-0 my-3 border-0">
                            <img src="../assets/images/about/about-03.png" alt="">
                        </div>
                    </div>
                </Transition>
            </div>

            <div class="col-lg-3">
                <div class="structure-tab my-2">
                    <a id="structureBtn" @click="showStructure()"
                        class="btn btn-primary" data-bs-toggle="collapse"
                        role="button" aria-expanded="false" aria-controls="structure-collapse"
                    >
                        <img class="info-icon" src="../assets/icons/hybrid-distance-programs.png" alt="">
                        <h5>Cơ cấu tổ chức</h5>
                    </a>
                </div>
            </div>
            <div class="card-mobile">
                <Transition name="slide-fade">
                    <div v-show="structureTab">
                        <div class="card card-body p-0 my-3 border-0">
                            <img src="../assets/images/about/about-04.jpg" alt="">
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <div class="card-large">
            <Transition name="slide-fade">
                <div v-show="historyTab">
                    <div class="card card-body p-0 my-3 border-0">
                        <img src="../assets/images/about/about-01.png" alt="">
                    </div>
                </div>
            </Transition>
        </div>
        <div class="card-large">
            <Transition name="slide-fade">
                <div v-show="philosophyTab">
                    <div class="card card-body p-0 my-3 border-0">
                        <img src="../assets/images/about/about-02.png" alt="">
                    </div>
                </div>
            </Transition>
        </div>
        <div class="card-large">
            <Transition name="slide-fade">
                <div v-show="programTab">
                    <div class="card card-body p-0 my-3 border-0">
                        <img src="../assets/images/about/about-03.png" alt="">
                    </div>
                </div>
            </Transition>
        </div>
        <div class="card-large">
            <Transition name="slide-fade">
                <div v-show="structureTab">
                    <div class="card card-body p-0 my-3 border-0">
                        <img src="../assets/images/about/about-04.jpg" alt="">
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.main-info {
    padding: 6.25rem 3rem;
    background: var(--text-light);
}

.collapse .show {
    transition: 4s;
    -webkit-animation: slide 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 0.5s forwards;
    animation-delay: 2s;
}

.title-section {
    text-align: center;
    margin-bottom: 3rem;
}

.title-section > span {
    color: #3856a7;
}

.title-section > h2 {
    font-weight: 800;
    margin: 1rem 0;
}

.btn {
    background: none;
    border: none;
    padding: 3rem 3rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 20rem;
}

.info-icon {
    max-height: 5rem;
    opacity: 1;
}

h5 {
    margin: 1rem 0;
    font-weight: 600;
    color: var(--text-dark);
}

.history-tab {
    background: #e1f4f8;
    border-radius: 0.5rem;
    max-height: 16rem;
}

.philosophy-tab {
    background: #f0ecf4;
    border-radius: 0.5rem;
    max-height: 16rem;
}

.program-tab {
    background: #e4eefd;
    border-radius: 0.5rem;
    max-height: 16rem;
}

.structure-tab {
    background: #f1f1ef;
    border-radius: 0.5rem;
    max-height: 16rem;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.card-mobile {
    display: none;
}

@media (max-width: 768px) {
    .card-mobile {
        display: block;
    }

    .card-large {
        display: none;
    }
}
</style>
