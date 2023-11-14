<script>
  import Link from "../components/Link.svelte";
  import Title from "../components/title.svelte";
  import SubTitle from "../components/Subtitle.svelte";
</script>

<footer>
  <div class="services">
    <SubTitle>Services</SubTitle>
    <Link id="tool" type="secondary" linkTo="/create-tool">Create Tool</Link>
    <Link type="secondary" linkTo="/tools">View all Tools</Link>
  </div>

  <div class="contact">
    <SubTitle>Contact us</SubTitle>
    <div class="icons">
      <a href="#"><i class="bx bxl-linkedin" /></a>
      <a href="#"><i class="bx bxl-twitter" /></a>
      <a href="#"><i class="bx bxl-instagram" /></a>
      <a href="#"> <i class="bx bxl-facebook" /></a>
    </div>
  </div>
</footer>

<style>
	footer {
		background-color: black;
		bottom: 0;
		width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3rem;
    background: linear-gradient(90deg,  #d10ed19a,#4aaef19a) padding-box;

	}

	li,
	a {
		color: #ffffff;
		font-size: 15px;
	}

	.icons i {
		display: inline-block;
		color: #fff;
		font-size: 30px;
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


		.container {
			padding-top: 20px;
			padding-bottom: 10px;
		}

		.content {
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

	@media (ma-width: 520px){


		.container {
			padding-top: 10px;
			padding-bottom: 5px;
		}

		.content {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
			
		}

		h1 {
			font-size: 15px;
		}

		li,
		a {
			font-size: 10px;
		}

		.icons i {
			font-size: 10px;
			margin: 10px 0px 9px 25px;
		}
	}

	

</style>
