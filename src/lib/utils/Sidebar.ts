// ./src/lib/utils/Sidebar.ts

import { SIDE } from "./Utils"
import { writable } from "svelte/store"

export {
    side, setSide,
    enabled, setEnabled
}

let side = writable(SIDE.LEFT)
let enabled = writable(true)

/** Overwrites value of 'side' store with new value */
function setSide(newSide: SIDE) {
    side.set(newSide)
}

/** Overwrties value of 'enabled' store with new value */
function setEnabled(state: boolean) {
    enabled.set(state)
}