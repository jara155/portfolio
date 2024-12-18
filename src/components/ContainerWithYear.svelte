<script>
	import Stitek from "./Stitek.svelte";

	export let img;
	export let title = "";
	export let year = "";
	export let desc = "";
	export let link = "";
	export let stitky = []
</script>

<main class="container">
	<img src="{img}" alt="{title}-logo" />
	<h2>{title}</h2>
	<p>{year}</p>
	<h4>{desc}</h4>
	<footer>
		<a href="https://{link}" target="_blank">{link}</a>
	</footer>
	{#each stitky as stitek}
		<Stitek title={stitek[0]} />
	{/each}
</main>

<style>

	.container {
		background-color: var(--bg);
		margin-inline: 10px;
	}

	@media (max-width: 600px) {
		.container {
			width: 80%;
			margin: auto;
			padding: 0;
		}
	
		footer {
			margin-bottom: 5px;
		}

		p {
			margin: auto;
			margin-block: 0;
			width: 70%
		}

		img {
			padding-top: 15px;
		}
	}
	
	@media (min-width: 600px) {
		p {
			width: 80%;
		}

		footer {
			margin-bottom: 0;
		}
	}

	img {
		height: 96px;
	}

	p {
		background-color: #373739;
		border-radius: var(--radius);
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
