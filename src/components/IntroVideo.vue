<script setup>

</script>

<template>
<div class="video-section">
    <div class="video-container">
        <video id="autoplayVideo" controls autoplay muted>
            <source src="" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</template>

<style scoped>
.video-section {
    background-image: url(../assets/images/background/ds1.jpg);
    padding: 12.5rem 0 6.25rem 0;
}

.video-container {
    padding: 2rem 0;
}

.video-container video {
    width: 100%;
}
</style>