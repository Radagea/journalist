<template>
    <div class="lds-dual-ring"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .lds-dual-ring {
        display: block;
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #115349;
        border-color: #115349 transparent #115349 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>