<script setup>
const props = defineProps(['title', 'items']);
</script>

<template>
    <div class="dropdown">
        <button class="dropdown-button">
            {{ title }}
            <font-awesome-icon :icon="['fas', 'chevron-down']" class="ms-2"/>
        </button>
        <div class="dropdown-content shadow">
            <ul class="dropdown-list">
                <li v-for="item in items" :key="item.index">
                    <a href="">{{ item.context }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>


<style scoped>
.dropdown {
    padding: 0 1rem;
    min-height: 6rem;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-button {
    background: none;
    border: none;
    color: var(--text-light);
    font-size: 1rem;
    line-height: 6rem;
}

.dropdown-button:hover {
    color: var(--text-hover-color);
}

.dropdown-content {
    display: none;
    position: absolute;
    background: var(--text-light);
    padding: 0.5rem 1.5rem 1rem 1.5rem;
    min-width: 18rem;
}

.dropdown-content:hover {
    display: block;
}

.dropdown-list {
    list-style-type: none;
    padding: 0;
}

.dropdown-list li {
    margin: 1rem 0;
}

.dropdown-list a {
    color: var(--text-dark);
    text-decoration: none;
}

.dropdown-list a:hover {
    color: var(--text-hover-color);
}

</style>