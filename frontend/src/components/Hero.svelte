<!-- <script>
	var typed = new Typed(".auto-type",{
      strings : ["سحبتيشن سعدون"],
      typeSpeed : 200,
      backSpeed : 150,
      loop : true 
    })
</script> -->
<body>
	<main>
	<!-- First section -->
	<section>
		<div class="hero1">
			<div class="container1">
				<h1 id="first-h1">EXPLORE THE FUTURE OF GAMING</h1>
				<p id="first-par">Let's revolutionizing the gaming industry!</p>
				<button>Learn More!</button>
			</div>
		</div>
	</section>

	<!-- Second section -->
	<section>
		<div class="hero2">
			<div class="container2">
				<video  autoplay loop muted>
					<source src="./Table.mp4" type="video/mp4" />
				</video>
				<div class="hero-text">
					<h2>introducing</h2>
					<h1 class="h1" id="second-h1">ARventure</h1>
					<p class="par" id="second-par">
						Embark on an extraordinary journey with ARVenture, where reality meets fantasy. We bring
						the thrill of adventure gaming to your everyday life with our innovative ARVGlass.
						Transform your surroundings into a magical realm and experience gaming like never
						before.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Third section -->
	<section>
		<div class="hero3">
			<div class="container3">
				<img src="glasses.png" alt="Black glasses" class="glasses" />
				<div class="hero-text">
					<h1>Black Glasses</h1>
					<p>
						Experience a new reality with ARVGlass, Elevate your style and transform your
						surroundings into an immersive gaming experience and discover ARVGlass and unlock
						limitless adventures.
					</p>
					<button>Pre-order Now!</button>
				</div>
			</div>
			<div class="vote-container">
				<div class="vote-content">
					<div class="title">ARVvote</div>
					<div class="description">
						Influence the future of AR gaming with ARVote! Vote for your favorite game elements and
						help shape our adventure game. Your voice matters. Join us now and create the ultimate
						AR gaming experience.
					</div>
					<button class="learn-more"><a href="#">Vote Now!</a></button>
				</div>
				<div class="vote-content">
					<div class="title">About US</div>
					<div class="description">
						At ARVenture, we're passionate about pushing the boundaries of gaming. We're a team of
						innovators, dreamers, and gamers at heart, committed to transforming the way you
						interact with the world.
					</div>
					<button class="learn-more"><a href="#">Sign Up</a></button>
				</div>
			</div>
		</div>
	</section>
</main>
</body>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Press+Start+2P&display=swap');

	* {
		margin: 0;
		padding: 0;
		font-family: 'Press Start 2P', cursive;
		list-style: none;
		text-decoration: none;
		font-weight: 500;
	}

	.hero1 {
		background-size: cover;
		background-repeat: no-repeat;
		color: white;
		background-image: url('./herobackground.jpg');
		padding-top: 100px;
		padding-bottom: 400px;
	}

	.hero2 {
		background-size: cover;
		background-repeat: no-repeat;
		color: white;
		background-image: url('./Rectangle.png');
		padding-top: 100px;
		padding-bottom: 200px;
	}

	.hero3 {
		background-size: cover;
		background-repeat: no-repeat;
		color: white;
		background-image: url('./plainpurple.png');
		padding-top: 100px;
		padding-bottom: 200px;
	}

	.container1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		gap: 30px;
		padding-left: 800px;
		margin-top: 210px;
		line-height: 55px;
	}
	.container2 {
		display: flex;
		flex-direction: row-reverse;
		justify-content: center;
		align-items: center;
		gap: 30px;
		padding-left: 4rem;
		padding-right: 4rem;
	}
	.container3 {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-content: center;
		gap: 30px;
		padding: 4rem;
		margin: 50px;
		border: white solid;
		border-radius: 50px;
		border-width: 1px;
	}

	.container3 > .hero-text {
		display: flex;
		justify-content: center;
		align-items: center;
		line-height: 30px;
	}

	.container3 p {
		font-size: 25px;
		margin: 20px;
	}

	.container3 h1 {
		font-size: 36px;
		margin-bottom: 30px;
	}

	video {
		width: 40%;
		border-radius: 25px;
	}

	#first-h1 {
		padding-left: 200px;
		font-size: 40px;
		background: -webkit-linear-gradient(200deg, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	#first-par {
		color: #ffffff;
		font-size: 1rem;
	}

	#second-h1 {
		font-size: 50px;
		background: -webkit-linear-gradient(269deg, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	#second-par {
		color: #ffffff;
		font-size: 20px;
		line-height: 36px;
	}

	button {
		background: linear-gradient(90deg, #d10ed1, #4aaef1) padding-box;
		padding: 25px 40px;
		border: 2px solid transparent;
		border-radius: 5px;
		color: white;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.5s ease;
	}

	button:hover {
		color: rgba(255, 255, 255, 0.589);
	}
	.vote-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4rem;
	}

	.vote-content {
		max-width: 500px;
		padding: 20px;
		background: linear-gradient(to bottom, #00000023, #0a0f16) padding-box;
		border-radius: 10px;
	}

	.title {
		font-size: 30px;
		margin-bottom: 16px;
		text-align: center;
	}

	.description {
		padding: 1rem;
		font-size: 15px;
		margin-bottom: 16px;
		line-height: 20px;
		color: white;
	}

	a {
		padding: 5px;
		color: white;
		font-size: 1rem;
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		padding: 40px;
		line-height: 60px;
	}

	@media (max-width: 1250px) {
		.vote-container {
			flex-direction: column;
			height: 100%;
		}
	}

	.learn-more {
		background: linear-gradient(#0a0f16, #0a0f16) padding-box,
			linear-gradient(0deg, #64cef5, #d10ed1) border-box;
		padding: 10px 30px;
		border: 2px solid transparent;
		border-radius: 5px;
		margin-left: 152px;
		transition: 0.4s;
		transition: all 0.5s ease;
	}

	.learn-more a:hover {
		background: -webkit-linear-gradient(200deg, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	
</style>
