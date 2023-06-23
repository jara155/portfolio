<script>
	export let img;
	export let color;
	export let title = "";
	export let year = "";
	export let desc = "";
	export let link = "";
</script>

<main class="container" style="border-left-color: {color};">
	<img src="{img}" alt="{title}-logo" />
	<h2>{title}</h2>
	<p>{year}</p>
	<h4>{desc}</h4>
	<footer>
		<a href="https://{link}" target="_blank">{link}</a>
	</footer>
</main>

<style>

	.container {
		width: 260px;
		height: 345px;
		margin-inline: 10px;
	}

	@media (max-width: 600px) {
		.container {
			width: 95%;
			padding: 0;
			margin-bottom: 20px;
		}
		
		p {
			margin-block: 0;
		}

		img {
			padding-top: 15px;
		}
	}
	
	@media (min-width: 600px) {
		p {
			width: 80%;
		}
	}

	footer {
		margin-bottom: 0;
	}

	img {
		height: 96px;
	}

	p {
		background-color: #373739;
		border-radius: 10px;
		margin-bottom: 9px;
	}

	a {
		padding: 0;
		text-align: center;
	}

	h2 {
		margin-top: 0;
		margin-inline: 10px;
		margin-bottom: 2px;
		font-size: 20px;
		color: #eeeeee;
	}

	h4 {
		margin-top: 0px;
		color: #eeeeee;
		padding-inline: 10px;
		font-size: 16px;
		text-align: center;
		font-weight: 500;
		margin-bottom: 10px;
		overflow-wrap: break-word;
	}
</style>
