<script lang="ts">
	null;
</script>

<h3><a href="/">⬅️ back</a></h3>
<h1>Loading with <code>await</code> flow control</h1>

<div>
	{#await import('@michaelwooley/my-crate')}
		<div>Loading wasm.</div>
	{:then wasm}
		<div>
			{console.log(wasm)}
			<code>{JSON.stringify(Object.keys(wasm))}</code>
			{#if '__tla' in wasm}
				{console.log('waiting!!')}
				{#await wasm.__tla}
					<div>Once promise is resolved, can call "greet"</div>
				{:then}
					{wasm.greet('asf')}
				{/await}
			{:else}
				{console.log('Not in prod mode...')}
				{wasm.greet('asf')}
			{/if}
		</div>
	{:catch e}
		<div>ERROR!!! {`${e}`}</div>
	{/await}
</div>
