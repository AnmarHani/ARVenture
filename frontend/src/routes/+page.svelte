<!---1-Anmar Hani 2140004
2- Mohammed Alsaadwi 2140519 
3- Raef Shah 2141165
4- Yaser Kaid 2140847
5- Ziyad Alghamdi 2142017   -->

<script>
  import HeroSection from "../templates/HeroSection.svelte";
  import IntroSection from "../templates/IntroSection.svelte";
  import ShowSection from "../templates/ShowSection.svelte";
  import HookSection from "../templates/HookSection.svelte";
  import { onMount } from "svelte";

  let deactivate = false;

  onMount(() => {
    setTimeout(() => {
      deactivate = true;
    }, 5000);
  });
</script>

<video class="fade" autoplay muted class:deactivate>
  <source src="/Trailer.mp4" type="video/mp4" />
</video>

<HeroSection />
<IntroSection />
<ShowSection />
<HookSection />

<style>
  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .deactivate {
    display: none;
    z-index: 0;
  }

  .fade {
    animation: fade 6s ease-out;
  }

  video {
    position: fixed;
    top: -25%;
    left: -25%;
    width: 150vw;
    height: 150vh;
    z-index: 1000;
  }
</style>
