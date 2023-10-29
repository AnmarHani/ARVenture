<script>
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<Header />
<head>
	<link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
</head>

<main>
	<body>
		<section>
			<div class="hero1">
				<div class="container">
					<h1 id="first-h1">Your Voice, Your Game Empower AR Gaming with ARVote</h1>
					<form>
						<select required>
							<option value="" disabled selected hidden>MINECRAFT...</option>
							<option value="0">sword</option>
							<option value="1">example</option>
						</select>
						<input type="text" placeholder="Diamond Sword..." required />
					</form>
				</div>
			</div>
		</section>

		<section>
			<div class="hero2">
				<div class="container">
					<div class="hero-text">
						<p>We believe in crafting experiences that resonate with our gamers</p>
					</div>
				</div>
			</div>
		</section>
	</body>
</main>

<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Press+Start+2P&display=swap');

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	body {
		background-color: black;
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
		background-image: url('./smartglasses.png');
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

	.hero2 {
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
		justify-content: center;
		align-content: center;
		gap: 30px;
		padding-left: 4rem;
		padding-right: 4rem;
	}

	#first-h1,
	p {
		text-align: center;
		margin: 20px;
		font-size: 50px;
		background: -webkit-linear-gradient(200deg, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	select {
		padding: 19px 20px;
		border: none;
		border-radius: 4px;
		background-color: #f1f1f1;
	}

	select:invalid {
		color: gray;
	}

	select:focus::placeholder {
		color: transparent;
	}

	input {
		padding: 19px 15px;
		border: none;
		border-radius: 4px;
		background-color: #f1f1f1;
	}

	input:focus::placeholder {
		color: transparent;
	}
</style>
