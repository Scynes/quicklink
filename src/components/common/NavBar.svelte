<script>

    let showNav = true;

    let previousYOffset = 0;

    const handleScroll = () => {
        
        showNav = window.pageYOffset < previousYOffset;

        previousYOffset = window.pageYOffset;
    }

</script>

<svelte:window on:scroll={handleScroll} />

<nav class="width-full" class:show={showNav}>
    <a href="#top" class="nav-item">Home</a>
    <a href="#about" class="nav-item">About</a>
    <a href="#top" class="nav-item">Signup</a>
    <a href="#top" class="nav-item">Log In</a>
</nav>