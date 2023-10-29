<script>
</script>

<head>
	<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
</head>

<body>
	<div class="hero">
		<div class="wrapper">
			<form action="">
				<h1>login</h1>
				<div class="input-box">
					<input type="text" placeholder="Email Address" required />
					<i class="bx bx-envelope" />
				</div>
				<div class="input-box">
					<input type="password" placeholder="Password" required />
					<i class="bx bxs-lock-alt" />
				</div>
				<div class="remember-forgot">
					<label> <input type="checkbox" /> Remember Me </label>
					<a href="#"> Forgot Password?</a>
				</div>
				<button type="submit" class="btn">Sign In</button>
				<div class="register-link">
					<p>Don't Have an Account? <a href="#">Register Now!</a></p>
				</div>
			</form>
		</div>
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Press+Start+2P&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Press Start 2P', cursive;
		font-weight: 500;
	}

	input:focus::placeholder {
		color: transparent;
	}

	body {
		background-color: rgba(0, 0, 0, 0.781);
	}

	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background-size: cover;
		background-repeat: no-repeat;
		color: white;
		background-image: url('./plainpurple.png');
		padding-top: 100px;
		padding-bottom: 400px;
	}

	.wrapper {
		width: 420px;
		background: transparent;
		backdrop-filter: blur(20px);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border: 2px solid rgba(255, 255, 255, 0.2);
		color: #fff;
		border-radius: 10px;
		padding: 30px 40px;
	}

	.wrapper h1 {
		font-size: 36px;
		text-align: center;
	}

	.wrapper .input-box {
		position: relative;
		width: 100%;
		height: 50px;
		margin: 30px 0;
	}

	.input-box input {
		width: 100%;
		height: 100%;
		background: transparent;
		border: none;
		outline: none;
		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: 40px;
		font-size: 16px;
		color: #fff;
		font-weight: 500;
		padding: 20px 45px 20px 20px;
	}

	.input-box input::placeholder {
		color: #ffffffa6;
	}

	.input-box i {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 20px;
	}

	.wrapper .remember-forgot {
		display: flex;
		justify-content: space-between;
		font-size: 10.5px;
		margin: -15px 0 15px;
	}

	.remember-forgot label input {
		accent-color: #fff;
		text-decoration: none;
	}

	.remember-forgot a {
		color: #10a3da;
		text-decoration: underline;
	}

	.remember-forgot a:hover {
		color: #10a4da9d;
	}

	.wrapper .btn {
		width: 100%;
		height: 45px;
		background: #fff;
		border: none;
		border-radius: 40px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		font-size: 16px;
		font-weight: 500;
		margin-top: 10px;
	}

	.wrapper .register-link {
		font-size: 14.5px;
		text-align: center;
		margin-top: 20px 0 15px;
	}

	.register-link p {
		color: #fff;
		text-decoration: none;
		font-weight: 500;
		line-height: 25px;
		margin-top: 40px;
	}

	.register-link a {
		color: #fff;
		text-decoration: none;
		font-weight: 500;
		line-height: 25px;
	}

	.register-link p a:hover {
		color: #10a3da;
	}

	.btn:hover {
		color: #10a3da;
	}

	input:focus::placeholder {
		color: transparent;
	}
</style>
