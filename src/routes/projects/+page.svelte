<script>
	import RowContainer from "../../components/RowContainer.svelte";
	import { fly, fade } from "svelte/transition";
</script>

<main in:fade>
	<h1 class="page-title">Projekty</h1>

	<h2>Nedávné</h2>

	<div in:fly={{ y: -20, delay: 250 }}>
		<RowContainer
			image="project-icons/jajasell.png"
			title="Sell"
			desc="Minecraft plugin adds Sell menu with offer and npcs."
			link="https://www.spigotmc.org/resources/1-15-1-19-%EF%BC%84jajasell-%E2%9C%85-npcs-sellmenu-offer-menu-%E2%9C%A8-customizable.109528/"
			stitky={[["Java", "red"]]}
		/>
		<RowContainer
			image="project-icons/jajaskilltree.png"
			title="SkillTree"
			desc="Minecraft plugin adds Skilltree."
			link="https://www.spigotmc.org/resources/1-13-1-19-jajaskilltree-%E2%9C%85-gui-custom-skills-%E2%9C%A8-customizable.109725/"
			stitky={[["Java", "red"]]}
		/>
	</div>

	<h2 in:fade={{ delay: 300 }}>Jsem nejvíc hrdý</h2>
	<div in:fly={{ y: -20, delay: 400 }}>
		<RowContainer
			image="project-icons/jajasell.png"
			title="Sell"
			desc="Minecraft plugin adds Sell menu with offer and npcs."
			link="https://www.spigotmc.org/resources/1-15-1-19-%EF%BC%84jajasell-%E2%9C%85-npcs-sellmenu-offer-menu-%E2%9C%A8-customizable.109528/"
			stitky={[["Java", "red"]]}
		/>
	
		<RowContainer
			title="Audio Player"
			desc="Local audio player, that can play audio from external storage in mobile "
			image="project-icons/audio-player.png"
			link="https://github.com/jara155/Audio-Player"
			stitky={[["Flutter"]]}
		/>
		<RowContainer
			title="Reminder"
			desc="Remake of Mac Reminders"
			link="https://github.com/jara155/Reminder"
			image="project-icons/reminder.png"
			stitky={[["Flutter"]]}
		/>
	</div>
</main>

<style></style>
