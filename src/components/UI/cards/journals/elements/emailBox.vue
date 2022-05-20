<template>
    <div class="left">
        <div class="emailBox clear">
            <h2>E-mail alert</h2>
            <p>Add your e-mail address to receive alert if new article published:</p>
            <input v-if="isLoggedIn" type="email" id="email" name="email" v-model="email" readonly/>
            <input v-else type="email" id="email" name="email" v-model="email"/>
            <button>Subscribe</button>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        if(this.isLoggedIn) {
            this.getEmailAddress();
        }
    },
    data() {
        return {
            email: '',
        };
    },
    methods: {
        getEmailAddress() {
            const url = this.$store.getters['api/userDataLink'];
            fetch(url).then((response) => {
                if(response.ok) {
                    return response.json();
                }
            }).then((data) => {
                this.email = data.email;
            })
        }
    },
    computed: {
        isLoggedIn() {
			return this.$store.getters['auth/isAuthenticated'];
		}
    }
}
</script>

<style scoped>
    .left {
        width: 28%;
        /* background-color: black; */
        float: right;
    }
    .emailBox {
        padding: 4%;
        background-color: white;
        border-radius: 10px;
    }
    .emailBox h2 {
        margin-bottom: 6px;
    }
    .emailBox input {
        width: 96%;
        padding: 2%;
        margin-top: 10px;
        border: 1px solid lightgray;
        border-radius: 5px;
    }
    .emailBox button {
        float: right;
        cursor: pointer;
        padding: 8px;
        margin-top: 10px;
        border-radius: 5px;
        color:white;
        background-color: #115349;
        transition: 0.2s;
    }
    .emailBox button:hover {
        background-color: #5C948C;
    }
</style>