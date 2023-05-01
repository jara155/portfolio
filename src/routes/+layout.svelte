<script>
    import NavigationBar from "../components/NavigationBar.svelte";
    import SocialMedia from "../components/SocialMedia.svelte";

    let screenHeight;
	let screenWidth;
</script>

<svelte:window bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} />

<header>
	<NavigationBar />
</header>

<main class="dark">
    <slot />
</main>

{#if screenHeight > 740 && screenWidth < 600}
	<footer>
		<SocialMedia />
	</footer>
{/if}