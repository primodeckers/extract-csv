<template>
<div class="content">
    <router-view></router-view>
</div>
    
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: rgb(188, 236, 222);
        padding: 20px;
    }

</style>

