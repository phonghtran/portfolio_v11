<script>
	import Intro from '../contentBlocks/intro.svelte';

	import { languageConfig } from '../stores.js';
</script>

testing for vercel

{#key $languageConfig[0]['value']}
	<p>{$languageConfig[0]['value']}</p>
	<p>Selected Value: {$languageConfig[0]['labels'][$languageConfig[0]['value']]}</p>
	<!-- <Intro /> -->
{/key}

{#key $languageConfig[1]['value']}
	<p>{$languageConfig[1]['value']}</p>
	<p>Selected Value: {$languageConfig[1]['labels'][$languageConfig[1]['value']]}</p>
	<!-- <Intro /> -->
{/key}

<h2>test</h2>

https://drive.google.com/file/d/1_6T4_bIRXkEsXealpfodUpi5G6Z5Tjfv/view?usp=sharing
https://dai.ly/k5DH2QhVwhfR8yzNFkn

<style>
</style>
