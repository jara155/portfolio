<script>
	import { fade, fly, scale } from "svelte/transition";
</script>

<main>
	<div in:fade={{delay: 50}}>
		<h2 style="margin-top: 30px;">Kdo jsem?</h2>
		<p>
			Jsem student střední školy IT, který má rád počítače zejména
			programování desktopových a mobilních aplikací. Jsem introvert, nemám
			problém se bavit s lidmi, ale před vícemi je problém. Jsem přátelský.
		</p>
	</div>

	<br />

	<div in:fade={{delay: 200}}>
		<h2>Oblíbené prog. jazyky&technologie</h2>
		<p>
			Zkusil jsem několik jazyků a technologií a některé mně zaujaly.
			Například Flutter nebo Java nebo Svelte, mimochodem tento web je dělán pomocí Svelte.
		</p>
	</div>

	<br />
</main>

<style></style>
