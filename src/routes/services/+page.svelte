<script>
	import Container from "../../components/Container.svelte";
	import { fade, fly } from "svelte/transition";
</script>

<main in:fade>
	<h1 class="page-title">Služby</h1>

	<h3>
		Jestli tě zaujala některá služba tak v <a href="/contact">Kontakt</a
		> mně můžeš kontakovat.
	</h3>

	<div class="columns" in:fly={{ y: -20, delay: 250 }}>
		<Container
			image="fa-solid fa-mobile"
			title="Mobile development"
			desc=""
		/>
		<Container
			image="fa-solid fa-desktop"
			title="Desktop development"
			desc=""
		/>
		<Container
			image="fa-solid fa-cube"
			title="Minecraft Plugin development"
			desc=""
		/>
	</div>
</main>

<style>
</style>
