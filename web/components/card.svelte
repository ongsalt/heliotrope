<script lang="ts">
  interface Props {
    title?: string;
    description?: string;
    imageUrl?: string;
    href?: string;
  }

  let { title = "Card Title", description = "Card description goes here", imageUrl = "", href = "" }: Props = $props();
</script>

<div class="card">
  {#if imageUrl}
    <div class="card-image">
      <img src={imageUrl} alt={title} />
    </div>
  {/if}
  
  <div class="card-content">
    <h3 class="card-title">{title}</h3>
    <p class="card-description">{description}</p>
    
    {#if href}
      <a href={href} class="card-link">Learn More</a>
    {/if}
  </div>
</div>

<style>
  .card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    max-width: 320px;
  }
  
  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .card-title {
    margin: 0 0 0.75rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
  }
  
  .card-description {
    margin: 0 0 1rem 0;
    color: #666;
    line-height: 1.5;
  }
  
  .card-link {
    display: inline-block;
    color: #007acc;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .card-link:hover {
    color: #005999;
    text-decoration: underline;
  }
</style>