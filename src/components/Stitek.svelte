<script>
	export let title;
</script>

<main class="stitek">
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
		border-radius: var(--radius);
		align-items: center;
		color: white;
		border: 1px solid rgb(49, 48, 48);
	}

	p {
		font-size: 15px;
	}
</style>
