<script>
	import { fade, fly } from 'svelte/transition';
	import ContainerWithYear from '../components/ContainerWithYear.svelte';
	import Carousel from '../components/Carousel.svelte';
	import Card from '../components/Card.svelte';

	let isInViewAbout;
	let isInViewExperiences;
	let isInViewProjects;
	import { inview } from 'svelte-inview';
</script>

<main>
	<header>
		<h1>Building <span in:fade={{delay: 400}}>Dreams</span>, Supporting <span in:fade={{delay: 600}}>Swiftly</span></h1>
		<h4 in:fade={{delay: 300}}>
			Crafting <span in:fade={{delay: 400}}>Minecraft</span> plugins and desktop applications that <span in:fade={{delay: 600}}>redefine</span>
			innovation and deliver <span in:fade={{delay: 800}}>seamless</span> experiences.
		</h4>
	</header>

	<h2 use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
	on:change={({ detail }) => {
	  isInViewAbout = detail.inView;
	}}>&nbsp;</h2>
	{#if isInViewAbout}
		<h2 in:fade={{delay: 300}}>About <span>me</span></h2>
		<section id="about" in:fade={{delay: 350}}>
	
		<div>
			<div class="name">
				<h3>Jaroslav Matějka</h3>
				<h4><span>Software</span> Engineer</h4>
			</div>

			<h4>
				<svg
					stroke="currentColor"
					style="color: var(--accent);"
					fill="none"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5 text-accent"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
					><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle
						cx="12"
						cy="10"
						r="3"
					/><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle
						cx="12"
						cy="10"
						r="3"
					/></svg
				>
				Benešov, Czech Republic
			</h4>
			<h4>18 years old</h4>
			<h4>
				<svg
					stroke="currentColor"
					fill="none"
					style="color: var(--accent);"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
					><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line
						x1="16"
						y1="2"
						x2="16"
						y2="6"
					/><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg
				>
				3+ years of experience
			</h4>
		</div>
		<div>
			<p>
				I am a high school IT student passionate about Software. My programming journey began in
				2020, purely by chance, when a friend asked me to help with a FiveM server called "MiroGamingRP". Now i specialize on Minecraft Plugins for Spigot.
			</p>

			<div class="statistics">
				<div class="stat">
					<h3><span>5+</span></h3>
					<p>Positive Ratings</p>
				</div>

				<div class="stat">
					<h3><span>3+</span></h3>
					<p>Projects</p>
				</div>
			</div>
		</div>
	</section>


	<section in:fade={{delay: 600}} id="skills">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
			><path
				fill="#000080"
				d="M112.956.708c-7.912 0-14.335 6.424-14.335 14.336s6.424 14.335 14.335 14.335 14.335-6.41 14.335-14.335c0-7.912-6.424-14.336-14.335-14.336zM64 15.058c-27.02 0-48.956 21.935-48.956 48.955S36.979 112.97 64 112.97c27.02 0 48.956-21.935 48.956-48.956 0-27.02-21.936-48.956-48.956-48.956z"
			/><path
				fill="#fff"
				d="M84.285 29.392c-7.91 0-14.335 6.424-14.335 14.335s6.424 14.336 14.335 14.336 14.336-6.424 14.336-14.336-6.424-14.335-14.335-14.335zM30.773 56.36v32.119h19.961v-3.611H34.87V56.359Zm57.584 8.37c-3.354 0-6.126.975-7.668 2.692-1.055 1.19-1.488 2.516-1.582 4.801h3.705c.311-2.826 1.988-4.098 5.423-4.098 3.3 0 5.153 1.231 5.153 3.435v.974c0 1.542-.92 2.205-3.827 2.556-5.193.663-5.991.839-7.398 1.407-2.69 1.095-4.057 3.164-4.057 6.166 0 4.193 2.908 6.83 7.574 6.83 2.907 0 5.247-1.014 7.843-3.395.257 2.34 1.407 3.395 3.787 3.395.757 0 1.325-.081 2.515-.392v-2.773a2.917 2.917 0 0 1-.798.095c-1.284 0-1.988-.663-1.988-1.812V71.032c0-4.098-3.002-6.302-8.682-6.302zm-33.742.664V83.19c0 3.84 2.867 6.302 7.357 6.302 3.395 0 5.545-1.19 7.709-4.233v3.219h3.3V65.393h-3.652v13.09c0 4.72-2.475 7.804-6.302 7.804-2.907 0-4.76-1.772-4.76-4.544v-16.35Zm38.773 11.67v4.139c0 1.244-.365 1.988-1.46 3.002-1.502 1.366-3.3 2.07-5.464 2.07-2.867 0-4.544-1.367-4.544-3.706 0-2.42 1.636-3.665 5.558-4.233 3.881-.528 4.68-.703 5.91-1.271z"
			/><path
				fill="#808080"
				d="M61.733 0a64.06 64.06 0 0 0-5.57.436l.179 1.458a62.596 62.596 0 0 1 5.442-.426zm5.585.046-.075 1.468a62.432 62.432 0 0 1 5.433.52L72.88.578a63.91 63.91 0 0 0-5.561-.532Zm-16.665 1.31a63.301 63.301 0 0 0-5.409 1.398l.43 1.405a61.835 61.835 0 0 1 5.284-1.367Zm27.72.237-.33 1.431a62.536 62.536 0 0 1 5.262 1.455l.452-1.397a63.998 63.998 0 0 0-5.384-1.489ZM39.98 4.623a63.447 63.447 0 0 0-5.081 2.323l.668 1.308a61.98 61.98 0 0 1 4.964-2.27zm49.012.41-.573 1.353a62.539 62.539 0 0 1 4.929 2.346l.688-1.298a64.012 64.012 0 0 0-5.044-2.4ZM30.04 9.706a63.95 63.95 0 0 0-4.6 3.17l.886 1.173a62.484 62.484 0 0 1 4.494-3.098zm-8.906 6.728a64.247 64.247 0 0 0-3.983 3.918l1.075 1.001a62.774 62.774 0 0 1 3.891-3.827zm-7.61 8.165a64.04 64.04 0 0 0-3.247 4.546l1.231.8a62.571 62.571 0 0 1 3.172-4.44zm-6.086 9.357a63.459 63.459 0 0 0-2.408 5.042l1.352.574a61.99 61.99 0 0 1 2.352-4.925zm113.623.973-1.31.667a62.616 62.616 0 0 1 2.263 4.967l1.362-.55a64.073 64.073 0 0 0-2.315-5.083zM3.075 44.23a63.382 63.382 0 0 0-1.49 5.385l1.432.328a61.91 61.91 0 0 1 1.455-5.26Zm122.166 1.049-1.404.429a62.513 62.513 0 0 1 1.366 5.285l1.437-.306a63.983 63.983 0 0 0-1.399-5.409zM.574 55.108a64.093 64.093 0 0 0-.528 5.561l1.467.075a62.622 62.622 0 0 1 .516-5.434Zm126.988 1.088-1.458.179a62.465 62.465 0 0 1 .428 5.441l1.468-.05a63.916 63.916 0 0 0-.438-5.57zM1.468 66.205 0 66.255a64.082 64.082 0 0 0 .435 5.57l1.458-.179a62.61 62.61 0 0 1-.425-5.441Zm125.018 1.071a62.63 62.63 0 0 1-.518 5.434l1.455.203a64.16 64.16 0 0 0 .53-5.561zM2.79 77.031l-1.437.304a63.332 63.332 0 0 0 1.398 5.41l1.405-.43A61.864 61.864 0 0 1 2.79 77.03Zm122.188 1.046a61.966 61.966 0 0 1-1.457 5.26l1.397.454a63.43 63.43 0 0 0 1.492-5.384zM5.981 87.459l-1.362.551a63.434 63.434 0 0 0 2.323 5.082l1.307-.669a61.968 61.968 0 0 1-2.268-4.964Zm115.627.99a61.98 61.98 0 0 1-2.354 4.925l1.296.69a63.447 63.447 0 0 0 2.41-5.04zM10.944 97.17l-1.245.78a63.949 63.949 0 0 0 3.17 4.6l1.172-.885a62.481 62.481 0 0 1-3.097-4.495zm105.534.904a62.546 62.546 0 0 1-3.173 4.44l1.156.906a64.024 64.024 0 0 0 3.249-4.545zm-98.96 7.8-1.092.983a64.235 64.235 0 0 0 3.917 3.983l1.002-1.074a62.77 62.77 0 0 1-3.827-3.892zm92.24.79a62.76 62.76 0 0 1-3.893 3.826l.983 1.092a64.221 64.221 0 0 0 3.984-3.916zm-84.263 6.648-.906 1.157a64.026 64.026 0 0 0 4.546 3.248l.8-1.232a62.554 62.554 0 0 1-4.44-3.173zm76.16.654a62.475 62.475 0 0 1-4.495 3.096l.78 1.245a63.945 63.945 0 0 0 4.6-3.17zm-67.018 5.294-.691 1.296a63.45 63.45 0 0 0 5.04 2.409l.575-1.352a61.984 61.984 0 0 1-4.924-2.353zm57.775.496a61.956 61.956 0 0 1-4.964 2.268l.551 1.362a63.425 63.425 0 0 0 5.082-2.322zm-47.74 3.77-.453 1.396a63.419 63.419 0 0 0 5.385 1.49l.329-1.43a61.949 61.949 0 0 1-5.26-1.456zm37.632.322a62.05 62.05 0 0 1-5.284 1.365l.304 1.437a63.361 63.361 0 0 0 5.41-1.398zm-27.003 2.122-.203 1.455a64.093 64.093 0 0 0 5.561.529l.075-1.467a62.605 62.605 0 0 1-5.433-.517zm16.335.139a62.635 62.635 0 0 1-5.442.424l.05 1.468a64.114 64.114 0 0 0 5.57-.434z"
			/></svg
		>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
			><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" /><path
				fill="#323330"
				d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
			/></svg
		>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
			><path
				fill="#ffc131"
				d="M86.242 46.547a12.19 12.19 0 0 1-24.379 0c0-6.734 5.457-12.191 12.191-12.191a12.19 12.19 0 0 1 12.188 12.191zm0 0"
			/><path
				fill="#24c8db"
				d="M41.359 81.453a12.19 12.19 0 1 1 24.383 0c0 6.734-5.457 12.191-12.191 12.191S41.36 88.187 41.36 81.453zm0 0"
			/><path
				fill="#ffc131"
				d="M99.316 85.637a46.5 46.5 0 0 1-16.059 6.535 32.675 32.675 0 0 0 1.797-10.719 33.3 33.3 0 0 0-.242-4.02 32.69 32.69 0 0 0 6.996-3.418 32.7 32.7 0 0 0 12.066-14.035 32.71 32.71 0 0 0-21.011-44.934 32.72 32.72 0 0 0-33.91 10.527 32.85 32.85 0 0 0-1.48 1.91 54.32 54.32 0 0 0-17.848 5.184A46.536 46.536 0 0 1 60.25 2.094a46.53 46.53 0 0 1 26.34-.375c8.633 2.418 16.387 7.273 22.324 13.984s9.813 15 11.16 23.863a46.537 46.537 0 0 1-20.758 46.071zM30.18 41.156l11.41 1.402a32.44 32.44 0 0 1 1.473-6.469 46.44 46.44 0 0 0-12.883 5.066zm0 0"
			/><path
				fill="#24c8db"
				d="M28.207 42.363a46.49 46.49 0 0 1 16.188-6.559 32.603 32.603 0 0 0-2.004 11.297 32.56 32.56 0 0 0 .188 3.512 32.738 32.738 0 0 0-6.859 3.371A32.7 32.7 0 0 0 23.652 68.02c-2.59 5.742-3.461 12.113-2.52 18.34s3.668 12.051 7.844 16.77 9.617 8.129 15.684 9.824 12.496 1.605 18.512-.262a32.72 32.72 0 0 0 15.402-10.266 34.9 34.9 0 0 0 1.484-1.918 54.283 54.283 0 0 0 17.855-5.223 46.528 46.528 0 0 1-8.723 16.012 46.511 46.511 0 0 1-21.918 14.609 46.53 46.53 0 0 1-26.34.375 46.6 46.6 0 0 1-22.324-13.984A46.56 46.56 0 0 1 7.453 88.434a46.53 46.53 0 0 1 3.582-26.098 46.533 46.533 0 0 1 17.172-19.973zm69.074 44.473c-.059.035-.121.066-.18.102.059-.035.121-.066.18-.102zm0 0"
			/></svg
		>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
			><path
				d="M 110.43093,16.935847 C 98.552474,-0.076153 75.089104,-5.118154 58.130818,5.695846 l -29.793,19.000001 c -4.030441,2.529 -7.488786,5.871 -10.15468,9.814 -2.665895,3.943 -4.479469,8.399 -5.325138,13.083 a 25.478172,30.64 0 0 0 -0.572094,6.396 c 0.0183,5.831 1.446866,11.571 4.163485,16.729995 -2.546986,3.87201 -4.285721,8.22 -5.110602,12.78201 a 25.347621,30.483 0 0 0 0.345086,14.41199 c 1.072679,4.732998 3.078336,9.203998 5.900559,13.151998 11.877618,17.011 35.393374,22.053 52.299272,11.24 l 29.762238,-19.001 c 4.027946,-2.532 7.482126,-5.877998 10.141386,-9.824998 2.65841,-3.947 4.46282,-8.40699 5.29686,-13.093 0.3825,-2.107 0.57458,-4.244 0.5721,-6.386 -0.007,-5.81999 -1.41778,-11.550995 -4.11194,-16.708995 2.54616,-3.869 4.28489,-8.213 5.11143,-12.771 0.36921,-2.109 0.55713,-4.245 0.56212,-6.386 0.002,-7.595 -2.37152,-15 -6.78697,-21.178 z"
				fill="#ff3e00"
				id="path598"
				style="stroke-width:0.911885"
			/><path
				d="m 55.218941,112.66204 a 28.463375,34.23 0 0 1 -5.953776,0.76 c -3.820895,0.001 -7.585244,-0.925 -10.970416,-2.7 -3.384341,-1.774 -6.288887,-4.343 -8.464177,-7.487 -2.655917,-3.716 -4.082827,-8.171 -4.080332,-12.74 a 15.657767,18.83 0 0 1 0.332613,-3.833 15.424937,18.55 0 0 1 0.719276,-2.782 l 0.562116,-1.708 1.51921,1.156 c 3.528195,2.591 7.470493,4.564 11.658097,5.834 l 1.104275,0.333 -0.103941,1.104 v 0.573 c -0.0025,1.381 0.427408,2.73 1.228174,3.854 0.646933,0.958 1.51838,1.744 2.537839,2.288 a 8.2621121,9.936 0 0 0 3.311997,0.837 8.2513022,9.923 0 0 0 1.79029,-0.229 7.2717563,8.745 0 0 0 1.832699,-0.802 l 29.760566,-19.094 c 0.892236,-0.566 1.627311,-1.349 2.135377,-2.276 0.507236,-0.927 0.771662,-1.968 0.768337,-3.026 -0.0084,-1.381 -0.449027,-2.725 -1.259773,-3.844 -0.656912,-0.946 -1.533347,-1.718 -2.553637,-2.252 a 8.3128357,9.997 0 0 0 -3.307008,-0.81 8.246313,9.917 0 0 0 -1.79029,0.23 6.9383115,8.344 0 0 0 -1.821058,0.801 l -11.346268,7.25 a 24.375558,29.314 0 0 1 -6.04774,2.656 c -1.945787,0.502 -3.945624,0.758 -5.954608,0.76 -3.820063,0 -7.582749,-0.926 -10.967089,-2.698 -3.384341,-1.772 -6.289718,-4.338 -8.467502,-7.478 -2.652591,-3.718 -4.079502,-8.172 -4.080334,-12.74 0.0016,-1.285 0.113089,-2.567 0.332615,-3.833 0.509728,-2.816 1.597374,-5.495 3.196411,-7.867 1.598207,-2.373 3.67205,-4.387 6.089317,-5.914 l 29.792168,-18.99 c 1.869286,-1.19 3.908205,-2.09 6.04774,-2.667 1.945787,-0.499 3.945625,-0.75 5.953776,-0.75 3.82921,-0.01 7.603538,0.91 10.999519,2.681 3.395981,1.77 6.311338,4.34 8.497439,7.486 2.636787,3.727 4.045417,8.184 4.028777,12.75 a 15.748404,18.939 0 0 1 -0.33344,3.844 15.407475,18.529 0 0 1 -0.71845,2.781 l -0.56211,1.708 -1.519216,-1.114 c -3.525699,-2.595 -7.468833,-4.568 -11.658096,-5.834 l -1.104275,-0.343 0.103941,-1.105 v -0.572 c 0,-1.385 -0.429072,-2.735 -1.228174,-3.865 -0.65608,-0.945 -1.530022,-1.716 -2.549481,-2.25 a 8.3086779,9.992 0 0 0 -3.301186,-0.813 8.2213671,9.887 0 0 0 -1.768671,0.271 6.8185708,8.2 0 0 0 -1.831867,0.802 l -29.792165,18.99 a 5.8797701,7.071 0 0 0 -1.836857,1.79 4.7505482,5.713 0 0 0 -0.962914,2.377 5.0365955,6.057 0 0 0 -0.135541,1.104 c -8.31e-4,1.378 0.42824,2.722 1.228174,3.844 0.655248,0.945 1.530021,1.717 2.548649,2.25 a 8.2986996,9.98 0 0 0 3.301186,0.812 8.2471446,9.918 0 0 0 1.79029,-0.23 6.9433007,8.35 0 0 0 1.832699,-0.801 l 11.367057,-7.292 a 24.218399,29.125 0 0 1 6.04774,-2.656 28.52574,34.305 0 0 1 5.953776,-0.76 c 3.821727,0 7.586076,0.925 10.972078,2.697 3.386003,1.772 6.293877,4.339 8.473325,7.48 2.652591,3.717 4.079498,8.171 4.080338,12.74 0.003,1.299 -0.11226,2.596 -0.34343,3.874 -0.506403,2.817 -1.594046,5.497 -3.192254,7.87 -1.599037,2.372 -3.673715,4.385 -6.093476,5.911 l -29.739779,18.99 a 24.308205,29.233 0 0 1 -6.057719,2.667 z"
				fill="#ffffff"
				id="path600"
				style="stroke-width:0.911885"
			/></svg
		>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
			><path
				fill="#0074BD"
				d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
			/><path
				fill="#EA2D2E"
				d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
			/><path
				fill="#0074BD"
				d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
			/><path
				fill="#EA2D2E"
				d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
			/><path
				fill="#0074BD"
				d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
			/></svg
		>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
			><g fill="#3FB6D3"
				><path
					d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"
				/></g
			><path fill="#27AACD" d="M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z" /><path
				fill="#19599A"
				d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z"
			/><linearGradient
				id="flutter-original-a"
				gradientUnits="userSpaceOnUse"
				x1="59.365"
				y1="116.36"
				x2="86.825"
				y2="99.399"
				><stop offset="0" stop-color="#1b4e94" /><stop offset=".63" stop-color="#1a5497" /><stop
					offset="1"
					stop-color="#195a9b"
				/></linearGradient
			><path fill="url(#flutter-original-a)" d="M61.6 113.1l30.8-8.4-10.8-10.8z" /></svg
		>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"
			><path
				fill="#9B4F96"
				d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
			/><path
				fill="#68217A"
				d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
			/><path
				fill="#fff"
				d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
			/></svg
		>
	</section>
	{/if}
	<!-- <h2>Experiences</h2> -->
	<section id="experiences" 
	use:inview={{ unobserveOnEnter: true, rootMargin: "-10%" }}
	on:change={({ detail }) => {
	  isInViewExperiences = detail.inView;
	}}>

		{#if isInViewExperiences}
			
			<div in:fade={{delay: 400}} class="timeline">
				<div class="vertical-line"></div>
				
				<div in:fade={{delay: 700}} class="box left">
					<a href="/not_found">
						<i class=""></i>
					</a>
					<div claas="info">
						<Card title={"2023-2023"} subtitle={"Minecraft Developer"} desc={"I held the position of Developer on the Minecraft server AlteraCraft. As part of the team, I focused on developing custom plugins and creating the website."} stitky={[["Yaml"], ["Java"]]}/>
					</div>
				</div>

				<div in:fade={{delay: 1000}} class="box right">
					<a href="https://www.basicland.cz/" target="_blank">
						<i class="fa-solid fa-up-right-from-square"></i>
					</a>
					<div claas="info">
						<Card title={"2022-2023"} subtitle={"Minecraft Administrator"} desc={"I worked as a Minecraft administrator on the BasicLand server, focusing on editing configuration files and managing server settings."} stitky={[["Yaml"]]}/>
					</div>
				</div>
				
				<div in:fade={{delay: 1300}} class="box left">
					<a href="/not_found">
						<i class=""></i>
					</a>
					<div claas="info">
						<Card title={"2022-2022"} subtitle={"FiveM Developer"} desc={"I contributed as a helper on the NemesisRP server, where my responsibilities included creating custom scripts and enhancing gameplay."} stitky={[["LUA"]]}/>
					</div>
				</div>
				
				<div in:fade={{delay: 1600}} class="box right">
					<a href="/not_found">
						<i class=""></i>
					</a>
					<div claas="info">
						<Card title={"2020-2021"} subtitle={"FiveM Developer"} desc={"I worked as a FiveM developer on servers such as MiroGamingRP, MGRP, and MJPRP. My focus was on server development and optimization, as well as creating custom scripts."} stitky={[["LUA"]]}/>
					</div>
				</div>
				
				
			</div>
		{/if}
	</section>

	<h2 use:inview={{ unobserveOnEnter: true, rootMargin: "-10%" }}
	on:change={({ detail }) => {
	  isInViewProjects = detail.inView;
	}}>&nbsp;</h2>
	{#if isInViewProjects}	
		<h2>Projects</h2>
		<section id="projects" in:fade={{delay: 500}}>
			<Card title={"JajaDungeons"} desc={"A Minecraft plugin, packed with powerful features, this plugin is perfect for creating dynamic, replayable challenges that keep players coming back for more."} img={"https://www.spigotmc.org/data/resource_icons/118/118699.jpg?1722987602"} stitky={[["Java"]]} link={"https://www.spigotmc.org/resources/118699/"}/>
			<Card title={"JajaSell"} desc={"A Minecraft plugin, designed specifically for bulk item transactions. This plugin offers players a fast and efficient way to sell their items while providing server admins with control over pricing and mechanics."} img={"https://www.spigotmc.org/data/resource_icons/109/109528.jpg?1712446529"} stitky={[["Java"]]} link={"https://www.spigotmc.org/resources/109528/"}/>
			<Card title={"Audio Player"} desc={"This app is designed to play audio directly from external storage while offering features for the ultimate listening experience."} img={"project-icons/audio-player.png"} stitky={[["Flutter"]]} link={"https://github.com/jara155/Audio-Player"}/>
			<Card title={"Reminder"} desc={"A application inspired by Reminders in Mac OS, designed to sync all your lists and reminders with a MySQL database. This app provides intuitive interface for managing your to-dos and accessible across devices."} img={"project-icons/reminder.png"} stitky={[["Flutter"]]} link={"https://github.com/jara155/Reminder"}/>
			<Card title={"Terminal"} desc={"A tool to customize terminal and install addons."} img={"project-icons/reminder.png"} stitky={[["Bash"]]} link={"https://github.com/jara155/terminal"}/>
		</section>
	{/if}
</main>

<style>
	header {
		z-index: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		margin-bottom: 5rem;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.01)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
	}

	@media (max-width: 600px) {
		/* Mobile */

		#about {
			display: flex;
			flex-direction: column;
		}

		.name {
			margin-bottom: .5rem;
		}

		.name > h3 {
			margin-bottom: 0;
		}

		#about > div > h4 {
			margin-block: 0;
		}

		.statistics {
			display: flex;
			justify-content: space-evenly;
			/* gap: 1.5rem; */
			margin: auto;
			margin-bottom: 2rem;
		}

		.stat {
			margin-top: .5rem;
		}
		
		.stat > h3 {
			font-size: 27px;
		}

		.stat > p, .stat > h3 {
			margin: 0;
		}

		.box i {
			display: none;
		}
	}

	@media (min-width: 600px) {
		/* Desktop */
		header {
			display: flex;
		}

		.name {
			margin-bottom: .75rem;
		}

		.name > h3 {
			margin-bottom: 0;
		}

		#about {
			display: grid;
		}

		#about > div > p {
			text-align: left;
		}

		.statistics, .stat {
			display: flex;
			justify-content: space-evenly;
		}

		.stat {
			gap: .5rem;
			margin-right: 1rem;
			margin-bottom: 2rem;
		}

		.left {
			left: 10.5%;
		}

		.right {
			left: 50%;
		}

		.right i {
			left: -28px;
		}

		.box {
			position: relative;
			width: 32%;
			padding: 1rem 3rem;
		}

		.box i {
			display: flex;
		}

		#projects {
			width: 40%;
			margin: auto;
		}
	}

	span {
		color: var(--accent);
	}

	svg {
		margin-right: 0.25rem;
	}

	.timeline {
		position: relative;
		max-width: 1200px;
		height: fit-content;
		margin: 80px auto;
	}

	.info {
		padding: 1rem 1.5rem;
		border-radius: var(--radius);
	}

	.box i {
		position: absolute;
		background-color: var(--fg);
		color: var(--accent);
		top: 30px;
		width: 50px;
		height: 50px;
		align-items: center;
		justify-content: center;
		font-size: 25px;
		border-radius: 50px;
		border: 4px solid var(--accent);
		right: -25px;
		z-index: 10;
	}

	.vertical-line {
		position: absolute;
		top: 0;
		left: 50%;
		width: 6px;
		height: 100%;
		transform: translateX(-50%);
		border-radius: var(--radius);
		background-color: rgb(21, 20, 20);
	}

	.info::after {
		content: "";
		position: absolute;
		top: 25px;
		width: 0;
		height: 0;
		border-top: 14px solid transparent;
		border-bottom: 14px solid transparent;
		border-left: 14px solid white;
		right: -14px;
		/* z-index: 10; */
	}

	.stat > h3 {
		font-weight: bold;
	}

	#about {
		justify-content: center;
		text-align: left;
		grid-template-columns: repeat(2, minmax(0, 30rem));
	}

	#projects, #experiences {
		display: grid;
		justify-content: center;
		align-items: center;
	}

	#skills {
		display: flex;
		justify-content: center;
		margin-bottom: 5rem;
	}

	#skills > svg {
		width: 80px;
		margin-inline: 1rem;
	}
</style>
