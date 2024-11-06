<?php

$context = array(
	'decibelValue' => 70,
)

?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context($context); ?>
>
	<h2>Decible Number <span data-wp-text="context.decibelValue"></span></h2>
	<div>
  		<input 
			type="range" 
			id="volume" 
			name="volume" 
			min="0" 
			max="140"
			value="70"
			data-wp-on--change="callbacks.updateRange"
			/>
  		<label for="volume">Volume</label>
	</div>
</div>
