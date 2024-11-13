<?php

$context = array(
	'decibelValue' => 0,
	'backgroundColor' => '#006400',
	'isChecked' => 'false',
	'clipPath' => 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
)

?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context($context); ?>
	data-wp-style--background="context.backgroundColor"
	data-wp-on--input="actions.updateColor"
>
	<h2 class="decibel-number">
		Decibel Number:
		<span 
			id="decibelDisplay"
			data-wp-text="context.decibelValue"
		>
		</span>
	</h2>
	<div 
		class="meter-wrapper"
		data-wp-style--clip-path="context.clipPath"
	>
			<div class="meter meter-green"></div>
			<div class="meter meter-green"></div>
			<div class="meter meter-green"></div>
			<div class="meter meter-green"></div>
			<div class="meter meter-green"></div>
			<div class="meter meter-yellow"></div>
			<div class="meter meter-yellow"></div>
			<div class="meter meter-yellow"></div>
			<div class="meter meter-yellow"></div>
			<div class="meter meter-yellow"></div>
			<div class="meter meter-red"></div>
			<div class="meter meter-red"></div>
			<div class="meter meter-red"></div>
			<div class="meter meter-red"></div>
			
		</div>
	<div>
	<div>
  		<input 
			id="myRange"
			type="range" 
			id="volume" 
			name="volume" 
			min="0" 
			max="140"
			value="context.decibelValue"
			data-wp-on--input="actions.updateRange"
			/>
  		<label for="volume">Volume</label>
	</div>
		<input 
			type="checkbox" 
			id="myCheckbox" 
			name="myCheckbox"
			data-wp-on--change="actions.updateCheckbox"
			data-wp-bind--aria-expanded="context.isChecked"
		>
		<label for="myCheckbox">I agree to the terms and conditions</label>
		<p data-wp-bind--hidden="context.isChecked">You have successfully agreed!</p>
	</div>	
</div>
