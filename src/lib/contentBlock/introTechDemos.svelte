<script>
	import { techDemos } from '../../stores.js';
</script>

<div id="introTechDemos" class="introSectionPadding">
	<div class="header">
		<h3>Tech Demos</h3>
	</div>
	<!-- header -->

	<div class="containerTechDemos">
		{#each techDemos as option, index}
			<div class="techdemo" id="techdemo{index}">
				<div class="wrapperFlex">
					<div class="text">
						<h6>{option.name}</h6>
						<p>{option.desc}</p>
					</div>

					<div>
						<p class="cta"><a href="/techdemos/{option.label}">View Demo</a></p>
					</div>
				</div>
				<div class="img">
					<a href={option.url}> <img src={option.img} alt="" /></a>
				</div>
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
		margin-bottom: 1rem;
		padding: 1rem;
	}

	.wrapperFlex {
		align-items: center;

		display: flex;
		flex: 1;
		justify-content: space-between;

		flex-direction: row;
		width: 100%;
	}

	.techdemo p {
		font-size: 0.875rem;
		line-height: 1.125rem;
		margin: 0;
	}

	.techdemo .img {
		display: none;
	}

	#techdemo0 .img img {
		width: 100%;
	}

	@media (min-width: 600px) {
		.containerTechDemos {
			display: grid;
			flex-direction: row;
			column-gap: 1rem;
			display: grid;
			grid-template-columns: repeat(12, [col-start] 1fr);
			row-gap: 0rem;
		}

		.techdemo {
			grid-column: span 4;
			grid-row: 2;

			padding: 1rem;
		}

		.wrapperFlex {
			align-items: flex-start;
			flex-direction: column;
			justify-content: flex-start;
		}

		.wrapperFlex .text {
			flex: 1;
		}

		.techdemo p {
			margin: 0;
		}

		.techdemo .cta {
			flex: 0;
			margin-top: 1rem;
		}

		#techdemo0 {
			display: flex;
			grid-column: col-start 1 / span 12;
			grid-row: 1;
			padding: 0;
		}

		#techdemo0 .text {
			flex: 1;
		}

		#techdemo0 .wrapperFlex {
			padding: 1rem;
		}

		#techdemo0 .img {
			display: block;
			overflow: hidden;
			height: 7rem;
			width: 7rem;
		}

		#techdemo0 .img a img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
