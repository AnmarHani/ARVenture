<script>
  import Button from "../components/Button.svelte";
  import Title from "../components/Title.svelte";
  import SubTitle from "../components/SubTitle.svelte";
  import Description from "../components/Description.svelte";
</script>

<div class="card-container">
  <div class="content-text">
    <Title>ARVglasses</Title>
    <Description
      >Pre-order now and be among the first to unlock a new dimension of reality
      with ARVGlass!</Description
    >
    <Description>Valid From Dec13,2023 - Dec30,2023</Description>
  </div>
  <div class="product-card">
    <div class="images">
      <img src="/Logo.png" alt="Logo " width="100" />
      <img class="glasses-image" src="/glassesremoved.png" alt="Glasses "/>
    </div>
    <article class="glasses-details">
      <SubTitle>ARVglasses</SubTitle>
      <Description class="p">
        Discover unparalleled comfort and innovation with our sleek AR Glasses.
        Immerse yourself in vibrant augmented reality on a high-resolution
        display with a wide field of view. Lightweight and designed for all-day
        wear, experience seamless navigation through intuitive gestures. Stay
        effortlessly connected via Bluetooth and step into the future of
        technology and comfort with our cutting-edge AR Glasses.
      </Description>
    </article>
    <div class="stars">
      <i class="bx bxs-star" />
      <i class="bx bxs-star" />
      <i class="bx bxs-star" />
      <i class="bx bxs-star" />
      <i class="bx bx-star" />
    </div>
    <Description>PRICE: $129.99</Description>
    <Button
      onClick={() => {
        alert("Thank you! We will 'never' call you back ;)");
      }}
      type="primary full-width-radius">Add To Cart</Button
    >
  </div>
</div>

<style>
  .images {
    display: flex;
    flex-direction: column;
  }
  .glasses-image {
    background: -webkit-linear-gradient(100deg, #4aaef1, #d10ed1);
    margin: 10px;
    border-radius: 15px;
    transition: all 0.38s ease;
  }

  img:hover {
    transform: scale(.9);
    transition: all 0.5s ease;
    cursor: pointer;
    -webkit-text-fill-color: transparent;
  }
  .card-container {
    margin: 15px auto;
    width: 100vw;
    display: flex;
    align-items: center;
  }

  .content-text {
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    padding: 30px;
    text-align: center;
  }

  .product-card {
    border-radius: 25px;
    padding: 15px;
    background: black;
    overflow: hidden;
    border: 1px solid white;
    max-width: 45%;
    margin: 0 auto;
  }
  .stars {
    font-size: 20px;
    margin: 1px 0px 10px 0;
    color: gold;
    text-align: center;
  }

  @media only screen and (max-width: 780px) {
    .product-card {
      max-width: 80%;
    }
    .card-container {
      flex-direction: column;
      align-items: stretch;
      margin: 15px auto;
    }
  }
</style>
