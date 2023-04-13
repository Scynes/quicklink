<script>

    import '@public/css/style.css';
    import NavBar from '@components/common/NavBar.svelte';

</script>

<page-container>
    <header>
        <NavBar />
    </header>
    <main class="page-content">
        <slot />
    </main>
    <footer>
        
    </footer>
</page-container>