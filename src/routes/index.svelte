<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Logo from '$lib/Logo.svelte';
	import { browser } from '$app/env';

	let desktop: string;

	if (window.electron && browser) {
		window.electron.receive('from-main', (data: any) => {
			desktop = `Received Message "${data}" from Electron`;
			console.log(desktop);
		});
	}

	const agent = window.electron ? 'Electron' : 'Browser';
</script>

<main class="text-center my-0 mx-auto pt-[2em] px-[1em] pb-[1em]">
	<Logo />

	<h1>Hello {agent}!</h1>

	<Counter id="0" {agent} />

	{#if desktop}
		<br />
		<br />
		{desktop}
	{/if}
</main>

<style>
	main {
		/* animation: fade 1s; */
	}

	/* @keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	} */
</style>
