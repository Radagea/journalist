<template>
  <nav>
        <div class="wrap clear">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Editors</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .clear:before,
    .clear:after {
        content:" ";
        display: table
    }
    .clear:after { clear: both }
    nav {
        width: 100%;
        background-color: #a6737a;
    }
    nav .wrap {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }
    nav .wrap ul {
        display: inline-block;
        vertical-align: bottom;
    }
    nav .wrap ul li {
        float: left;
        list-style: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 1.2em;
        font-weight: bold;
        transition: 0.2s
    }
    nav .wrap ul li:hover {
        background-color: #783741;
    }
    nav .wrap ul li:hover a {
        color: white;
    }
    nav .wrap ul li a {
        text-decoration: none;
        color: white;
    }
</style>