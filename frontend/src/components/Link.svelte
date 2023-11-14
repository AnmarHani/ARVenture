<script>
    export let linkTo = "#"
    export let type = "primary"
</script>

<a href={linkTo} class={type}>
    <slot/>
</a>

<style>

.primary{
    background: linear-gradient(90deg, #d10ed1, #4aaef1) padding-box;
    transition: all 0.5s ease;
	
    
}

.primary:hover, .full-width:hover, .full-width-radius:hover {
	background: linear-gradient(90deg,  #d10ed19a,#4aaef19a) padding-box;
	transition: 0.4s;
    transition: all 0.5s ease;
	
	}
    

    .secondary{
		padding: 10px 30px;
		border-bottom: 2px solid #4aaef1;
		border-radius: 5px;
		transition: 0.4s;
		transition: all 0.3s ease;


    }

    .secondary:hover {
        background: linear-gradient(90deg, #d10ed1, #4aaef1) padding-box;

    }
	

    .full-width{
        width: 100%;
        display: block;
        
    }

	.full-width-radius {
		width: 100%;
		height: 58px;
		background: #fff;
		border: none;
		border-radius: 40px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		font-size: 16px;
		font-weight: 500;
		margin-top: 10px;
		background: linear-gradient(90deg, #d10ed1, #4aaef1) padding-box;
	}
</style>