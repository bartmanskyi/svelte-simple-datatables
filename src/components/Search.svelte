<script>
    import { options } from '../store.js'
    import SearchInput from '../SearchInput.svelte'
</script>

{#if $options.blocks.searchInput}
<section class="dt-search">
    <SearchInput/>
</section>
{/if}

<style>
    section{height:38px;padding-bottom:10px;}
</style>