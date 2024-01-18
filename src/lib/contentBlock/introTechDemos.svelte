<script>
	import { techDemos } from '../../stores.js';
</script>

<div class="introTechDemos">
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

	.introTechDemos {
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
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		padding: 1rem;
	}
	.techdemo h6 {
		flex: 1;
	}
	.techdemo p {
		font-size: 0.875rem;
		line-height: 1.125rem;
		margin: 0 0 0 0.5rem;
		text-align: right;
	}

	@media (min-width: 600px) {
		.introTechDemos {
			margin-top: 0;
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
			display: block;
			flex: 1;

			padding: 1rem;
		}

		.techdemo p {
			margin: 0;
			text-align: left;
		}
	}
</style>
