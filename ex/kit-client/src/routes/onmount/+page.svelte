<script lang="ts">
	import { onMount } from 'svelte';

	let pkg;
	let em: string[];

	onMount(async () => {
		pkg = await import('@michaelwooley/my-crate');
		console.log(pkg);
		em = Object.keys(pkg);
		// Waiting for init promise to resolve
		// Only comes up after builds
		if ('__tla' in pkg) {
			await pkg.__tla;
		}
		pkg.greet('from onMpountr');

		// pkg = await import('mc-web');
		// console.log(pkg.default)
		// await pkg.init
		// await pkg.default();
	});
</script>

<h3><a href="/">⬅️ back</a></h3>
<h1>Loading with <code>onMount</code></h1>

<div>
	{#if em}
		<code>{JSON.stringify(em)}</code>
	{:else}
		<p>Package not yet loaded...no methods found</p>
	{/if}
</div>
