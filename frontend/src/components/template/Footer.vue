<template>
    <div class="footer">
        <span>Copyright <strong>Extract-csv </strong> @2018 <strong>by </strong>primodeckers</span>
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
        background:  linear-gradient(to right, #1e469a, #49a7c1);
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-left: 10px;
        
    }

</style>
