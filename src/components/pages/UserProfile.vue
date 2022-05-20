<template>
    <main>
        <section>
            <nav>
                <ul>
                    <li>
                        <router-link to="/myprofile">Personal data</router-link>
                    </li>
                    <li>
                        <router-link to="/myprofile/modpassword">Password modification</router-link>
                    </li>
                    <li>
                        <router-link to="/myprofile/SavedArticles">Saved articles</router-link>
                    </li>
                    <li>
                        <router-link to="/myprofile/FavoriteArticles">Favorite articles</router-link>
                    </li>
                    <li>
                        <router-link to="/myprofile/PublishedManuscripts" >Published manuscripts</router-link>
                    </li>
                </ul>
            </nav>
            <div class="main">
                <router-view></router-view>
            </div>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
main {
    width: 100%;
    padding-top: 30px;
}
section {
    width: 90%;
    max-width: 1400px;
    height: 90vh;
    margin : 0 auto;
    background-color: #f9f9f9;
}
nav {
    height: 100%;
    width: 20%;
    background-color: #D8E8E8;
    float: left;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
div.main {
    float: left;
    height: 100%;
    width: calc(80% - 10px);
    margin-left: 10px;
    background-color: #f9f9f9;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
    overflow-y: scroll;
}

ul {
    width: 100%;
    text-align: center;
    list-style: none;
}
ul li {
    transition: 0.2s;
}
ul li:first-child {
    border-top-left-radius: 10px;
}
ul li a {
    display: block;
    text-decoration: none;
    color: #115349;
    font-size: 1.1em;
    font-weight: 700;
    width: 100%;
    padding: 10px;
    transition: 0.2s;
}

ul li:hover {
    background: #115349;
}
ul li:first-child:hover {
    border-top-left-radius: 10px;
}
ul li:hover a {
    color: white;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f9f9f9; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #5C948C; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #115349; 
}
</style>