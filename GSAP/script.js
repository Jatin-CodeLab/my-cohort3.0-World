console.log("script.js file is running...");
//? Write a code........
//?>--------------------------------------------<?//

gsap.from(".box", {
	x: 1000,
	y: 200,
	duration: 2,
    delay: 1,
    rotate: 360 * 2,
    
});
gsap.to(".box", {
	x: 1000,
	y: 200,
	duration: 10,
    delay: 4,
    rotate: 360*2,
    borderRadius:'20px'
});


gsap.to(".box1", {
	x: 600,
	y: -100,
	duration: 2,
	delay: 1,
});
