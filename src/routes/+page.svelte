<script>
	import { fade, fly, scale } from "svelte/transition";
	import Container from "../components/Container.svelte";
	import ContainerWithYear from "../components/ContainerWithYear.svelte";
</script>

<main>

	<div class="paragh" in:fade={{delay: 50}}>
		<h2 style="margin-top: 30px;">Kdo jsem?</h2>
		<p>
			Jsem student střední školy IT, který má rád počítače zejména
			programování desktopových a mobilních aplikací. Jsem introvert, nemám
			problém se bavit s lidmi, ale před vícemi je problém. Jsem přátelský.
		</p>
	</div>

	<br />

	<div class="paragh" in:fade={{delay: 200}}>
		<h2>Oblíbené prog. jazyky&technologie</h2>
		<p>
			Zkusil jsem několik jazyků a technologií a některé mně zaujaly.
			Například Flutter nebo Java nebo Svelte, mimochodem tento web je dělán pomocí Svelte.
		</p>
	</div>



	<div class="zkusenosti-element">

		<h2 in:fade={{delay: 250}}>Pracovní zkušenosti</h2>
	
		<div class="zkusenosti" in:fly={{ y: -25, delay: 300 }}>
			<ContainerWithYear
				title="FiveM Developer"
				year="21.6.2020-23.9.2021"
				img="experiences/mjp.png"
				desc="Měl jsem možnost být FiveM developer na serverech MiroGamingRP, MGRP a MJPRP. Zaměřoval na vývoj a optimalizaci serverů a tvorbu scriptů."
				link="Web zrušen"
			/>
			<ContainerWithYear
				title="FiveM Developer"
				year="14.7.2022-24.9.2022"
				img="experiences/nemesis.png"
				desc="Působil jsem jako výpomoc na serveru NemesisRP. Mým úkolem bylo pomáhat developerům."
				link="nemesisrp.eu"
				color="#fff94a"
			/>
			<ContainerWithYear
				title="Minecraft Správce"
				year="15.12.2022-26.1.2023"
				img="experiences/basicland.png"
				desc="Působil jsem jako Minecraft správce na serveru BasicLand. Mým úkolem byla správa a údržba serveru."
				link="basicland.cz"
				color="#ffca5f"
			/>
			<ContainerWithYear
				title="Minecraft Developer"
				year="10.5.2023-DNES"
				color="#ff4b7c"
				img="experiences/altera.png"
				desc="Působím na pozici Developer na Minecraft serveru AlteraCraft. Jako součást týmu se zaměřuji na vývoj a tvorbu custom pluginů."
				link="web.alteracraft.eu"
			/>
		</div>
	</div>



	<br />
</main>

<style>

	.zkusenosti-element {
		margin-top: 10em;
		margin-bottom: 1em;
		/* background-color: #303030; */
	}

	@media (max-width: 600px) {
		.zkusenosti {
			display: grid;
		}
	}
	
	@media (min-width: 600px) {
		.zkusenosti {
			display: flex;
			align-items: center;
			place-content: center;
		}
	}

</style>
