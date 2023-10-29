<script>
	import Header from '../../components/Header.svelte';
</script>

<Header />
<head>
	<link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
</head>

<body>
	<main>
		<section>
			<div class="hero1">
				<div class="container">
					<h1>About Us</h1>
					<p>
						Our mission is to blend the lines between the virtual and the real, creating immersive
						experiences that thrill, excite, and inspire. With ARVGlass, we're not just offering a
						product; we're offering a doorway into countless adventures. Join us, and let's redefine
						gaming together!
					</p>
				</div>
			</div>
		</section>

		<section class="team">
			<div class="center">
				<h1>Our Team</h1>
			</div>
			<div class="team-content">
				<div class="box">
					<img src="./cheesegromit.jpg" alt="" />
					<h3>Mohammed Adel</h3>
					<h5>Web Developer</h5>
					<div class="icons">
						<a href="#"><i class="bx bxl-instagram" /></a>
						<a href="#"><i class="bx bxl-twitter" /></a>
						<a href="#"><i class="bx bxl-github" /></a>
					</div>
				</div>

				<div class="box">
					<img src="./creepygoofy.jpg" alt="" />
					<h3>Anmar Hani</h3>
					<h5>Full Stack Developer</h5>
					<div class="icons">
						<a href="#"><i class="bx bxl-instagram" /></a>
						<a href="#"><i class="bx bxl-twitter" /></a>
						<a href="#"><i class="bx bxl-github" /></a>
					</div>
				</div>

				<div class="box">
					<img src="./heknows.jpg" alt="" />
					<h3>Yassir Kaid</h3>
					<h5>Microsoft Word Professional</h5>
					<div class="icons">
						<a href="#"><i class="bx bxl-instagram" /></a>
						<a href="#"><i class="bx bxl-twitter" /></a>
						<a href="#"><i class="bx bxl-github" /></a>
					</div>
				</div>

				<div class="box">
					<img src="./creepyluigi.jpg" alt="" />
					<h3>Raef Shah</h3>
					<h5>UI/UX Designer</h5>
					<div class="icons">
						<a href="#"><i class="bx bxl-instagram" /></a>
						<a href="#"><i class="bx bxl-twitter" /></a>
						<a href="#"><i class="bx bxl-github" /></a>
					</div>
				</div>

				<div class="box">
					<img src="./cursedMrIncredibles.jpg" alt="" />
					<h3>Ziyad Alghamdi</h3>
					<h5>Back-end Developer</h5>
					<div class="icons">
						<a href="#"><i class="bx bxl-instagram" /></a>
						<a href="#"><i class="bx bxl-twitter" /></a>
						<a href="#"><i class="bx bxl-github" /></a>
					</div>
				</div>
			</div>
		</section>
	</main>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Press+Start+2P&display=swap');

	body {
		background-color: rgba(0, 0, 0, 0.781);
	}

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
		background-image: url('./plainpurple.png');
		padding-top: 100px;
		padding-bottom: 400px;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 30px;
		padding-left: 4rem;
		padding-right: 4rem;
	}

	h1 {
		text-align: center;
		color: #ffff;
		font-size: 69px;
		margin-bottom: 100px;
	}

	p {
		background: -webkit-linear-gradient(bottom, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 30px;
		margin: 40px;
		line-height: 40px;
	}

	.team {
		position: relative;
		width: 100%;
		height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		color: white;
		background-image: url('./plainpurple.png');
		padding-top: 100px;
		padding-bottom: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.team-content {
		width: 100%;
		max-width: 1350px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, auto));
		align-items: center;
		gap: 2rem;
		text-align: center;
		margin-top: 4rem;
	}

	.team-content img {
		width: 100%;
		height: auto;
		border-radius: 15px;
		margin-bottom: 15px;
	}

	.center h1 {
		color: #fff;
		font-size: 4rem;
		text-align: center;
	}

	.box {
		padding: 16px;
		background: #1b1229;
		border-radius: 15px;
		transition: all 0.38s ease;
	}

	.box h3 {
		font-size: 23px;
		font-weight: 500;
		color: #fff;
		margin-bottom: 8px;
	}

	.box h5 {
		font-size: 15px;
		font-weight: 500;
		color: #b7b4bb;
		margin-bottom: 15px;
	}

	.icons i {
		display: inline-block;
		color: #fff;
		font-size: 20px;
		margin: 0 8px;
		transition: all 0.38s ease;
	}
	.icons i:hover {
		transform: scale(1.5);
	}

	.box:hover {
		transform: translateY(-10px);
		cursor: pointer;
	}

	@media (max-width: 1240px) {
		main {
			max-width: none;
		}
		.team {
			width: 100%;
			height: 100%;
			padding: 90px 2%;
		}
		.center h1 {
			font-size: 3.2rem;
		}
	}
</style>
