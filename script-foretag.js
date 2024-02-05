document.addEventListener('DOMContentLoaded', function () {
	const boxContainers = document.querySelectorAll('.box-container');

	boxContainers.forEach(boxContainer => {
		const boxes = boxContainer.querySelectorAll('.box');
		let index = 0;
		const boxWidth = boxes[0].offsetWidth;

		// Clone the first few boxes and append them to the end
		for (let i = 0; i < 5; i++) {
			const clone = boxes[i].cloneNode(true);
			boxContainer.appendChild(clone);
		}

		setInterval(() => {
			index++;
			const translateValue = -index * boxWidth;

			boxContainer.style.transition = 'transform 0.5s ease';
			boxContainer.style.transform = `translateX(${translateValue}px)`;

			if (index === boxes.length) {
				setTimeout(() => {
					boxContainer.style.transition = 'none';
					boxContainer.style.transform = 'translateX(0)';
					index = 0;
				}, 500); // Wait for the transition to complete before resetting
			}
		}, 2000); // Change this value to control the sliding speed (milliseconds)
	});
});

//////////Gjort av alexander
