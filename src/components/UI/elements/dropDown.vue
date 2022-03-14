<template>
    <div class="dropdown" @mouseleave="mouseLeave" :name="name" :drpdButtons="drpdButtons">
        <button class="dropbtn" @click="buttonPress">{{ SelectedName }}</button>
        <div class="dropdown-content" v-if="buttonPressed">
            <input type="text" placeholder="Search.." class="SearchInput" v-model="searching">
            <a v-for="dpb in drpbs" :key="dpb.id" @click="drpdSelected(dpb.id)">{{ dpb.name }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'drpdButtons'],
    data() {
        return {
            buttonPressed: false,
            SelectedID: null,
            SelectedName: this.name,
            searching: null,
            drpbs: this.drpdButtons,
        };
    }, 
    methods: {
        buttonPress() {
            this.buttonPressed = !this.buttonPressed;
        },
        mouseLeave() {
            this.buttonPressed = false;
        },
        drpdSelected(id) {
            this.SelectedID = id;
            const index = this.drpdButtons.findIndex(drpd => drpd.id === id);
            this.SelectedName = this.drpdButtons[index].name;
            this.buttonPressed = false;
            this.$emit("selected-id", this.SelectedID);
        }
    },
    watch: {
        searching() {
            const upperCaseSearch = this.searching.toLowerCase();
            this.drpbs = this.drpdButtons.filter((drpbs) => drpbs.name.toLowerCase().includes(upperCaseSearch));
        }
    }
}
</script>

<style scoped>
    .dropbtn {
        cursor: pointer;
        background: #7f444d;
        color: white;
        transition: 0.3s;
        margin-top: 10px;
        width: 100%;
        height: 3rem;
    }
    .dropbtn:hover,
    .dropbtn:active {
        background: #783741;
    }
    .dropdown {
        position: relative;
        display: inline-block;
        width: 22%;
    }
    @media(max-width: 1100px) {
        .dropdown {
            margin-left: 0px;
        }
    }
    .dropdown-content {
        position: absolute;
        background-color: #f6f6f6;
        min-width: 230px;
        border: 1px solid #ddd;
        z-index: 1;
    }
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        cursor: pointer;
    }
    .dropdown-content a:hover {background-color: #f1f1f1}

    .SearchInput {
        box-sizing: border-box;
        background-position: 14px 12px;
        background-repeat: no-repeat;
        font-size: 16px;
        padding: 14px 20px 12px 45px;
        border: none;
        border-bottom: 1px solid #ddd;
    }
</style>