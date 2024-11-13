/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

window.addEventListener('load', () => {
    document.getElementById('myRange').value = 0;
});

const { state } = store( 'create-block', {
	state: {
		get themeText() {
			return state.isDark ? state.darkText : state.lightText;
		},
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
			//console.log('range moving', context.decibelValue);

			if( context.decibelValue <= 20 ){
				context.clipPath = 'polygon(0 0, 14% 0, 14% 100%, 0 100%)';
			} else if( context.decibelValue <= 40){
				context.clipPath = 'polygon(0 0, 28% 0, 28% 100%, 0 100%)';
			} else if( context.decibelValue <= 60){
				context.clipPath = 'polygon(0 0, 42% 0, 42% 100%, 0 100%)';
			} else if( context.decibelValue <= 80){
				context.clipPath = 'polygon(0 0, 56% 0, 56% 100%, 0 100%)';
			} else if( context.decibelValue <= 100){
				context.clipPath = 'polygon(0 0, 70% 0, 70% 100%, 0 100%)';
			} else if( context.decibelValue <= 120){
				context.clipPath = 'polygon(0 0, 84% 0, 84% 100%, 0 100%)';
			} else {
				context.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
			} 
			
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
        //     const context = getContext();
		// 	if( context.decibelValue <= 20){
		// 		context.backgroundColor = '#006400'; 
		// 	} else if(context.decibelValue <= 40){
		// 		context.backgroundColor = '#3A5F0B'; 
		// 	} else if(context.decibelValue <= 60){
		// 		context.backgroundColor = '#556B2F'; 
		// 	} else if(context.decibelValue <= 80){
		// 		context.backgroundColor = '#B8860B'; 
		// 	} else if(context.decibelValue <= 100){
		// 		context.backgroundColor = '#8B4513'; 
		// 	} else if(context.decibelValue <= 120){
		// 		context.backgroundColor = '#A52A2A'; 
		// 	} else {
		// 		context.backgroundColor = '#8B0000'; 
		// 	}
        // },
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
