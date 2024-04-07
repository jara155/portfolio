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
			{#if screenSize < 800}
				<h1 class="owner-name">Jája.</h1>
			{:else}
				<a href="/">
					<h1 class="owner-name">Jája.</h1>
				</a>
			{/if}
		{/if}
		<li>
			<ul class="navigation-sections">
				<li>
					<a href="/">
						<h2>Domů</h2>
					</a>
				</li>
				<li>
					<a href="/services">
						<h2 style="color:var(--services-color)">Služby</h2>
					</a>
				</li>
				<li>
					<a href="/projects">
						<h2 style="color:var(--projects-color)">Projekty</h2>
					</a>
				</li>
				<li>
					<a href="/contact">
						<h2 style="color:var(--contact-color)">Kontakt</h2>
					</a>
				</li>
			</ul>
		</li>
		{#if withSocialMedia && screenSize > 600}
			<li class="social-medias">
				<SocialMedia />
			</li>
		{/if}
	</ul>
</nav>

<style>
	@media (max-width: 600px) {
		.navigation-sections {
			padding: 0;
			margin-top: 5px;
			font-size: 13px;
		}
	}

	@media (min-width: 600px) {
		h1:hover {
			animation: shine 200ms;
			animation-fill-mode: forwards;
		}
	}

	p {
		padding: 0;
		margin: 0;
	}

	h1 {
		text-decoration: underline;
	}

	h2 {
		color: var(--primary-color);
	}

	/* h1:hover, */
	h2:hover {
		animation: shine 200ms;
		animation-fill-mode: forwards;
	}
</style>
