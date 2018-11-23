<template>
    <aside class="menu"></aside>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #a5d7f0, #a6c0ac);
        
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

</style>
