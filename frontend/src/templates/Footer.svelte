<script>
</script>

<footer role="contentinfo">
  <div class="contact">
    <h1>Contact us</h1>
    <div class="icons">
      <a href="#"><i class="bx bxl-linkedin" /></a>
      <a href="#"><i class="bx bxl-twitter" /></a>
    </div>
  </div>
  <p>ARVenture &copy; 2023</p>
</footer>

<style>
  footer {
    background-color: black;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    background: linear-gradient(90deg, #d10ed19a, #4aaef19a) padding-box;
  }

  a {
    color: #ffffff;
    font-size: 15px;
  }

  .icons i {
    display: inline-block;
    color: #fff;
    font-size: 30px;
    transition: all 0.38s ease;
  }

  .icons i:hover {
    background: -webkit-linear-gradient(200deg, #4aaef1, #d10ed1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1.2);
  }

  @media (max-width: 500px) {
    footer {
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
