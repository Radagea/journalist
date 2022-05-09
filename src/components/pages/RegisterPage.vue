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
                    <the-loader v-if="isLoading"></the-loader>
                    <form @submit.prevent="registerMeth" v-else>
                        <div class="form-control">
                            <label for="email">E-mail:</label>
                            <input id="email" name="email" type="email" v-model.trim="email" :class="{error : !emailIsValid}">    
                        </div>
                        <div class="form-control">
                            <label for="password">Password:</label>
                            <input id="password" name="password" type="password" v-model.trim="password" :class="{error : !passwordIsValid}">    
                        </div>
                        <div class="form-control">
                            <label for="cpassword">Confirm Password:</label>
                            <input id="cpassword" name="cpassword" type="password" v-model.trim="ConfPassword" :class="{error : !passwordIsSame}">    
                        </div>
                        <div class="form-control" v-if="!formIsValid">
                          <p v-for="message in errorMessage" :key="message" class="error">{{ message }}</p>
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
        email: '',
        emailIsValid: true,
        password: '',
        passwordIsValid: true,
        ConfPassword: '',
        passwordIsSame: true,
        formIsValid: true,
        errorMessage: [],
        isLoading: false,
      };
    },
    methods: {
      async registerMeth() {
        this.isLoading = true;
        this.validateForm();

        if (this.formIsValid) {
          
          const url = this.$store.getters['api/authLink']+'register.php';
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              mode: "register",
              email: this.email,
              password: this.password
            })
          });

          const responseData = await response.json();

          if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
          }

          if (responseData.message === 'Register OK!') {
            console.log('Okés');
          } else {
            this.formIsValid = false;
            this.errorMessage.push('You are already registered with this email');
          }
          
          this.isLoading = false;
        }

      },
      validateForm() {
        this.emailIsValid = true;
        this.passwordIsValid = true;
        this.passwordIsSame = true;
        this.formIsValid = true;
        this.errorMessage = [];

        if (this.email === '' || !this.email.includes('@')) {
          this.emailIsValid = false;
          this.formIsValid = false;
          this.errorMessage.push('This is not a valid email address');
        }
        if (!(this.password.length > 5 )) {
          this.passwordIsValid = false;
          this.formIsValid = false;
          this.errorMessage.push('The password at least have to 6 character long');
        }
        if (!(this.ConfPassword === this.password) || (this.confPassword === '')) {
          this.passwordIsSame = false;
          this.formIsValid = false;
          this.errorMessage.push('The two password is not the same!');
        }
      }
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
  background-color: #115349;
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
p.error {
  color: red;
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

    input.error {
      border: 1px solid red;
    }

    input:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #D8E8E8;
    }

    .form-control {
    margin: 1rem 0;
    }
    button {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #115349;
    border: 1px solid #115349;
    color: white;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 30px;
    }

    button:hover,
    button:active {
    background-color: #5C948C;
    border-color: #5C948C;
    }

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}

</style>