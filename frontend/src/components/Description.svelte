<script>
    export let Description;
  </script>
  
  <p> <slot/> </p>

  <style>
    	p {
		background: -webkit-linear-gradient(bottom, #4aaef1, #d10ed1);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 1rem;
		margin-bottom: 2rem;
		line-height: 1.5rem;
		text-align: center;
	}
  </style>