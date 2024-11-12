<?php

$context = array(
	'decibelValue' => 0,
	'backgroundColor' => '#006400'
)

?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context($context); ?>
	data-wp-style--background="context.backgroundColor"
	data-wp-on--input="actions.updateColor"
>
	<h2>Decibel Number <span id="decibelDisplay" data-wp-text="context.decibelValue"></span></h2>
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
</div>
