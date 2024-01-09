<script>
	import { caseStudies } from '../../stores.js';
</script>

<div class="introCaseStudies">
	<div class="header">
		<h3>Case Studies</h3>
	</div>
	<!-- header -->

	<div class="containerCaseStudies">
		{#each caseStudies as option, index}
			<div class="casestudy">
				<div class="img">
					<a href={option.url}> <img src={option.img} alt="" /></a>
				</div>
				<div class="text">
					<div class="blurb">
						<h4>{option.name}</h4>
						<p>{option.desc}</p>
					</div>
					<div class="cta"><a href={option.url}>View Work</a></div>
				</div>
			</div>
			<!-- casestudy -->
		{/each}
	</div>
	<!-- containerCaseStudies -->
</div>

<!-- introWork -->

<style>
	h4 {
		margin-top: 0;
	}
	.introCaseStudies {
		margin: 4rem 0;
		padding: 0 1rem;
	}
	.containerCaseStudies {
		margin-top: 1rem;
	}

	.casestudy {
		align-items: top;
		background-color: var(--gray0);
		border-radius: var(--borderRadius);
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
		padding: 1rem;
	}

	.casestudy .img {
		overflow: hidden;
		height: 9rem;
		width: 9rem;
	}

	.casestudy .img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.casestudy .text {
		display: flex;
		flex: 2;
		flex-direction: column;

		padding-left: 1rem;
	}

	.casestudy .text .blurb {
		flex: 2;
	}
	.casestudy .text .cta {
		flex: 0;
	}
	.casestudy .text p {
		margin: 0;
	}

	@media (min-width: 600px) {
		.introCaseStudies {
			margin-top: 4rem;
			padding: 0;
		}

		.containerCaseStudies {
			display: flex;
			gap: 1rem;
		}

		.casestudy {
			align-items: center;

			border-radius: 0 0 var(--borderRadius) var(--borderRadius);
			flex: 1;
			flex-direction: column;
			padding: 0;
		}
		.casestudy .img {
			width: 100%;
		}

		.casestudy .text {
			padding: 1rem 1rem;
		}

		.casestudy .text p {
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		.casestudy .cta {
			margin-top: 1rem;
			text-align: right;
		}
	}
</style>
