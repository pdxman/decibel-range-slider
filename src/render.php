<?php

$context = array(
	'decibelValue' => 0,
	'backgroundColor' => '#006400',
	'isChecked' => 'false',
	'clipPath' => 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
	'changed' => 'false',
	'sounds' => array(
			//   "0" => "hello",
			//   "1" => "hola",
			//   "2" => "olá" 
			"0" => "Threshold of human hearing",
			"1" => "Breathing",
			"2" => "Rustling leaves, ticking watch, whispering from 5 feet away",
			"3" => "Whisper from nearby",
			"4" => "Quiet library, average room noise",
			"5" => "Certified quiet dishwasher",
			"6" => "normal conversation, air conditioning unit",
			"7" => "Vacuum cleaner, washing machine, average maximum television",
			"8" => "Garbage disposal, food blender, alarm clock",
			"9" => "Motorcycle at 25 feet, lawn mower, power tools, hair dryer",
			"10" => "Dog's bark, snowmobile, hair dryer",
			"11" => "Concert, Sporting events",
			"12" => "Car horn, steel mill, siren",
			"13" => "Jet taking off",
			"14" => "Aircraft carrier deck, fireworks"
	),
	'sound' => "Threshold of human hearing"
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
			<div class="meter meter-yellow meter-eighty"></div>
			<div class="meter meter-yellow"></div>
			<div class="meter meter-red"></div>
			<div class="meter meter-red"></div>
			<div class="meter meter-red"></div>
			<div class="meter meter-red"></div>
			
		</div>
	<div>
	<h3 
		id="firstSound"
		class="sound" 
		data-wp-text="context.sound"
	></h3>
	<p id="second-sound"></p>
	<div class="slider-wrapper">
		<label for="volume">Volume</label>
		<input 
			class="slider"
			id="myRange"
			type="range" 
			id="volume" 
			name="volume" 
			min="0" 
			max="140"
			value="context.decibelValue"
			data-wp-on--input="actions.updateRange"
		/>
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
