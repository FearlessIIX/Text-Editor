<script lang="ts">
	import { onMount } from 'svelte';
	import "../app.css"

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<slot />
{/if}

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>