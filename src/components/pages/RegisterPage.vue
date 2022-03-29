<template>
    <teleport to="body">
        <div class="homaly" @click="$emit('close')" v-if="open"></div>
        <transition name="popup">
            <dialog open v-if="open">
                <header>
                    <slot name="header">
                        <h2>Register</h2>
                    </slot>
                </header>
                <section>
                    <form @submit.prevent="loginMeth">
                        <div class="form-control">
                            <label for="username">Username:</label>
                            <input id="username" name="username" type="text">    
                        </div>
                        <div class="form-control">
                            <label for="fname">First name:</label>
                            <input id="fname" name="fname" type="text">    
                        </div>
                        <div class="form-control">
                            <label for="lname">Last name:</label>
                            <input id="lname" name="lname" type="text">    
                        </div>
                        <div class="form-control">
                            <label for="email">E-mail:</label>
                            <input id="email" name="email" type="email">    
                        </div>
                        <div class="form-control">
                            <label for="password">Password:</label>
                            <input id="password" name="password" type="password">    
                        </div>
                        <div class="form-control">
                            <label for="cpassword">Confirm Password:</label>
                            <input id="cpassword" name="cpassword" type="password">    
                        </div>
                        <div>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </section>
            </dialog>
        </transition>
    </teleport>
</template>


<script>
export default {
    emits: ['close'],
    props: ['open'],
    data() {
      return {
      };
    },
    methods: {

    }
}
</script>

<style scoped>
div.homaly{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.75); */
  z-index: 10;
}

a {
    cursor: pointer;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: #783741;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
div.forgot {
        width:100%;
        height: 100%;
        text-align: right;
    }
    label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    input {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 1.5rem;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    }

    input:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #FEEEEE;
    }

    .form-control {
    margin: 1rem 0;
    }
    button {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #783741;
    border: 1px solid #783741;
    color: white;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 30px;
    }

    button:hover,
    button:active {
    background-color: #B67E86;
    border-color: #B67E86;
    }

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

</style>