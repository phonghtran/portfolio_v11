<script>
	import Slider from '../components/Slider.svelte';
	import Select from './Select.svelte';
	import Dropdown from './Dropdown.svelte';
</script>

<div class="nav">
	<div class="center">
		<Dropdown />
		<Slider targetSetting="1" />
		<Select />
	</div>
</div>

<!-- nav -->

<style>
	.nav {
		background-color: lightgrey;
		position: fixed;
		text-align: center;
		top: 0;
		width: 100%;
	}

	.center {
		align-content: start;
		align-items: center;
		display: flex;
		margin: 0 auto;
		max-width: 800px;
		width: 100%;
	}
</style>
