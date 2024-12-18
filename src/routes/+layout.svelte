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
	<p> @ Copyright Jája {new Date().getFullYear()}</p>
	<p> All rights reserved</p>
	<!-- <li class="social-medias"> -->
		<SocialMedia />
	<!-- </li> -->
</footer>

<style>
	p {
		margin-top: 0;
		margin-bottom: 0; 
	}

	@media (min-width: 600px) {
		header {
			position: fixed;
		}
	}
	
	header {
		top: 0;
		width: 100%;
	}
</style>