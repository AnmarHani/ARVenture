<footer>
	<div class="hero">
    <div class="container">
		<div class="services">
			<h1>Services</h1>
			<li><a href="#">Gaming</a></li>
			<li><a href="#">Artwork</a></li>
			<li><a href="#">Development</a></li>
		</div>

		<div class="contact">
			<h1>Contact Us</h1>
			<div class="icons">
				<a href="#"><i class="bx bxl-linkedin" /></a>
				<a href="#"><i class="bx bxl-twitter" /></a>
				<a href="#"><i class="bx bxl-instagram" /></a>
				<a href="#"> <i class="bx bxl-facebook" /></a>
			</div>
		</div>
	</div>
</div>
</footer>

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

	.hero {
		background-size: cover;
		background-repeat: no-repeat;
		color: white;
		background-image: url('./Background2.png');
		padding-top: 50px;
		padding-bottom: 14px;
	}

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
  }
	h1 {
		margin-bottom: 10px;
	}

	li,
	a {
		color: #ffffff;
		font-weight: 500;
		text-decoration: none;
		margin: 10px 0px;
		font-size: 20px;
	}

	.icons i {
		display: inline-block;
		color: #fff;
		font-size: 30px;
		margin: 20px 0px 9px 35px;
		transition: all 0.38s ease;
	}

	.icons i:hover {
		background: -webkit-linear-gradient(200deg, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transform: scale(1.2);
	}

	li:hover {
		transform: scale(1.1);
	}
	


	@media (max-width: 720px) {
  .hero {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-size: 25px;
  }

  li,
  a {
    font-size: 16px;
  }

  .icons i {
    font-size: 25px;
    margin: 10px 0px 9px 25px;
  }
}

@media (max-width: 576px) {
  h1 {
	font-size: 22px;
}

.icons {
	font-size: 0;
}

}

</style>
