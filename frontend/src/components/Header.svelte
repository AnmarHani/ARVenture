<header>
	<img src="./Logo.png" alt="logo" class="logo" />
	<nav>
		<ul class="navlinks">
			<li><a href="#">Home</a></li>
			<li><a href="#">Login</a></li>
			<li><button class="sig"><a href="#">Sign Up</a></button></li>
		</ul>
	</nav>
	<!-- <a href="#" class="cta"><button>Sign Up</button></a> -->
</header>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Press+Start+2P&display=swap');

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		background-color: #0a0f16;
	}

	li,
	a,
	button {
		font-family: 'Press Start 2P', cursive;
		color: #ffffff;
		font-weight: 500;
		font-size: 16px;
		text-decoration: none;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-right: 30px;
		padding-left: 30px;
		padding-bottom: 10px;
		padding-top: 10px;
	}

	.logo {
		cursor: pointer;
	}

	.navlinks {
		list-style: none;
	}

	.navlinks li {
		display: inline-block;
		padding: 5px;
	}

	.navlinks li a {
		transition: all 0.3s ease 0s;
	}

	.navlinks li a:hover {
        background: -webkit-linear-gradient(200deg, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		cursor: pointer;
	}

	button {
		background: linear-gradient(#0a0f16, #0a0f16) padding-box,
			linear-gradient(0deg, #64cef5, #d10ed1) border-box;
		padding: 10px 30px;
		border: 2px solid transparent;
		border-radius: 5px;
		transition: 0.4s;
		transition: all 0.5s ease;
	}

	button a:hover {
		background: -webkit-linear-gradient(200deg, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	
</style>
