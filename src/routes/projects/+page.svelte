<script>
	import RowContainer from "../../components/RowContainer.svelte";
	import { fly, fade } from "svelte/transition";

	export let data;
</script>

<main in:fade>
	<h1 class="page-title">Projekty</h1>
  
	<h2>Minecraft</h2>

	<div in:fly={{ y: -20, delay: 250 }}>
		{#each data.projects as project}
			<RowContainer
				image={"https://www.spigotmc.org/" + project.icon.url + project.icon.data}
				title={project.name.split("|")[0].replace("[1.13-1.20]", "")}
				desc={project.name.split("|")[1]}
				link="https://www.spigotmc.org/resources/{project.id}/"
				stitky={[
					[project.testedVersions[0] + "-" + project.testedVersions[project.testedVersions.length-1], "green"],
					[project.file.type, "red"],
				]}
			/>
		{/each}
	</div>
	
	<h2>Flutter</h2>
	<div in:fly={{ y: -20, delay: 250 }}>
	
		<RowContainer
			title="Audio Player"
			desc="Local audio player, that can play audio from external storage in mobile "
			image="project-icons/audio-player.png"
			link="https://github.com/jara155/Audio-Player"
			stitky={[["Mobile", "green"], [".dart","red"]]}
		/>
		<RowContainer
			title="Reminder"
			desc="Remake of Mac Reminders"
			link="https://github.com/jara155/Reminder"
			image="project-icons/reminder.png"
			stitky={[["Desktop", "green"], [".dart","red"]]}
		/>
	
	</div>
</main>

<style>
	h1 {
		background-image: linear-gradient(var(--projects-color), var(--hover-color));
		-webkit-background-clip: text;
		color: transparent;
	}
</style>
