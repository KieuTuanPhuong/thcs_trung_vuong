<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const modules = [Parallax, Pagination, Navigation]
</script>

<template>
    <swiper
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }"
        :speed="600"
        :parallax="true"
        :pagination="{
        clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="welcomeSwiper"
    >
        <div class="parallax-bg" data-swiper-parallax="-23%"></div>

        <swiper-slide>
            <div class="abc">
                <div class="title" data-swiper-parallax="-300">Slide 1</div>
                <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
                <div class="text" data-swiper-parallax="-100">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
                    velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                    libero. Aenean feugiat non eros quis feugiat.
                    </p>
                </div> 
            </div>
        </swiper-slide>
        
        <swiper-slide>
        <div class="title" data-swiper-parallax="-300">Slide 2</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div class="text" data-swiper-parallax="-100">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
            </p>
        </div> </swiper-slide
        ><swiper-slide>
        <div class="title" data-swiper-parallax="-300">Slide 3</div>
        <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
        <div class="text" data-swiper-parallax="-100">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
            </p>
        </div>
        </swiper-slide>
    </swiper>
</template>

<style scoped>
/* .welcomeSwiper {
    background: radial-gradient(110% 14% at bottom, transparent 50%, lightblue 51%);
    height: 97vh;
}
 */
.welcomeSwiper {
  margin: 0 auto;
  height: 97vh;
  background-color: lightblue;
  position: relative;
  overflow: hidden;
}

.welcomeSwiper:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: -5%;
  left: -5%;
  height: 120px;
  background: #fff;
  -webkit-clip-path: ellipse(50% 60% at 50% 100%);
  clip-path: ellipse(50% 60% at 50% 100%);
}


.abc {
    background-image: url(../assets/images/about/about-01.png);
    height: 300px;
}
</style>