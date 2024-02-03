<script>
</script>

<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<h2>Personal: Tracking A Music Playlist for 22 Years</h2>
		<h3>Context</h3>

		<p>
			I’ve been maintaining a music playlist since high school. Every week I export as a XML file. I
			parse those files (using PHP) into JSON objects. Those serve as the data structure that Vue
			renders into three views: a full timeline of the playlist’s evolution, a search page, and a
			visualization tracking the proportionality of the genres within the playlist at any given
			moment in time. The timeline is dynamically rendered using canvas and redraws as the user
			scrolls.
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
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<div class="imageGrid">
	<img id="img6" src="../techStudies/music1.png" alt="" />
	<img id="img7" src="../techStudies/music2.png" alt="" />
	<img id="img8" src="../techStudies/music3.png" alt="" />
	<img id="img9" src="../techStudies/music4.png" alt="" />
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
		#img6 {
			grid-column: col-start 1 / span 6;
			grid-row: 2;
		}

		#img7 {
			grid-column: col-start 7 / span 6;
			grid-row: 2;
		}

		#img8 {
			grid-column: col-start 1 / span 6;
			grid-row: 3;
		}

		#img9 {
			grid-column: col-start 7 / span 6;
			grid-row: 3;
		}
	}
</style>
