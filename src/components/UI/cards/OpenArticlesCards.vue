<template>
    <div class="container">
        <div @click="$emit('open',randoms.id)" class="card" v-for="randoms in RandomOpenAccess" :key="randoms.id">
            <h1>{{ randoms.title }}</h1>
            <div class="cardline"></div>
            <div class="cardimage">
                <img :src="randoms.img">
            </div>
            <div class="cardlinedown"></div>
            <div class="carddescription">
                <p>{{ randoms.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['open'],
    data() {
        return {
            RandomOpenAccess: [
                {
                    id: '1',
                    title: 'Random Open Access',
                    description: 'Something important description',
                    img: 'images/nophoto.jpg'
                },
                {
                    id: '2',
                    title: 'Random Open Access 2',
                    description: 'Something important description 2',
                    img: 'images/nophoto.jpg'
                },
                {
                    id: '3',
                    title: 'In hac habitasse platea dictumst',
                    description: 'Aenean ligula nunc, interdum et turpis at, viverra egestas est. Suspendisse vulputate pharetra ipsum.',
                    img: 'images/nophoto.jpg'
                },
                {
                    id: '4',
                    title: 'Nulla eu vehicula ex',
                    description: 'Vivamus faucibus commodo mi, ac tincidunt purus varius non.',
                    img: 'images/nophoto.jpg'
                },
                {
                    id: '5',
                    title: 'Lorem ipsum dolor sit amet.',
                    description: 'Proin sed porta libero, nec maximus libero.',
                    img: 'images/nophoto.jpg'
                },
            ]
        };
    }
}
</script>

<style scoped>
    h1 {
        font-size: 14px;
    }
    div.container {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-column-gap: 55px;
    }
    div.card {
        width: 100%;
        margin-top: 15px;
        text-align: center;
        background: white;
        padding-bottom: 10px;
        padding-top: 10px;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        cursor: pointer;
        transition: 2s;
    }
    div.card:hover {
        background: #d3bcbf;
        box-shadow: 0 4px 10px;
    }
    div.cardline {
        width: 100%;
        margin-top: 10px;
        height: 5px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background: #783741
    }
    div.cardlinedown {
        width: 100%;
        margin-top: 10px;
        height: 5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background: #783741
    }
    div.carddescription {
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }
    div.cardimage {
        max-height: 20rem;
        margin: 0 auto;
    }
    div.cardimage img {
        width: 90%;
        max-height: 20rem;
    }
    @media screen and (max-width: 1200px){
        div.container {
            grid-template-columns: auto auto auto;
        }

    }
    @media screen and (max-width: 900px){
        div.container {
            grid-template-columns: auto auto;
        }

    }
    @media screen and (max-width: 600px){
        div.container {
            grid-template-columns: auto;
        }
        div.cardimage img {
            width: 60%;
        }

    }
    @media screen and (max-width: 380px) {
        div.cardimage img {
            width: 100%;
        }
    }
</style>