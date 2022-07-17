<template>
    <div class="wrapper">
        <table>
            <tr>
                <td><h1>First Name:</h1></td>
                <td>
                    <input type="text" id='firstname' name='firstname' v-model="firstName.content" v-if="firstName.clicked" class="active">
                    <input type="text" id='firstname' name='firstname' v-model="firstName.content" v-else readonly>
                </td>
                <td><i class="bi bi-pencil-square" @click="firstNameClicked"></i></td>
            </tr>
            <tr>
                <td><h1>Last Name:</h1></td>
                <td>
                    <input type="text" id='lastname' name='lastname' v-model="lastName.content" v-if="lastName.clicked" class="active">
                    <input type="text" id='lastname' name='lastname' v-model="lastName.content" v-else readonly>
                </td>
                <td><i class="bi bi-pencil-square" @click="lastNameClicked"></i></td>
            </tr>
            <tr>
                <td><h1>Email address:</h1></td>
                <td>
                    <input type='email' id='email' name='email' v-model="email.content" v-if="email.clicked" class="active"/>    
                    <input type='email' id='email' name='email' v-model="email.content" v-else readonly/>    
                </td>
                <td><i class="bi bi-pencil-square" @click="emailClicked"></i></td>
            </tr>
            <tr>
                <td><h2>Address informations:</h2></td>
            </tr>
            <tr>
                <td><h1>Country</h1></td>
                <td>
                    <country-selector></country-selector>
                </td>
                <td><i class="bi bi-pencil-square" @click="emailClicked"></i></td>
            </tr>
        </table>
        <button class="saveButton">Save</button>
    </div>
</template>

<script>
import CountrySelector from './component/CountrySelector.vue';
export default {
    components: {
        CountrySelector
    },
    data() {
        return {
            firstName: {
                content: 'John',
                clicked: false
            },
            lastName: {
                content: 'Doe Ipsum',
                clicked: false
            },
            email: {
                content: 'john.doe@gmail.com',
                clicked: false
            }
        };
    },
    methods: {
        firstNameClicked() {
            this.firstName.clicked = !this.firstName.clicked;
        },
        lastNameClicked() {
            this.lastName.clicked = !this.lastName.clicked;
        },
        emailClicked() {
            this.email.clicked = !this.email.clicked;
        }
    }
}
</script>

<style scoped>
    .wrapper {
        width: 80%;
        margin: 20px auto;
        font-size: 1.2em;
    }
    .wrapper table {
        width: 100%;
        border-spacing: 30px;
    }
    h1 {
        font-size: 1.2em;
    }
    h2 {
        margin-top: 10px;
        font-size: 1.2em;
    }
    i {
        cursor: pointer;
        transition: 0.3s;
    }
    i:hover {
        color: #115349;
    }
    input {
        background-color: #F9F9F9;
        height: 1.2rem;
        padding: 5px;
        border: 1px solid #F9F9F9;
    }
    input:focus {
        outline: none;
    }
    input.active {
        border: 1px solid #115349;
        border-radius: 5px;
    }
    button.saveButton {
        margin-top: 20px;
        cursor: pointer;
        padding: 10px 20px;
        background-color: #115349;
        color: white;
        border-radius: 5px;
        transition: 0.2s;
    }
    button.saveButton:hover {
        background-color: #52857E;
    }
    td select {
        float: right;
    }
</style>