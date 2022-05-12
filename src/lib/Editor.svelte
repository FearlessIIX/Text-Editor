<!-- ./src/lib/Editor.svelte -->

<script lang="ts">
    import Line from "./Line.svelte"
    import {enabled} from "./utils/Sidebar"

    let sidebarEnabled: Boolean
    enabled.subscribe(storeVal => sidebarEnabled = storeVal)

    // For now we are going to fetch the lines from outside the component
    export let lines: string[] = []

    // Later we are going to want the editor to communitcate back with the main application
</script>

<!-- Maximize component width when Sidebar is disabled, Shrink when Enabled -->
<div class="{sidebarEnabled ? "max-w-[85vw]" : "max-w-[100vw]"} overflow-scroll">

    {#each lines as line, index}
        <Line textContent={line} lineNumber={index + 1}/>
    {/each}

</div>