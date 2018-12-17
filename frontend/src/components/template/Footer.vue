<template>
    <div class="footer">
        <span>Copyright <strong><i>Parse CSV</i></strong> @2018 <strong>by </strong>primodeckers</span>
    </div>
</template>

<script>
export default {
    name: "Footer"

}
</script>

<style>
    .footer {
        grid-area: footer;
        background:  linear-gradient(to right, #98FB98, #9ACD32);
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-left: 10px;
        
    }

</style>
