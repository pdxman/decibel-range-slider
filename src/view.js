/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

window.addEventListener('load', () => {
    document.getElementById('myRange').value = 0;
	document.getElementById('first-sound').value = 'Threshold of human hearing';
});

// window.addEventListener('load', () => {
//     document.getElementById('myRange').value = 0;
//     document.getElementById('firstSound').textContent = 'Threshold of human hearing';
// });



const { state } = store( 'create-block', {
	state: {
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
		// get getContext() {
		// 	context.sounds = 'Threshold of human hearing';
		// 	context.decibelValue = 0 ; 
		// }
	},
	actions: {
		updateCheckbox(){
			const context = getContext();
			context.isChecked = ! context.isChecked; 
			console.log(context.isChecked); 
		},
		toggleOpen() {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
		toggleTheme() {
			state.isDark = ! state.isDark;
		},
		updateRange(event) {
			const context = getContext(); 
			context.decibelValue = event.target.value;  
			
			//animates indicator 
			const percentage = Math.min(Math.ceil(context.decibelValue / 20) * 15, 100);
			context.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;

			context.changed = !context.changed;
			//console.log('changed?', context.changed); 

			//updates sound with decibel increase 
			const sounds = context.sounds; 
			const soundIndex = Math.floor(context.decibelValue / 10) % sounds.length; // Calculate sound index based on height

			context.sound = context.sound === '' ? '' : sounds[soundIndex];
			
		},
		updateTestNumber: () => {
			console.log('BIG Generator!')
		},
		increaseCounter: () => {
            const context = getContext();
            context.counter++;
        },
        decreaseCounter: () => {
            const context = getContext();
            context.counter--;
        },
		updateColor: () => {
  			const context = getContext();
			const colors = [
				{ max: 20, color: '#006400' },
				{ max: 40, color: '#3A5F0B' },
				{ max: 60, color: '#556B2F' },
				{ max: 80, color: '#B8860B' },
				{ max: 100, color: '#8B4513' },
				{ max: 120, color: '#A52A2A' },
			];
		
		for(const range of colors){
			if(context.decibelValue <= range.max){
				context.backgroundColor = range.color;
				break; 
			}
		}
	}
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
		},
		logCounter: () => {
            const { counter } = getContext();
            console.log( 'Counter is ' + counter + ' at ' + new Date() );
        },
		// updateRange(event) {
		// 	const context = getContext(); 
		// 	context.decibelValue = event.target.value;  
		// 	console.log('range moving', context.decibelValue);
			
		// },
	},
} );
