<!-- ./src/lib/Editor.svelte -->

<script>
    import Line from "./Line.svelte"
    import { STATE, SIDE } from "./utils/Utils"

    // For now we are going to fetch the lines from outside the component
    export let lines = []

    // Later we are going to want the editor to communitcate back with the main application
</script>

<!-- Application editor -->
<div class="max-w-[85vw] overflow-scroll">
{#each lines as line, index}
    <Line textContent={line} lineNumber={index + 1}/>
{/each}
</div>