<script>
	import Container from "../../components/Container.svelte";
	import { fade, fly } from "svelte/transition";

	export let instagram = "";
	export let discord = "";
	export let email = "";
	export let github = "";
</script>

<main in:fade>
	<h1 class="page-title">Kontakt</h1>

	<p in:fade={{ delay: 100 }}>
		Můžete mě kontaktovat na Instagramu přes můj účet a zanechat mi zprávu nebo pomocí Discordu můžete mi poslat přímou zprávu. Pokud preferujete e-mail, můžete mi poslat zprávu a připojit soubor jako přílohu. Těším se na vaši zprávu!
	</p>

	<br />

	<div class="grid" in:fly={{ y: -20, delay: 250 }}>
		<Container
			image={"fa-brands fa-github"}
			title={github}
			desc="jara155"
			link="https://github.com/jara155"
		/>
		<Container
			image={"fa-brands fa-discord"}
			title={discord}
			desc="jajaaa."
		/>
		<Container
			image={"fa-brands fa-instagram"}
			title={instagram}
			desc="jajaa.dart"
			link="https://www.instagram.com/jajaa.dart/"
		/>
		<Container
			image={"fa-solid fa-inbox"}
			title={email}
			desc="jaja155"
			link="mailto:jaja155@protonmail.com"
		/>
	</div>
</main>

<style>
	h1 {
		background-image: linear-gradient(var(--contact-color), var(--hover-color));
		-webkit-background-clip: text;
		color: transparent;
	}

	.grid {
		justify-content: center;
		grid-template-columns: repeat(2, 11rem)
	}

	@media (min-width: 600px) {
		.grid {
			display: flex;
			justify-content: center;
		}
	}
</style>
