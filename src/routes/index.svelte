<!-- ./src/routes/index.svelte -->

<script lang="ts">
	import {  SIDE } from "../lib/utils/Utils"
	import { side, setSide, enabled, setEnabled } from "../lib/utils/Sidebar"
	import { get } from "svelte/store";

	import Sidebar from "../lib/Sidebar.svelte"
	import Editor from "../lib/Editor.svelte"


	let sidebarSide: SIDE
	side.subscribe(storeVal => sidebarSide = storeVal)

	let lines : string[] = [
		"This is the first line", 
		"This is being used to simulate a basic design", 
		"", 
		"this is line four",
		"This is going to be a really long line to test what happens when the text goes off the screen.. Did I choose the right styles for what I need??? We have to make this line long enough to go offscreen to find out".repeat(2)
	]

	// **** TODO: move this into '../lib/utils/Sidebar.ts', and make this a more streamlined Event-Handler
	function handleKeyDown(event : KeyboardEvent) {
		if (event.key == "=" && get(enabled)) {
			setSide(get(side) == SIDE.LEFT ? SIDE.RIGHT : SIDE.LEFT)
		}
		if (event.key == "-") {
			setEnabled(get(enabled) ? false : true)
		}
	}
</script>

<svelte:window on:keydown="{handleKeyDown}"/>

<main class="text-center">

	<div class="flex float-left h-screen">

		{#if sidebarSide == SIDE.LEFT}
			<Sidebar/>
		{/if}

		<Editor lines={lines}/>

		{#if sidebarSide == SIDE.RIGHT}
			<Sidebar/>
		{/if}
	</div>

</main>