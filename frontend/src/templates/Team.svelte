<script>
  import SubTitle from "../components/SubTitle.svelte";
</script>

<SubTitle>Our Team</SubTitle>
<section>
  <a href="https://anmarhani.vercel.app" target="_blank">
    <img src="/anmarhanipfp.jpeg" alt="" />
    <h3>Anmar Hani</h3>
    <h5>Full Stack Developer</h5>
  </a>
  <a href="https://s3dwi.github.io" target="_blank">
    <img src="/mohammedalsaadwi.png" alt="" />
    <h3>Mohammed Adel</h3>
    <h5>Frontend Developer</h5>
  </a>

  <a href="https://ziyadjameel.github.io" target="_blank">
    <img src="/ziyad-image.png" alt="" />
    <h3>Ziyad Alghamdi</h3>
    <h5>Back-end Developer</h5>
  </a>

  <a href="https://raefshah.github.io/raefAshah.github.io/" target="_blank">
    <img src="/reafatefphoto.png" alt="" />
    <h3>Raef Shah</h3>
    <h5>Full Stack Designer</h5>
  </a>
  <a href="/" target="_blank">
    <img src="/yaser-image.png" alt="" />
    <h3>Yasir Kaid</h3>
    <h5>Frontend and Mobile Developer</h5>
  </a>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/plainpurple.png");
    width: 100vw;
    flex-wrap: wrap;
    gap: 10px;
    margin: 15px auto;
  }
  a {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    background: #1b1229;
    border-radius: 15px;
  }

  img {
    width: 15rem;
    height: 17rem;
    border-radius: 15px;
  }
</style>
