<script>
</script>

<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<h2>Angular Components for Worldpay</h2>
		<h3>Context</h3>

		<p>
			To jumpstart their front-end efforts, I coded the first set of components. Each component is
			fully responsive and mobile-ready. The mini-website I made them also had developer notes for
			how I layered additional rules on-top of Bootstrap such as spacing and colors.
		</p>

		<div class="meta">
			<div>
				<h5>Tech Stack</h5>
				<ul>
					<li>Angular</li>
					<li>Google Firebase (Hosting & Authentication)</li>
				</ul>
			</div>
			<div>
				<h5>Repo</h5>

				<a href="https://github.com/phonghtran/catalyst_angular_firebase_frontend" target="_blank"
					>Github
				</a> <i class="fa-solid fa-arrow-up-right-from-square"></i>

				<h5>Live Site</h5>
				<a href="https://designit-angular8frontendboots.web.app" target="_blank">Visit Site </a>
				<i class="fa-solid fa-arrow-up-right-from-square"></i>

				<p>
					phong@phonghtran.com <br />testingurlpocangular123
				</p>
			</div>
		</div>
		<!-- meta -->
	</div>
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<div class="imageGrid">
	<img id="img10" src="../techStudies/wp1.png" alt="" />
	<img id="img11" src="../techStudies/wp2.png" alt="" />
	<img id="img12" src="../techStudies/wp3.png" alt="" />
	<img id="img13" src="../techStudies/wp4.png" alt="" />
</div>

<!-- imageGrid -->
<style>
	img {
		width: 100%;
	}

	li:nth-child(n + 2) {
		margin-top: 0;
	}
	.meta {
		padding-bottom: 2rem;
	}
	@media (min-width: 600px) {
		.meta {
			padding-bottom: 0;
		}

		#img10 {
			grid-column: col-start 1 / span 6;
			grid-row: 2;
		}

		#img11 {
			grid-column: col-start 7 / span 6;
			grid-row: 2;
		}

		#img12 {
			grid-column: col-start 1 / span 9;
			grid-row: 3;
		}

		#img13 {
			grid-column: col-start 10 / span 3;
			grid-row: 3;
		}
	}
</style>
