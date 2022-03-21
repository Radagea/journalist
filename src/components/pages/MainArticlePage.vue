<template>
    <header>
        <div class="wrapper">
            <div class="journal">
                <img src="/images/nophoto.jpg" alt="Journal main Picture">
                <h1>Acta Cardiologica</h1>
            </div>
        </div>
    </header>
    <section>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        width: 100%;
        height: 10rem;
        background-color: #783741;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .wrapper {
        width: 90%;
        max-width: 1400px;
        height: 100%;
        margin: 0 auto;
    }
    .journal {
        height: 100%;
    }
    .journal img {
        float: left;
        height: 100%;
        margin-right: 10px;
    }
    .journal h1 {
        color: white;
        font-size: 1.5em;
    }
</style>