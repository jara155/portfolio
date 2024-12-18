<script>
	import SocialMedia from "./SocialMedia.svelte";
	export let withName = true;
	export let withSocialMedia = true;

	let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

<nav>
	<ul class="navigation">
		{#if withName}
			<a href="/">
				<h1 class="owner-name">Jája<span>.</span></h1>
			</a>
		{/if}
		<li>
			<ul class="navigation-sections">
				<li>
					<a href="#about">
						<h3>About</h3>
					</a>
				</li>
				<li>
					<a href="#projects">
						<h3 id="projects">Projects</h3>
					</a>
				</li>
				<li>
					<a href="/contact">
						<h3>Contact</h3>
					</a>
				</li>
			</ul>
		</li>
	</ul>
</nav>

<style>

	nav {
		position: relative;
		z-index: 15;
		background-color: rgba(10, 9, 9, 0.6);
	}

	h3 {
		font-weight: bold;
	}

	span {
		color: white;
	}

	@media (max-width: 600px) {
		.navigation-sections {
			padding: 0;
			margin-top: 5px;
		}
	}

	@media (min-width: 600px) {
		ul {
			margin-inline: 2rem;
		}

		h1:hover {
			animation: shine 200ms;
			animation-fill-mode: forwards;
		}
	}

	#projects {
		color: var(--accent);
	}
</style>
