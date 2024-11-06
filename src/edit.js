import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();

	return (
		<p { ...blockProps }>
			{ __(
				'Decibel Range Slider – hello from the editor!',
				'decibel-range-slider'
			) }
		</p>
	);
}
