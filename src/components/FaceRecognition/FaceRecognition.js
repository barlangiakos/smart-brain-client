import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
	const boxes = box.map((region, i) => {
		return <div key={i} className='bounding-box'
					style={{top: region.topRow, right: region.rightCol, bottom: region.bottomRow, left: region.leftCol}}>
			   </div>
	})

	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
				{boxes}
			</div>
		</div>
	);
}

export default FaceRecognition;