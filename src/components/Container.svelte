<script>
	export let image;
	export let title = "";
	export let desc = "";
	export let link = "";
</script>

<main class="container">
	{#if link != ""}
		<a href={link} target="_blank">
			<i class={image} />
		</a>
	{:else}
		<i class={image} />
	{/if}
	<h2>{title}</h2>
	<h3>{desc}</h3>
</main>

<style>
	@media (max-width: 600px) {
		.container {
			width: 100%;
			max-width: 160px;
		}

		h2 {
			font-size: 20px;
		}
	}

	@media (min-width: 600px) {
		h2 {
			font-size: 25px;
		}
	}

	i {
		font-size: 5em;
		color: #eeeeee;
	}
	h2 {
		overflow-wrap: break-word;
		max-lines: 2;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 15px;
		margin-bottom: 0px;
		color: #eeeeee;
	}

	h3 {
		margin-top: 0px;
		color: #eeeeee;
		overflow-wrap: break-word;
	}
</style>
