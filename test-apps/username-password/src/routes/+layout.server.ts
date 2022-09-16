import { auth } from '$lib/lucia.js';
import { handleSession } from "lucia-sveltekit"

export const load = auth.handleServerLoad(handleSession(), async ({getSession}) => {
    console.log(await getSession())
    return {}
})
