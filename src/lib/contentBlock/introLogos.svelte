<script>
	$: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="introLogos">
	{#if innerWidth > 600}
		<div class="row">
			<div><img class="logo" src="../logos/ibm.png" alt="logo of ibm" /></div>

			<div><img class="logo" src="../logos/pnc.png" alt="logo of pnc" /></div>
			<div><img class="logo" src="../logos/fedex.png" alt="logo of fedex" /></div>
			<div><img class="logo horz" src="../logos/DroneIQ.png" alt="logo of drone IQ " /></div>
			<div><img class="logo" src="../logos/fis.png" alt="logo of fis worldpay" /></div>
			<div><img class="logo" src="../logos/mastercard.png" alt="logo of mastercard" /></div>
		</div>
		<!-- row -->
		<div class="row">
			<div class="-s">
				<img class="logo -s" src="../logos/826.png" alt="logo of 826 non-profit org" />
			</div>
			<div class="-xl">
				<img class="logo" src="../logos/csod.png" alt="logo of cornerstone ondemand" />
			</div>

			<div class="-xl">
				<img class="logo" src="../logos/obviously.png" alt="logo of obviously" />
			</div>
			<div class="-xl">
				<img class="logo" src="../logos/designit.png" alt="logo of designit" />
			</div>
			<div class="-s">
				<img class="logo" src="../logos/hrcloud.png" alt="logo of hr cloud" />
			</div>
			<div class="-s"><img class="logo -s" src="../logos/gsk.png" alt="logo of gsk" /></div>
		</div>
		<!-- row -->
	{:else}<div class="row">
			<div><img class="logo" src="../logos/ibm.png" alt="logo of ibm" /></div>
			<div><img class="logo" src="../logos/fedex.png" alt="logo of fedex" /></div>

			<div><img class="logo" src="../logos/mastercard.png" alt="logo of mastercard" /></div>
		</div>
		<!-- row -->
		<div class="row">
			<div class="-xl">
				<img class="logo" src="../logos/designit.png" alt="logo of designit" />
			</div>
			<div class="-xl">
				<img class="logo" src="../logos/csod.png" alt="logo of cornerstone ondemand" />
			</div>

			<div class="-xl">
				<img class="logo" src="../logos/obviously.png" alt="logo of obviously" />
			</div>
		</div>
		<!-- row -->
		<div class="row">
			<div><img class="logo" src="../logos/pnc.png" alt="logo of pnc" /></div>
			<div class="-s">
				<img class="logo" src="../logos/fis.png" alt="logo of fis worldpay" />
			</div>
			<div><img class="logo horz" src="../logos/DroneIQ.png" alt="logo of drone IQ " /></div>
		</div>
		<!-- row -->

		<div class="row">
			<div class="-s">
				<img class="logo -s" src="../logos/826.png" alt="logo of 826 non-profit org" />
			</div>
			<div class="-s">
				<img class="logo" src="../logos/hrcloud.png" alt="logo of hr cloud" />
			</div>
			<div class="-s"><img class="logo -s" src="../logos/gsk.png" alt="logo of gsk" /></div>
		</div>
		<!-- row -->
	{/if}
</div>

<!-- introLogos -->

<style>
	.introLogos {
		margin: 2rem 0;
		padding: 0 2rem;
	}

	div.introLogos div.row {
		align-items: center;
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;

		gap: 1rem;
		margin-top: -2.5rem;
	}

	div.introLogos div.row:first-child {
		margin-top: 0;
	}
	div.introLogos div.row:last-child {
		margin-top: -1rem;
	}

	div.row > div {
		flex: 1; /* fg:1, fs:1, fb:0 */
	}

	div.row > div.-s {
		flex: 0.75;
	}

	div.row > div.-xl {
		flex: 1.25;
	}

	div.row div img {
		max-height: 100%;
		max-width: 100%;
		object-fit: scale-down;
	}

	@media (min-width: 600px) {
		div.introLogos div.row:last-child {
			margin-top: -1.5rem;
		}

		.introLogos {
			margin: 4rem 0;
			padding: 0;
		}
	}
</style>
