<script>

    const ABOUT_STORE = [
        {
            icon: 'fa-bolt',
            title: 'Fast',
            description: 'uickLink delivers lightning-fast redirections, ensuring minimal wait time for users accessing shortened URLs.'
        },
        {
            icon: 'fa-link',
            title: 'Simple',
            description: 'Our user-friendly interface makes it easy for anyone to create and manage short URLs with just a few clicks.'
        },
        {
            icon: 'fa-handshake-simple',
            title: 'Reliable',
            description: 'Built on a robust infrastructure, QuickLink ensures consistent uptime and performance for your shortened links.'
        },
        {
            icon: 'fa-user-shield',
            title: 'Secure',
            description: 'Advanced security measures protect your links from unauthorized access and keep your data safe and private.'
        },
        {
            icon: 'fa-chart-simple',
            title: 'Statistics',
            description: 'Gain valuable insights through comprehensive analytics, helping you understand user engagement.'
        },
        {
            icon: 'fa-mobile-screen-button',
            title: 'Responsive',
            description: "QuickLink's adaptive design ensures seamless access and management of your links on any device or screen size."
        }

    ]

</script>

<section class="shorten-link">
    <form class="width-full grid place-center" action="#">
        <input class="shorten-input outlineless borderless text-center width-full" type="text" placeholder="https://www.quicklink.it">
    </form>
</section>
<section id="about" class="about">

    {#each ABOUT_STORE as aboutItem}
        <div class="about-card">
            <i class="{aboutItem.icon} fa-solid fa-3x icon-ecto"></i>
            <h2>{aboutItem.title}</h2>
            <p>{aboutItem.description}</p>
        </div>
    {/each}

</section>