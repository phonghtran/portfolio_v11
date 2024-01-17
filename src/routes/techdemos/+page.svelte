<script>
	import NavTechDemo from '$lib/components/NavTechDemo.svelte';
</script>

<NavTechDemo />
<div class="wrapper">
	<div class="containerFlex">
		<div class="project">
			<h4>Project #1</h4>
			<h2>Current Portfolio Website</h2>
			<h3>Background</h3>

			<p>
				I wanted to learn Svelte and see how it compares to Vue, React and Angular. Frameworks that
				I've used in the past, but all of them have trade-offs. Also, this was a chance to deploy to
				Vercel over Heroku and Firebase.
			</p>
			<div class="meta">
				<div class="main">
					<h5>Tech Stack</h5>
					<ul>
						<li>Svelte</li>
						<li>Vercel</li>
					</ul>
				</div>
				<div class="sidebar">
					<h5>Repo</h5>

					<a href="https://github.com/phonghtran/portfolio_v11" target="_blank">Github</a>
					<i class="fa-solid fa-arrow-up-right-from-square"></i>
				</div>
			</div>
			<!-- meta -->

			<!-- <div class="galleryRow">
				<div>
					<img id="img3" src="../techStudies/drone1.png" alt="" />
				</div>
				<div><img id="img3" src="../techStudies/drone2.png" alt="" /></div>
				<div><img id="img3" src="../techStudies/drone3.png" alt="" /></div>
				<div><img id="img3" src="../techStudies/drone4.png" alt="" /></div>
				<div><img id="img3" src="../techStudies/drone5.png" alt="" /></div>
			</div> -->
		</div>
		<!-- project -->
		<div class="project">
			<h4>Project #2</h4>
			<h2>Prototype for Client’s Sales Demo</h2>
			<h3>Background</h3>

			<p>
				The client needed an interactive demo to show off their drone delivery capabilities. I made
				two “accounts” to log into to show both the contractor and client side of the delivery
				process.
			</p>
			<div class="meta">
				<div class="main">
					<h5>Tech Stack</h5>
					<ul>
						<li>React</li>
						<li>Google Firebase (Authentication, Hosting)</li>
						<li>Rechart (Data Viz)</li>
					</ul>
				</div>
				<div class="sidebar">
					<h5>Repo</h5>

					<a href="https://github.com/phonghtran/project-enroute-phonghtran" target="_blank"
						>Github</a
					>
					<i class="fa-solid fa-arrow-up-right-from-square"></i>
					<h5>Live Site</h5>
					<a href="https://project-enroute-phonghtran.web.app" target="_blank">Visit Site </a>
					<i class="fa-solid fa-arrow-up-right-from-square"></i>

					<p>
						contractor@droneiq.tech<br />
						FA@df@ZT7wQUHGs*eis2WK2J4Be9EnRK
					</p>
					<p>customer@droneiq.tech<br />Q-uxCOV(n75D9zxgr`%V,qs2hbDv3CNr</p>
				</div>
			</div>
			<!-- meta -->
		</div>
		<!-- project -->
	</div>
	<!-- containerMaxWidth -->
	<div class="containerFlex">
		<div class="project">
			<h4>Project #3</h4>
			<h2>Personal: Tracking A Music Playlist for 22 Years</h2>

			<h3>Background</h3>

			<p>
				I’ve been maintaining a music playlist since high school. Every week I export as a XML file.
				I parse those files (using PHP) into JSON objects. Those serve as the data structure that
				Vue renders into three views: a full timeline of the playlist’s evolution, a search page,
				and a visualization tracking the proportionality of the genres within the playlist at any
				given moment in time. The timeline is dynamically rendered using canvas and redraws as the
				user scrolls.
			</p>

			<div class="meta">
				<div>
					<h5>Tech Stack</h5>
					<ul>
						<li>Vue</li>
						<li>PHP (Locally to parse files)</li>
						<li>Heroku</li>
					</ul>
				</div>
				<div>
					<h5>Repo</h5>

					<a href="https://github.com/phonghtran/Still-Good-Explorer" target="_blank">Github</a>
					<i class="fa-solid fa-arrow-up-right-from-square"></i>

					<h5>Live Site</h5>
					<a href="https://still-good-explorer.herokuapp.com/playlists" target="_blank"
						>Visit Site
					</a>
					<i class="fa-solid fa-arrow-up-right-from-square"></i>
				</div>
			</div>
			<!-- meta -->
		</div>
		<!-- project -->
		<div class="project">
			<h4>Project #4</h4>
			<h2>Angular Components for Worldpay</h2>

			<h3>Background</h3>

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
		<!-- project -->
	</div>
	<!-- containerMaxWidth -->
</div>
<!-- wrapper -->
<div class="imageGrid">
	<h4 id="headline1" class="headline">Client’s Sales Demo</h4>

	<img id="img1" src="../techStudies/drone1.png" alt="" />
	<img id="img2" src="../techStudies/drone2.png" alt="" />
	<img id="img3" src="../techStudies/drone3.png" alt="" />
	<img id="img4" src="../techStudies/drone4.png" alt="" />
	<img id="img5" src="../techStudies/drone5.png" alt="" />
	<h4 id="headline2" class="headline">Personal Music Tracker</h4>

	<img id="img6" src="../techStudies/music1.png" alt="" />
	<img id="img7" src="../techStudies/music2.png" alt="" />
	<img id="img8" src="../techStudies/music3.png" alt="" />
	<img id="img9" src="../techStudies/music4.png" alt="" />
	<h4 id="headline3" class="headline">Worldpay Angular Components</h4>

	<img id="img10" src="../techStudies/wp1.png" alt="" />
	<img id="img11" src="../techStudies/wp2.png" alt="" />
	<img id="img12" src="../techStudies/wp3.png" alt="" />
	<img id="img13" src="../techStudies/wp4.png" alt="" />
</div>

<!-- imageGrid -->
<style>
	.containerFlex {
		margin: 2rem 1rem;
	}
	.project {
		background-color: var(--gray0);
		border-radius: var(--toggleBorderRadius);
		flex: 1 1 0px;
		margin: 0 auto 2rem;
		max-width: 34rem;
		overflow-wrap: break-word;
		padding: 3rem 2rem;
	}

	.meta div {
		flex: 1;
		overflow-wrap: break-word;
	}

	img {
		width: 100%;
	}
	h2,
	h4 {
		margin-top: 0;
	}
	a {
		line-height: 1.5rem;
	}

	ul {
		margin-top: 0.5rem;
	}

	li {
		margin: 0.25rem 0 0.25rem;
	}

	i {
		color: var(--accentColor);
		font-size: 0.875rem;
	}

	@media (min-width: 1200px) {
		.wrapper {
			text-align: center;
			width: 100%;
		}
		.containerFlex {
			display: flex;

			gap: 1rem;
			margin: 0 auto;
			max-width: 78rem;
		}

		.project {
			margin: 0 0 2rem;
			max-width: auto;
			text-align: left;
		}
		.imageGrid .headline {
			display: block;
		}
	}
	@media (min-width: 600px) {
		#headline1 {
			grid-column: col-start 1 / span 12;
			grid-row: 1;
		}

		#img1 {
			grid-column: col-start 1 / span 6;
			grid-row: row-start 1 / span 2;
		}
		#img2 {
			grid-column: col-start 7 / span 6;
			grid-row: 2;
		}

		#img3 {
			grid-column: col-start 7 / span 6;
			grid-row: 3;
		}
		#img4 {
			grid-column: col-start 1 / span 6;
			grid-row: 4;
		}

		#img5 {
			grid-column: col-start 7 / span 6;
			grid-row: 4;
		}

		#headline2 {
			grid-column: col-start 1 / span 12;
			grid-row: 5;
		}

		#img6 {
			grid-column: col-start 1 / span 6;
			grid-row: 6;
		}

		#img7 {
			grid-column: col-start 7 / span 6;
			grid-row: 6;
		}

		#img8 {
			grid-column: col-start 1 / span 6;
			grid-row: 7;
		}

		#img9 {
			grid-column: col-start 7 / span 6;
			grid-row: 7;
		}

		#headline3 {
			grid-column: col-start 1 / span 12;
			grid-row: 8;
		}

		#img10 {
			grid-column: col-start 1 / span 6;
			grid-row: 9;
		}

		#img11 {
			grid-column: col-start 7 / span 6;
			grid-row: 9;
		}

		#img12 {
			grid-column: col-start 1 / span 9;
			grid-row: 10;
		}

		#img13 {
			grid-column: col-start 10 / span 3;
			grid-row: 10;
		}
	}
</style>
