<script>
	import { techDemos } from '../../stores.js';
</script>

<div id="introTechDemos">
	<div class="header">
		<h3>Tech Demos</h3>

		<div class="cta"><a href="/techdemos">View Demos</a></div>
	</div>
	<!-- header -->

	<div class="containerTechDemos">
		{#each techDemos as option, index}
			<div class="techdemo">
				<h6>{option.name}</h6>
				<p>{option.desc}</p>
			</div>
			<!-- techdemo -->
		{/each}
	</div>
	<!-- containerTechDemos -->
</div>

<!-- introWork -->

<style>
	h6 {
		margin-top: 0;
	}

	.header {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.header h3 {
		margin-top: 0;
	}

	#introTechDemos {
		margin: 2rem 0;
		padding: 0 1rem;
	}
	.containerTechDemos {
		margin-top: 1rem;
		flex-direction: column;
	}

	.techdemo {
		align-items: center;
		background-color: var(--gray0);
		border-radius: var(--borderRadius);

		justify-content: flex-start;
		margin-bottom: 0.5rem;
		padding: 1rem;
	}

	.techdemo * {
		display: inline-block;
	}

	.techdemo p {
		font-size: 0.875rem;
		line-height: 1.125rem;
		margin: 0;
	}

	@media (min-width: 600px) {
		#introTechDemos {
			margin-top: 2rem;
			padding: 0;
		}

		.containerTechDemos {
			align-items: stretch;
			display: flex;
			flex-direction: row;
			gap: 1rem;
			justify-content: space-around;
		}

		.techdemo {
			align-items: flex-start;
			display: flex;
			flex: 1;
			justify-content: flex-start;
			flex-direction: column;
			padding: 1rem;
		}

		.techdemo p {
			margin: 0;
		}
	}
</style>
