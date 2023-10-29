<script>
	import Header from '../components/Header.svelte';
	import Hero from '../components/Hero.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<head>
	<link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
</head>

<body>
	<main>
		<Hero />
		<Footer />
	</main>
</body>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	body {
		margin: 0;
		padding: 0;
		background-color: #182233;
	}
</style>
