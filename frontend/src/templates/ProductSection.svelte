<script>
	import Button from '../components/button.svelte';
	import Title from '../components/title.svelte';
	import SubTitle from '../components/SubTitle.svelte';
	import Description from '../components/description.svelte';
</script>

<section>/
  <div class="card-container">
    <div class="content-text">
      <Title>ARVglasses</Title>
      <Description>Pre-order now and be among the first to unlock a new dimension of reality with ARVGlass!</Description>
      <Description>Valid From Dec13,2023 - Dec30,2023 </Description>
    </div>
    <div class="product-card">
      <div class="logo-cart">
        <img class="glasses" src="./Logo.png" alt="" />
        <i class="bx bx-shopping-bag" />
      </div>
      <div class="main-img">
        <img src="./glassesremoved.png" alt="" />
      </div>
      <div class="glasses-details">
        <span class="glasses-name">ARVglasses</span>
        <p>
          Discover unparalleled comfort and innovation with our sleek AR Glasses. Immerse yourself in vibrant augmented reality on a high-resolution display with a wide field of view. Lightweight and designed for all-day wear, experience seamless navigation through intuitive gestures. 
          Stay effortlessly connected via Bluetooth and step into the future of technology and comfort with our cutting-edge AR Glasses.
        </p>
        <div class="stars">
          <i class="bx bxs-star" />
          <i class="bx bxs-star" />
          <i class="bx bxs-star" />
          <i class="bx bxs-star" />
          <i class="bx bx-star" />
        </div>
      </div>
      <div class="color-price">
        <div class="color-option">
          <span class="color">Color:</span>
          <div class="circles">
            <span class="circle black active" />
            <span class="circle white" />
          </div>
        </div>
        <div class="price">
          <span class="price-num">$129.99</span>
        </div>
      </div>
      <Button type ="primary full-width-radius">Add To Cart</Button>
    </div>
  </div>
</section>

<style>
	section {
	  background-size: cover;
	  background-repeat: no-repeat;
	  background-image: url('./plainpurple2.png');
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 2rem 1rem;
	}
  
	.content-text {
	  display: flex;
	  flex-direction: column;
	  color: white;
	  align-items: center;
	  padding: 30px;
	  text-align: center;
	}
  
	.card-container {
	  display: flex;
	  align-items: center;
	}
  
	.product-card {
	  max-width: 455px;
	  width: 100%;
	  border-radius: 25px;
	  padding: 20px 30px 30px 30px;
	  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	  background: white;
	  overflow: hidden;
	}
  
	.main-img {
	  position: relative;
	  height: 310px;
	}
  
	.main-img img {
	  height: 300px;
	  width: 300px;
	  object-fit: cover;
	  transform: rotate(18deg);
	  left: 12px;
	  top: -40px;
	  z-index: -1;
	}
  
	.glasses-details .glasses-name {
	  font-size: 24px;
	  font-weight: 500;
	  color: #161616;
	}
  
	.glasses-details p {
	  margin: 10px 0px 10px 0;
	  font-size: 12px;
	  font-weight: 700;
	  color: #333;
	  text-align: justify;
	  font-family: sans-serif;
	}
  
	.glasses-details .stars i {
	  font-size: 20px;
	  margin: 1px 0px 10px 0;
	  color: gold;
	}
  
	.color-price .color-option {
	  display: flex;
	  align-items: center;
	}
  
	.color-price {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: space-between;
	}
  
	.color-price .color-option .color {
	  font-size: 18px;
	  font-weight: 500;
	  color: #333;
	}
  
	.color-option .circles {
	  display: flex;
	}
  
	.color-option .circles .circle.black.active {
	  box-shadow: 0 0 0 2px #fff, 0 0 0 4px black;
	}
  
	.color-option .circles .circle.white {
	  background: red;
	}
  
	.color-option .circles .circle {
	  height: 18px;
	  width: 18px;
	  background: black;
	  border-radius: 50%;
	  margin: 0 4px;
	  cursor: pointer;
	}
  
	.color-price .price {
	  display: flex;
	  flex-direction: column;
	}
  
	.color-price .price .price-num {
	  font-size: 25px;
	  padding-top: 10px;
	}
  
	@media (min-width: 375px) and (max-width: 678px) {
			.container {
			padding-left: 2rem;
			padding-right: 2rem; 
		}
		.card-container {
			padding-right: 3rem;
			flex-direction: column;
			justify-content: center;
			align-content: center;
			align-items: center; 
		}
	}
  
	@media (min-width: 679px) and (max-width: 1200px) {
		.container {
			padding: 100px 50px; 
		}
		.card-container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			align-content: center;
		}
	}

	@media (max-width: 375px) {
	.container {
		padding-left: 3.5rem;
		padding-right: 2.5rem; 
	}
	.card-container {
		flex-direction: column;
		align-items: center; 
	}
}
</style>