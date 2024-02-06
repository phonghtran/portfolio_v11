<script>
	export let keyword;
	export let index;

	const currentDate = new Date();
	const year = currentDate.getFullYear();

	function dateCalc(date) {
		const duration = year - date;
		if (duration <= 1) {
			return '1 year';
		} else {
			return duration + ' years';
		}
	}
</script>

<div id="section{index}" class="cardKeyword">
	<h4>{keyword.header}</h4>
	<small>Practice: {dateCalc(keyword.duration)}</small>
	<p>{@html keyword.desc}</p>
</div>

<style>
	.cardKeyword {
		background-color: var(--gray0);
		border-radius: var(--borderRadius);
		margin: 1rem 0 2rem;
		padding: 2rem;
	}

	h4 {
		margin-top: 0;
	}

	small {
		margin-top: 0.25rem;
	}
</style>
