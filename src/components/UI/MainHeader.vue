<template>
  <nav>
	<div class="navbar clear">
		<router-link to="/" class="logo">ExpertOpinion</router-link>
		<div class="menu-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div>
		<div class="menu" >
			<ul class="main">
				<!-- <li><a href="">menu 1</a></li>
				<li><a href="">menu 2</a></li>
				<li @mouseenter="subMenuChange" @mouseleave="subMenusLeave">
					<span class="open-submenu">Dropdown</span>
					<ul v-if="subMenuClicked">
						<li><a href="">almenupont 1</a></li>
						<li><a href="">almenupont 2</a></li>
						<li><a href="">almenupont 3</a></li>
						<li><a href="">almenupont 4</a></li>
					</ul>
				</li> -->
				<li v-if="isLoggedIn"><router-link to="/myprofile">My Profile</router-link></li>
				<li class="login" v-if="!isLoggedIn"><a @click="$emit('login')">Login</a></li>
				<li v-if="!isLoggedIn"><a @click="$emit('register')">Register</a></li>
				<li v-else><a @click="logOut">Logout</a></li>
			</ul>
		</div>
	</div>
</nav>
</template>

<script>
export default {
	emit: ['login','register'],
	data() {
		return {
			subMenuClicked: false,
		};
	},
	methods: {
		subMenuChange() {
			this.subMenuClicked = true;
		},
		subMenusLeave() {
			this.subMenuClicked = false;
		},
		logOut() {
			this.$store.dispatch('auth/logOut');
			if (this.$route.meta.requiresAuth) {
				this.$router.replace('/');
			}
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
a { text-decoration:none }
.clear:before,
.clear:after {
	content:" ";
	display: table
}
.clear:after { clear: both }

nav {
	width: 100%;
	background: #52857E
}
nav .navbar {
	width: 95%;
	max-width: 1200px;
	margin:0 auto
}
nav a { color: #fff }
nav .logo {
	float: left;
	display: inline-block;
	font-size: 30px;
	font-weight: bold;
	-webkit-animation: tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	animation: tracking-in-expand 0.9s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}


@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}


nav .menu-toggle {
	cursor: pointer;
	display: none;
	float: right;
	padding: 12px;
	margin: 10px 0;
	background: #5C948C;
	transition: background-color .5s
}
nav .icon-bar {
	background-color: #fff;
	display: block;
	width: 22px;
	height: 2px
}
nav .icon-bar + .icon-bar { margin-top: 4px }

nav .menu ul { float: right }
nav .menu li {
	float: left;
	list-style: none;
}
nav .menu ul li.login {
	margin-left: 20px
}
nav .menu li a,
nav .open-submenu {
	color: #fff;
	cursor: pointer;
	position: relative;
	display: block;
	padding: 12px 20px;
	transition: background-color .3s
}
nav .menu li a:hover,
nav .open-submenu:hover ,
nav .open-submenu.active,
nav .menu-toggle.active  {
	background: #115349;
	transition: background-color .5s
}
nav .menu ul ul {
	z-index: 100;
	float: none;
	position: absolute;
	background: #5C948C
}
nav .menu ul ul li {
	float: none;
	border: 0
}
nav .menu ul ul a:hover {
	background: #115349;
	transition: background-color .3s
}

@media(max-width:600px) {
	nav .logo { padding-top: 8px }
	nav .menu-toggle { display: inline-block }
	nav .menu { display: none; clear: both }
	nav .menu > ul { float: none }
	nav .menu li { width: 100%; border: 0 }
	nav .menu li:last-child { margin: 0 0 15px 0 }
	nav .menu li a,
	nav .open-submenu {
		display: block;
		background: #006DB4;
		padding: 10px;
		margin: 2px 0 0 0
	}
	nav .menu ul ul {
		position: static;
		background: transparent;
		display:none
	}
	nav .menu ul ul a { background: transparent }
	nav .menu ul ul a:hover { background: #10147E }
}
</style>