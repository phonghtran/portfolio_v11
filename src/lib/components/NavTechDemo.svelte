<script>
	import { caseStudies } from '../../stores.js';

	let options = caseStudies; // Array of options for the dropdown
</script>

<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<div class="nav">
			<div class="home">
				<a class="casestudy" href="/"
					><i class="fa-solid fa-house"></i> <span class="text">Home</span></a
				>
			</div>

			<div class="casestudies">
				<a class="casestudy selected" href="/techdemos"><span class="text">Tech Demos</span> </a>
			</div>
		</div>
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->
<!-- nav -->

<style>
	.nav {
		align-items: stretch;
		background-color: var(--gray0);
		border-radius: 2rem;
		display: flex;
		flex-direction: row;
		font-size: 0.675rem;
		justify-content: space-between;
		padding: 0;
		margin: 1rem 1rem 2rem;
	}

	.nav > div {
		padding: 0.5rem 0;
	}
	.casestudies {
		background-color: var(--accentColor5);
		border-radius: var(--toggleBorderRadius);

		position: relative;
	}

	.casestudy {
		border-radius: var(--toggleBorderRadius);

		padding: 0.5rem 0.5rem;
	}

	.casestudy:hover {
		background-color: var(--accentColor3);
	}

	.casestudy.selected {
		background-color: var(--accentColor);
		color: white;
	}

	.casestudy.selected:hover .text {
		border-color: white;
	}

	a,
	a:visited {
		border: 0;
		color: black;
	}

	a .text,
	a:visited .text {
		border-bottom: 0;
	}

	a:hover .text {
		border-color: black;
	}
	a:hover i {
		color: black;
	}

	@media (min-width: 600px) {
		.nav {
			font-size: 1rem;
			margin: 1rem 0 2rem;
		}

		.nav > div {
			padding: 1rem 0;
		}

		.casestudy {
			padding: 1rem 1rem;
		}
	}
</style>
