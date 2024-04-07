<script>
	export let title;
	export let bgColor = "#405dac";
</script>

<main class="stitek" style="background-color: {bgColor};">
	<p>{title}</p>
</main>

<style>
	.stitek {
		display: flex;
		width: fit-content;
		padding-inline: .5rem;
		height: 1.5rem;
		justify-content: center;
		background-color: var(--dark-primary-color);
		border-radius: 20px;
		align-items: center;
		color: white;
	}

	p {
		font-size: 15px;
	}
</style>
