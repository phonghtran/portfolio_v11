<script>
</script>

<div class="wrapperMaxWidth wrapperCasestudy">
	<div class="containerMaxWidth">
		<h2>Prototype for Client’s Sales Demo</h2>
		<h3>Context</h3>

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

				<a href="https://github.com/phonghtran/project-enroute-phonghtran" target="_blank">Github</a
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
	<!-- containerMaxWidth -->
</div>

<!-- wrapperMaxWidth -->

<div class="imageGrid">
	<img id="img1" src="../techStudies/drone1.png" alt="" />
	<img id="img2" src="../techStudies/drone2.png" alt="" />
	<img id="img3" src="../techStudies/drone3.png" alt="" />
	<img id="img4" src="../techStudies/drone4.png" alt="" />
	<img id="img5" src="../techStudies/drone5.png" alt="" />
</div>

<style>
	img {
		width: 100%;
	}

	li:nth-child(n + 2) {
		margin-top: 0;
	}

	@media (min-width: 600px) {
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
	}
</style>
