<template>
    <teleport to="body">
        <div class="homaly" @click="$emit('close')" v-if="open"></div>
        <transition name="popup">
            <dialog open v-if="open">
                <header>
                    <h2>Login</h2>
                </header>
                <section>
                    <the-loader v-if="isLoading"></the-loader>
                    <form @submit.prevent="loginMeth" v-else-if="!pwdisForgetted">
                        <div class="form-control">
                            <label for="email">E-mail:</label>
                            <input id="email" name="email" type="email" v-model.trim="email" :class="{error: !emailIsValid}">    
                        </div>
                        <div class="form-control">
                            <label for="password">Password:</label>
                            <input id="password" name="password" type="password" v-model.trim="password" :class="{error: !passwordIsValid}">    
                        </div>
                        <div class="forgot">
                            <a @click="iForgetpwd">Forgot password?</a>
                        </div>
                        <div class="form-control" v-if="!formIsValid">
                            <p v-for="message in errorMessage" :key="message" class="error">{{ message }}</p>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <form @submit.prevent="pwdResender()" v-else>
                        <div class="form-control">
                            <label for="E-mail">E-mail:</label>
                            <input id="email" name="email" type="email">    
                        </div>
                        <div class="forgot">
                            <a @click="iForgetpwd">Back to login</a>
                        </div>
                        <div>
                            <button type="submit">Send password</button>
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
        pwdisForgetted: false,
        emailIsValid: true,
        email: '',
        passwordIsValid: true,
        password: '',
        formIsValid: true,
        errorMessage: [],
        isLoading: false
      };
    },
    methods: {
      iForgetpwd() {
        this.pwdisForgetted = !this.pwdisForgetted;
      },
      pwdResender() {
        this.iForgetpwd();
      },
      async loginMeth() {
        this.isLoading = true;
        this.validateForm();

        if (this.formIsValid) {
          const url = this.$store.getters['api/registLink'];
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              mode: "login",
              email: this.email,
              password: this.password
            })
          });

          const responseData = await response.json();

          if (responseData.message === 'Login OK!') {
            // console.log('Login ok!');
            this.$store.dispatch('auth/login',responseData);
            // this.$store.getters['auth/getUser'];
            // this.$router.push({name: 'MyProfile'});
            this.$emit('close');
          } else {
            this.formIsValid = false;
            this.errorMessage.push('Incorrect password or email address'); 
          }
        }
        this.isLoading = false;
      },
      validateForm() {
        this.emailIsValid = true;
        this.passwordIsValid = true;
        this.formIsValid = true;
        this.errorMessage = [];
        if (this.email === '' || !this.email.includes('@')) {
          this.emailIsValid = false;
          this.formIsValid = false;
          this.errorMessage.push('This is not a valid email address');
        }
        if (!(this.password.length > 5)) {
          this.passwordIsValid = false;
          this.formIsValid = false;
          this.errorMessage.push('This is not a valid password!');
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