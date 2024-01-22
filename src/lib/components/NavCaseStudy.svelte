<script>
	import { caseStudies } from '../../stores.js';

	export let projectName = '';
	let options = caseStudies; // Array of options for the dropdown

	let showMenu = false;
</script>

<div class="nav">
	<div class="home">
		<a class="casestudy" href="/"
			><i class="fa-solid fa-house"></i> <span class="text">Home</span></a
		>
		<button
			class="btnMobileNav"
			class:showMenu
			on:click={() => {
				showMenu = showMenu ? false : true;
			}}
			><i class="fa-solid" class:fa-add={!showMenu} class:fa-minus={showMenu}></i> Case Studies
		</button>
	</div>

	<div class="casestudies" class:showMenu>
		{#each options as option, index}
			{#if option.label === projectName}
				<a
					class="casestudy selected"
					on:click={() => {
						showMenu = false;
					}}
					href={option.url}
					><span class="text">{option.name}</span>
				</a>
			{:else}
				<a
					class="casestudy"
					on:click={() => {
						showMenu = false;
					}}
					href={option.url}
					><span class="text">{option.name}</span>
				</a>
			{/if}
		{/each}
	</div>
</div>

<!-- nav -->

<style>
	.nav {
		background-color: var(--gray0);
		border-radius: var(--borderRadius);
		margin: 1rem;
		padding: 1rem;
	}
	.casestudies {
		background: white;
		border-radius: var(--borderRadius);
		border: 1px var(--accentColor) solid;
		display: none;
		margin-top: 0.5rem;
		position: absolute;
		right: 2rem;
	}

	.casestudies.showMenu {
		display: block;
	}

	.casestudy {
		padding: 1rem 1.25rem;
	}
	.casestudies .casestudy {
		display: block;
	}

	.casestudies .casestudy:last-child {
		border-bottom: 0;
	}

	.casestudies .casestudy.selected,
	.casestudies .casestudy.selected:hover {
		background-color: var(--accentColor);
		color: white;
	}

	.casestudies .casestudy:hover {
		background-color: var(--gray1);
		border-bottom-color: var(--accentColor);
	}

	.home {
		display: flex;
		justify-content: space-between;
	}

	.home .casestudy,
	.home .casestudy:visited {
		border: 0;
		display: inline;
	}

	.home .casestudy:hover i,
	.home .btnMobileNav:hover i {
		color: black;
	}

	.home .btnMobileNav {
		border: 0;
		border-radius: var(--borderRadius);
		color: var(--accentColor);
		cursor: pointer;
		font-size: 1rem;
		padding: 1rem;
	}

	.home .btnMobileNav:hover {
		background-color: var(--gray1);
		color: black;
	}

	.home .btnMobileNav.showMenu {
		background-color: var(--gray1);
	}

	i {
		color: var(--accentColor);
	}

	@media (min-width: 800px) {
		.nav {
			align-items: stretch;
			border-radius: var(--toggleBorderRadius);
			display: flex;
			flex-direction: row;
			font-size: 1rem;
			justify-content: space-between;
			padding: 0;

			margin: 1rem 2rem 2rem;
		}

		.home {
			display: block;
		}
		.home .btnMobileNav {
			display: none;
		}

		.casestudies {
			background-color: var(--accentColor5);
			border: 0;
			border-radius: var(--toggleBorderRadius);
			display: block;
			margin-top: 0;
			padding: 1.125rem 0;
			position: relative;
			right: 0;
		}

		.casestudies .casestudy {
			display: inline;
		}

		.casestudy {
			border-radius: var(--toggleBorderRadius);

			padding: 1rem 1rem;
		}

		.casestudies .casestudy:hover {
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
	}
</style>
