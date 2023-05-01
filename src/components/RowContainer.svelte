<script>
	import Stitek from "./Stitek.svelte";

	export let image;
	export let title;
	export let desc;
	export let link;
	export let stitky = [];
</script>

<main class="container">
	<img src={image} alt="image of {title}" />
	<div style="width: 100%;">
		<div style="display: flex; justify-content: space-between;">
			<h1>{title}</h1>
			<a href={link} target="_blank">
				<i class="fa-solid fa-arrow-up-right-from-square" />
			</a>
		</div>
		<h2>
			{desc}
		</h2>
		{#each stitky as stitek}
			<Stitek title={stitek[0]} bgColor={stitek[1]} />
		{/each}
	</div>
</main>

<style>
	@media (min-width: 600px) {
		.container {
			display: flex;
			width: 100%;
			max-width: 650px;
		}

		i {
			font-size: 24px;
			padding: 10px;
		}
	}

	@media (max-width: 600px) {
		.container {
			min-width: 12em;
			max-width: 18em;
			display: grid;
		}

		img {
			width: 50px;
			margin-right: 10px;
		}

		h1 {
			font-size: 21px;
		}

		i {
			font-size: 20px;
			padding: 5px;
		}
	}

	.container {
		margin: auto;
		margin-bottom: 15px;
		padding: 10px;
		border-radius: 3px;
	}

	img {
		width: 100px;
		padding-right: 15px;
	}

	a {
		animation: shine 200ms;
		animation-fill-mode: forwards;
	}

	i {
		padding-right: 10px;
	}
	h1 {
		margin: 0;
		text-align: start;
	}

	h2 {
		font-size: 12px;
		text-align: start;
		margin-bottom: 0.25em;
		margin-top: 0;
	}
</style>
