<script>
	import Todos from './../components/Todos.svelte';
	import Alert from './../components/Alert.svelte';

	let todos = [
		{ id: 1, name: 'Create a Svelte starter app', completed: true },
		{ id: 2, name: 'Create your first component', completed: true },
		{ id: 3, name: 'Complete the rest of the tutorial', completed: false }
	];
	$: console.log('todos', todos);
</script>

<h1>Welcome to SvelteKit.</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Alert />
<Todos bind:todos />

testing for vercel
