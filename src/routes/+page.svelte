<script>
	import { fade, fly } from "svelte/transition";
	import ContainerWithYear from "../components/ContainerWithYear.svelte";
</script>

<main>

	<div class="paragh" in:fade={{delay: 50}}>
		<h2 class="whoami" style="margin-top: 27px;">Kdo jsem?</h2>
		<p>
			Jsem student střední školy IT, který má rád počítače. Zejména
			programování desktopových/mobilních aplikací a minecraft pluginů. Začal jsem programovat v roce 2020 a tvořil jsem různé projekty. Jsem extrovertní introvert, záleží na lidech okolo.
		</p>
	</div>

	<br />

	<div class="paragh" in:fade={{delay: 200}}>
		<h2>Oblíbené prog. jazyky&technologie</h2>
		<p>
			Zkusil jsem několik jazyků a technologií a některé mně zaujaly. Například Flutter, Java, Sveltekit a Svelte, mimochodem tento web je dělán pomocí SvelteKit.
		</p>
	</div>



	<div class="zkusenosti-element">

		<h2 in:fade={{delay: 250}}>Pracovní zkušenosti</h2>
	
		<div class="zkusenosti" in:fly={{ y: -25, delay: 300 }}>
			<ContainerWithYear
				title="FiveM Developer"
				year="21.6.2020-23.9.2021"
				img="experiences/mjp.png"
				desc="Působil jsem jak FiveM developer na serverech MiroGamingRP, MGRP a MJPRP. Zaměřoval jsem se na vývoj a optimalizaci serverů a tvorbu vlastních scriptů."
				color=#6a90f7
				link=""
			/>
			<ContainerWithYear
				title="FiveM Developer"
				year="14.7.2022-24.9.2022"
				img="experiences/nemesis.png"
				desc="Působil jsem jako výpomoc na serveru NemesisRP. Mým úkolem bylo tvořit vlastní scripty a zlepšit hratelnost."
				color="#fff94a"
				link=""
			/>
			<ContainerWithYear
				title="Minecraft Správce"
				year="15.12.2022-26.1.2023"
				img="experiences/basicland.png"
				desc="Působil jsem jako Minecraft správce na serveru BasicLand. Mým úkolem byla správa a údržba serveru."
				color="#ffca5f"
				link="basicland.cz"
			/>
			<ContainerWithYear
				title="Minecraft Developer"
				year="10.5.2023-15.6.2023"
				color="#ff4b7c"
				img="experiences/altera.png"
				desc="Působím na pozici Developer na Minecraft serveru AlteraCraft. Jako součást týmu se zaměřuji na vývoj a tvorbu custom pluginů a webu."
				link="web.alteracraft.eu"
			/>
		</div>
	</div>



	<br />
</main>

<style>

	.whoami {
		background-image: linear-gradient(var(--projects-color), var(--hover-color));
		-webkit-background-clip: text;
		color: transparent;
	}

	.zkusenosti-element {
		margin-top: 9em;
		margin-bottom: 1em;
		/* background-color: #303030; */
	}

	@media (max-width: 600px) {
		.zkusenosti {
			display: grid;
			gap: 20px;
		}
	}
	
	@media (min-width: 600px) {
		.zkusenosti {
			display: grid;
			grid-template-columns: repeat(4, 17.5rem);
			justify-content: center;
		}
	}

</style>
