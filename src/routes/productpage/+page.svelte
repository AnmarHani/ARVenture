<script>
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
</script>

<Header />
<head>
	<link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
</head>

<body>
	<section>
		<div class="hero">
			<div class="hero-text">
				<h1>ARVglasses</h1>
				<p>Pre-order now and be among the first to unlock a new dimension of reality with ARVGlass!</p>
				<p>Valid From <span>Dec13,2023 - Dec30,2023 </span></p>
			</div>
			<div class="product-card">
				<div class="logo-cart">
					<img class="glasses" src="./Logo.png" alt="" />
					<i class="bx bx-shopping-bag" />
				</div>
				<div class="main-img">
					<img src="./glassesremoved.png" alt="" />
				</div>
				<div class="glasses-details">
					<span class="glasses-name">ARVglasses</span>
					<p>
						Discover unparalleled comfort and innovation with our sleek AR Glasses. Immerse yourself in vibrant augmented reality on a high-resolution display with a wide field of view. Lightweight and designed for all-day wear, experience seamless navigation through intuitive gestures. 
						Stay effortlessly connected via Bluetooth and step into the future of technology and comfort with our cutting-edge AR Glasses.
					</p>
					<div class="stars">
						<i class="bx bxs-star" />
						<i class="bx bxs-star" />
						<i class="bx bxs-star" />
						<i class="bx bxs-star" />
						<i class="bx bx-star" />
					</div>
				</div>
				<div class="color-price">
					<div class="color-option">
						<span class="color">Color:</span>
						<div class="circles">
							<span class="circle black active" />
							<span class="circle white" />
						</div>
					</div>
					<div class="price">
						<span class="price-num">$129.99</span>
					</div>
				</div>
				<div class="button">
					<div class="button-layer" />
					<button>Add To Cart</button>
				</div>
			</div>
		</div>
	</section>
	<main />
	<Footer />
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Press+Start+2P&display=swap');

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	body {
		background-color: #182233;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Press Start 2P', cursive;
		list-style: none;
		text-decoration: none;
		font-weight: 500;
	}

	.hero {
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('./plainpurple2.png');
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 100px 100px;
	}

	.hero-text {
		display: flex;
		flex-direction: column;
		color: white;
		align-items: start;
		padding: 30px;
	}

	.hero-text h1 {
		font-size: 40px;
		margin-bottom: 30px;
		background: -webkit-linear-gradient(200deg, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.hero-text p {
		line-height: 30px;
	}
	.product-card {
		max-width: 455px;
		width: 100%;
		border-radius: 25px;
		padding: 20px 30px 30px 30px;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
		background: white;
		overflow: hidden;
	}

	.product-card .logo-cart {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.product-card .logo-cart img {
		height: 50px;
		width: 60px;
		object-fit: cover;
	}
	.product-card .logo-cart i {
		font-size: 27px;
		color: #182233;
		transition: color 0.3 ease;
		cursor: pointer;
	}
	.product-card .logo-cart i:hover {
		color: #333;
	}

	.product-card .main-img {
		position: relative;
		height: 310px;
	}
	.product-card .main-img img {
		height: 300px;
		width: 300px;
		object-fit: cover;
		transform: rotate(18deg);
		left: 12px;
		top: -40px;
		z-index: -1;
	}

	.product-card .glasses-details .glasses-name {
		font-size: 24px;
		font-weight: 500;
		color: #161616;
	}

	.product-card .glasses-details p {
		margin: 10px 0px 10px 0;
		font-size: 12px;
		font-weight: 700;
		color: #333;
		text-align: justify;
		font-family: sans-serif;
	}

	.product-card .glasses-details .stars i {
		font-size: 20px;
		margin: 1px 0px 10px 0;
		color: gold;
	}

	.product-card .color-price .color-option {
		display: flex;
		align-items: center;
	}

	.color-price {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.color-price .color-option .color {
		font-size: 18px;
		font-weight: 500;
		color: #333;
	}

	.color-option .circles {
		display: flex;
	}
	.color-option .circles .circle.black.active {
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px black;
	}

	.color-option .circles .circle.white {
		background: red;
	}
	.color-option .circles .circle.white.active {
		box-shadow: 0 0 0 2px #fff, 0 0 0 4px black;
	}
	.color-option .circles .circle {
		height: 18px;
		width: 18px;
		background: black;
		border-radius: 50%;
		margin: 0 4px;
		cursor: pointer;
	}
	.color-price .price {
		display: flex;
		flex-direction: column;
	}

	.color-price .price .price-num {
		font-size: 25px;
		padding-top: 10px;
	}

	.product-card .button {
		position: relative;
		height: 50px;
		width: 100%;
		background: red;
		border-radius: 25px;
		margin-top: 30px;
		overflow: hidden;
	}

	.product-card .button .button-layer {
		position: absolute;
		height: 100%;
		width: 300%;
		left: -100%;
		background: linear-gradient(135deg, #9708cc, #43cbff);
		transition: all 0.4s ease;
		border-radius: 25px;
	}

	.product-card .button:hover .button-layer{
		left: 0;
		
	}
	.product-card .button button {
		position: relative;
		height: 100%;
		width: 100%;
		background: none;
		outline: none;
		border: none;
		font-size: 18px;
		letter-spacing: 1px;
		color: #fff;
	}
</style>
