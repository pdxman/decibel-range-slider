/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

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
	},
	callbacks: {
		logIsOpen: () => {
			const { isOpen } = getContext();
			// Log the value of `isOpen` each time it changes.
			console.log( `Is open: ${ isOpen }` );
		},
		updateRange(event) {
			const context = getContext(); 
			context.decibelValue = event.target.value;  
			//console.log('range moving', context.decibelValue);
			
		},
	},
} );
