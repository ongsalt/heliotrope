<script lang="ts">
  import Card from '../components/card.svelte';

  const cards = [
    {
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      href: "/docs"
    },
    {
      title: "Dolor Sit Amet",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/getting-started"
    },
    {
      title: "Consectetur Adipiscing",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      href: "/components"
    }
  ];
</script>

<main class="max-w-6xl mx-auto px-8 py-8">
  <header class="text-center mb-16">
    <h1 class="text-5xl font-bold text-gray-900 mb-4">Lorem Ipsum</h1>
    <p class="text-xl text-gray-600">Dolor sit amet consectetur adipiscing elit</p>
  </header>

  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {#each cards as card}
      <Card 
        title={card.title} 
        description={card.description} 
        href={card.href} 
      />
    {/each}
  </section>
</main>