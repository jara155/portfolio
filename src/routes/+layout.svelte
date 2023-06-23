<script>
    import NavigationBar from "../components/NavigationBar.svelte";
    import SocialMedia from "../components/SocialMedia.svelte";
	import { page } from '$app/stores';   

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

<footer>
	{#if screenHeight > 740 && screenWidth < 600 && $page.url.pathname != "/contact"}
		<SocialMedia />
	{/if}
	<p> @ Copyright Jája 2023</p>
	<p> All rights reserved</p>
</footer>

<style>
	p {
		margin-top: 0;
		margin-bottom: 0; 
	}
</style>