<script>
	import Slider from './Slider.svelte';
	import Select from './Select.svelte';
	import Dropdown from './Dropdown.svelte';
</script>

<div class="nav">
	<div class="center">
		<Dropdown />
		<Select />
		<Slider />
	</div>
</div>

<!-- nav -->

<style>
	.nav {
		margin-top: 0.5rem;

		text-align: center;
	}

	.center {
		align-items: center;
		display: flex;
		justify-content: start;
		background-color: lightgrey;
		border-radius: 1rem;

		margin: 0 auto;
		max-width: 80%;
		padding: 0 2rem;
		text-align: left;
	}
</style>
