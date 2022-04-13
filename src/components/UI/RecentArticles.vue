<template>
    <section>
        <div class="arrow-down"></div>
        <h1>Recent Articles:</h1>
        <transition name="carousels" mode="out-in">
            <carousel-card v-if="actualindex == 0" :articleID="carousels[0].id">
                <template v-slot:header>
                    <h2>{{ carousels[0].header }}</h2>
                </template>
                <template v-slot:paragraph>
                    {{ carousels[0].description }}
                </template>
            </carousel-card>
            <carousel-card v-else-if="actualindex == 1" :articleID="carousels[1].id">
                <template v-slot:header>
                    <h2>{{ carousels[1].header }}</h2>
                </template>
                <template v-slot:paragraph>
                    {{ carousels[1].description }}
                </template>
            </carousel-card>
            <carousel-card v-else-if="actualindex == 2" :articleID="carousels[2].id">
                <template v-slot:header>
                    <h2>{{ carousels[2].header }}</h2>
                </template>
                <template v-slot:paragraph>
                    {{ carousels[2].description }}
                </template>
            </carousel-card>
        </transition>
    </section>
</template>

<script>
import CarouselCard from './cards/CarouselCard.vue';
export default {
    created() {
        this.interval = setInterval(() => this.testMeth(), 6500);
    },
    components: {
        CarouselCard,
    },
    methods: {
        testMeth() {
            if (this.cycle === 3) {
                this.cycle = 0;
            }
            this.actualindex = this.indexs[this.cycle];
            this.cycle++;
        }
    },
    data() {
        return { 
            indexs: [0,1,2],
            actualindex: 0,
            cycle: 1,
            carousels: [
                {
                    id: 0,
                    header: 'Recent Article',
                    description: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        elementum, ante blandit eleifend maximus, nunc dui hendrerit quam,
                        id tempus lectus risus id massa. Praesent ac imperdiet tortor.
                        Nullam consectetur augue ut massa molestie euismod. Suspendisse
                        nec erat eu quam condimentum suscipit. In porta, dui nec faucibus
                        luctus, eros ex tincidunt risus, vel elementum ligula nisi vel
                        massa. Nam vitae porta tellus. Nam consequat, felis eget rutrum
                        consectetur, tellus neque pulvinar justo, sed interdum est massa
                        sollicitudin nunc. Sed feugiat vestibulum nisl, in auctor sem
                        dictum a. Cras euismod auctor hendrerit. Donec sed odio felis.
                        Quisque eu lacus tincidunt, lacinia mauris nec, malesuada augue.
                    `,
                },
                {
                    id: 1,
                    header: 'Ujabb Article',
                    description: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        elementum, ante blandit eleifend maximus, nunc dui hendrerit quam,
                        id tempus lectus risus id massa. Praesent ac imperdiet tortor.
                        Nullam consectetur augue ut massa molestie euismod. Suspendisse
                        nec erat eu quam condimentum suscipit. In porta, dui nec faucibus
                        luctus, eros ex tincidunt risus, vel elementum ligula nisi vel
                        massa. Nam vitae porta tellus. Nam consequat, felis eget rutrum
                        consectetur, tellus neque pulvinar justo, sed interdum est massa
                        sollicitudin nunc. Sed feugiat vestibulum nisl, in auctor sem
                        dictum a. Cras euismod auctor hendrerit. Donec sed odio felis.
                        Quisque eu lacus tincidunt, lacinia mauris nec, malesuada augue.
                    `,
                },
                {
                    id: 2,
                    header: 'Nagyon jo article',
                    description: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        elementum, ante blandit eleifend maximus, nunc dui hendrerit quam,
                        id tempus lectus risus id massa. Praesent ac imperdiet tortor.
                        Nullam consectetur augue ut massa molestie euismod. Suspendisse
                        nec erat eu quam condimentum suscipit. In porta, dui nec faucibus
                        luctus, eros ex tincidunt risus, vel elementum ligula nisi vel
                        massa. Nam vitae porta tellus. Nam consequat, felis eget rutrum
                        consectetur, tellus neque pulvinar justo, sed interdum est massa
                        sollicitudin nunc. Sed feugiat vestibulum nisl, in auctor sem
                        dictum a. Cras euismod auctor hendrerit. Donec sed odio felis.
                        Quisque eu lacus tincidunt, lacinia mauris nec, malesuada augue.
                    `,
                },
            ],
        };
    }
}
</script>

<style scoped>
    section {
        width: 100%;
        background: white;
        padding-bottom: 40px;
        text-align: center;
    }
    div.arrow-down {
        margin-left: auto;
        margin-right: auto;
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 35px solid #D8E8E8;
    }
    h1 {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .container {
        width: 80%;
        margin: 0 auto;
    }
    .arrow-left {
        display: inline-block;
        width: 5%;
        height: 25rem;
    }
    .arrows {
        cursor: pointer;
        transition: 0.3s;
    }
    .arrows:hover {
        background-color: #f7f4f4
    }

    .carousels-enter-from,
    .carousels-leave-to {
        opacity: 0;
    }

    .carousels-leave-active {
        transition: opacity 0.8s ease-out;
    }

    .carousels-enter-active {
        transition: opacity 0.5s ease-in;
    }

    .carousels-enter-to,
    .carousels-leave-from {
        opacity: 1;
    }

</style>