<!-- ./src/lib/Sidebar.svelte -->

<script lang="ts">
    import { enabled } from "./utils/Sidebar"
    
    let sidebarEnabled: boolean
    enabled.subscribe(storeVal => sidebarEnabled = storeVal)
</script>

 <!-- Allow sidebar to be disabled by some User-Driven Event -->
{#if sidebarEnabled}

<div class="w-[15vw] border-2 border-solid border-red-500">
    Sidebar placeholder
</div>

{/if}