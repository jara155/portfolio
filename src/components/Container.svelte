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
	<h4>{desc}</h4>
</main>

<style>

	@media (max-width: 600px) {
		.container {
			min-width: 80%;
			max-width: 60%;
			margin: auto;
			margin-bottom: 20px;
		}
	}

	@media (min-width: 600px) {
		.container {
			margin: 7px;
			width: 15em;
		}
	}

	i {
		font-size: 5em;
		color: #eeeeee;
	}
	h2 {
		margin-top: 15px;
		margin-inline: 10px;
		margin-bottom: 0px;
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
