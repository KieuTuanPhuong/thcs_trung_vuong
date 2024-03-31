<script setup>
import { ref } from "vue";

import Dropdown from "./Dropdown.vue";

const headers = ref([
    { 
        title: 'THÔNG BÁO', 
        menu: [
            {
                "link": "thong-bao-tu-phong-so-gddt",
                "context": "Thông báo từ Phòng, Sở GD&ĐT"
            },
            {
                "link": "thong-bao-tu-nha-truong",
                "context": "Thông báo từ nhà trường"
            },
            {
                "link": "lich-cong-tac",
                "context": "Lịch công tác"
            },
            {
                "link": "thoi-khoa-bieu",
                "context": "Thời khóa biểu"
            }
        ] 
    },
    { 
        title: 'TIN TỨC - HOẠT ĐỘNG', 
        menu: [
            {
                "link": "thong-bao-tu-phong-so-gddt",
                "context": "Tin tức"
            },
            {
                "link": "thong-bao-tu-nha-truong",
                "context": "Hoạt động chuyên môn"
            },
            {
                "link": "lich-cong-tac",
                "context": "Tin tức từ phòng"
            },
            {
                "link": "thoi-khoa-bieu",
                "context": "Hoạt động ngoại khóa"
            },
            {
                "link": "lich-cong-tac",
                "context": "Hoạt động Ngoại khóa"
            },
            {
                "link": "lich-cong-tac",
                "context": "Hoạt động Công đoàn"
            },
            {
                "link": "lich-cong-tac",
                "context": "Hoạt động Chi đoàn"
            },
            {
                "link": "lich-cong-tac",
                "context": "Góc lịch sử"
            },
            {
                "link": "lich-cong-tac",
                "context": "Câu lạc bộ"
            },
            {
                "link": "lich-cong-tac",
                "context": "Hợp tác quốc tế"
            }
        ] 
    },
    { 
        title: 'TÀI NGUYÊN', 
        menu: [
            {
                "link": "thong-bao-tu-phong-so-gddt",
                "context": "Thư viện ảnh"
            },
            {
                "link": "thong-bao-tu-nha-truong",
                "context": "Thư viện video"
            },
            {
                "link": "lich-cong-tac",
                "context": "Kho học liệu"
            }
        ] 
    },
    { 
        title: 'THI VÀ TUYỂN SINH', 
        menu: [
            {
                "link": "thong-bao-tu-phong-so-gddt",
                "context": "Thi học sinh giỏi"
            },
            {
                "link": "thong-bao-tu-nha-truong",
                "context": "Tuyển sinh vào lớp 6"
            },
            {
                "link": "lich-cong-tac",
                "context": "Thi vào lớp 10"
            },
            {
                "link": "thoi-khoa-bieu",
                "context": "Các kỳ thi khác"
            }
        ] 
    }
]);
</script>

<template>
<nav class="navbar navbar-expand-lg p-0 shadow">
    <div class="container navigation-container">
        <img class="brand-img" src="../assets/images/logo_school.png" alt="trung_vuong_logo">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navigation m-0 p-0" id="navbarCollapse">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <Dropdown v-for="item in headers" :key="item.index" :title="item.title" :items="item.menu"/>
                
                <div class="external-link">
                    <a href="https://hanoi.edu.vn/homegdhn2">
                        PHÒNG GD&ĐT
                    </a>
                </div>
            </ul>
        </div>
    </div>
</nav>
</template>


<style scoped>
.navbar {
    background-color: var(--main-bg-blue);
}

.navigation-container {
    max-width: 75rem;
}

.nav-link {
    color: var(--text-light);
}

.brand-img {
    max-height: 5rem;
}

.external-link {
    background: none;
    border: none;
    font-size: 1rem;
    line-height: 6rem;
}

.external-link a {
    text-decoration: none;
    color: var(--text-light);
}

.external-link a:hover {
    color: var(--secondary-blue);
}

</style>