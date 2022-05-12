<script lang="ts">
	import { browser } from '$app/env';
	import { STATE, SIDE } from "../lib/utils/Utils"

	import Line from "../lib/Line.svelte"
	import Sidebar from "../lib/Sidebar.svelte"
	import Editor from "../lib/Editor.svelte"


	let desktop: string;

	if (window.electron && browser) {
		window.electron.receive('from-main', (data: any) => {
			desktop = `Received Message "${data}" from Electron`;
			console.log(desktop);
		});
	}

	const agent = window.electron ? 'Electron' : 'Browser';

	let lines : string[] = [
		"This is the first line", 
		"This is being used to simulate a basic design", 
		"", 
		"this is line four",
		"This is going to be a really long line to test what happens when the text goes off the screen.. Did I choose the right styles for what I need??? We have to make this line long enough to go offscreen to find out".repeat(2)
	]
</script>

<!-- <svelte:window on:keydown="{e => console.log(e)}"/> -->

<main class="text-center">

	<div class="flex float-left h-screen">

		{#if STATE.sidebar.side == SIDE.LEFT}
			<Sidebar/>
		{/if}

		<Editor lines={lines}/>

		{#if STATE.sidebar.side == SIDE.RIGHT}
			<Sidebar/>
		{/if}
	</div>

</main>