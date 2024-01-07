<script>
</script>

<div class="introCaseStudies">
	<div class="header">
		<h3>Case Studies</h3>
	</div>
	<!-- header -->

	<div class="containerCaseStudies">
		<div class="casestudy">
			<div class="img">
				<a href="/obviously"> <img src="../thumbnails/obv_influencer.jpeg" alt="" /></a>
			</div>
			<div class="text">
				<div class="blurb">
					<h4>Obviously</h4>
					<p>Implementing design process at a mature startup.</p>
				</div>
				<div class="cta"><a href="/obviously">View Work</a></div>
			</div>
		</div>
		<!-- casestudy -->
		<div class="casestudy">
			<div class="img">
				<img src="../thumbnails/fis.png" alt="" />
			</div>
			<div class="text">
				<div class="blurb">
					<h4>Worldpay (FIS)</h4>
					<p>Using Design Thinking to consolidate duplicate products.</p>
				</div>
				<div class="cta"><a href="/obviously">View Work</a></div>
			</div>
		</div>
		<!-- casestudy -->
		<div class="casestudy">
			<div class="img">
				<img src="../thumbnails/mastercard.png" alt="" />
			</div>
			<div class="text">
				<div class="blurb">
					<h4>mastercard</h4>
					<p>Translating business and data engineering into design speak.</p>
				</div>
				<div class="cta"><a href="/obviously">View Work</a></div>
			</div>
		</div>
		<!-- casestudy -->
	</div>
	<!-- containerCaseStudies -->
</div>

<!-- introWork -->

<style>
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
			padding-bottom: 0;
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
