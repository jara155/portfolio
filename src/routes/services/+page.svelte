<script>
	import Container from "../../components/Container.svelte";
	import { fade, fly } from "svelte/transition";
</script>

<main in:fade>
	<h1 class="page-title">Služby</h1>

	<h3>
		Jestli tě zaujala některá ze služeb, tak v <a href="/contact">Kontakt</a
		> mě můžeš kontakovat.
	</h3>

	<div class="columns" in:fly={{ y: -20, delay: 250 }}>
		<Container
			image="fa-solid fa-mobile"
			title="Mobile development"
			desc="Vytvařím mobilní aplikaci pomocí Flutteru, která bude pro Android"
		/>
		<Container
			image="fa-solid fa-desktop"
			title="Desktop development"
			desc="Vytvářím desktop aplikaci pomocí Flutteru, která bude na Windows, Linux"
		/>
		<Container
			image="fa-solid fa-cube"
			title="Minecraft Plugin development"
			desc="Vytvářím vlastní pluginy pro minecraft pomocí Javy na minecraft servery"
		/>
	</div>
</main>

<style>
	h1 {
		background-image: linear-gradient(var(--services-color), var(--hover-color));
		-webkit-background-clip: text;
		color: transparent;
	}

	@media (min-width: 600px) {
		.columns {
			display: flex;
			align-items: center;
			place-content: center;
		}
	}
</style>
