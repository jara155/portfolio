<script>
	import Stitek from "./Stitek.svelte";

    export let title;
    export let img;
    export let desc;
    export let subtitle = "";
    export let stitky = [];
    export let link;
</script>

<main>
    {#if link}
        <div class="title">
            <img src="{img}" alt="">
            <h3>{title}</h3>
            <a href="{link}">
                <i style="color: var(--accent);" class="fa-solid fa-up-right-from-square"></i>
            </a> 
        </div>
        <h4>{subtitle}</h4>
        <p>{desc}</p>
    {:else}
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{desc}</p>
    {/if}
    <section>
        {#each stitky as stitek}
            <Stitek title={stitek[0]} bgColor={stitek[1]} />
        {/each}
    </section>
    <!-- <img src="experiences/mjp.png" alt=""> -->
</main>

<style>
    main {
        z-index: -1;
        position: relative;
        border-bottom: 2px solid var(--accent);
        border-radius: var(--radius);
        padding: 1.5rem;
        background-color: rgb(13, 13, 13);
        margin-bottom: 2rem;
    } 

    h3 {
        font-weight: bold;
        color: var(--accent);
    }

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 600px) {
        .title {
            flex-direction: column;
        }

        main {
            margin-inline: 1.5rem;
            padding: .5rem;
        }

        p {
            margin-top: 0;
        }

        img {
            margin-top: .5rem;
        }
    }

    @media (min-width: 600px) {
        main {
           
        }
    }

    i {
        font-size: 22px;
        margin-right: .75rem;
    }

    img {
        width: 80px;
        border-radius: var(--radius);
        margin-right: 0;
    }

    h4 {
        font-weight: bold;
        margin-bottom: .1rem;
    }

    section {
        display: flex;
        margin-top: 1rem;
        justify-content: center;
    }
</style>