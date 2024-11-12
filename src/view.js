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
