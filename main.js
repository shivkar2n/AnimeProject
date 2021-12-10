anime({
    targets: 'div.column', // HTML element to apply animation
    height: [
        { value: '75%', duration: anime.stagger(50, { start: 400 }) },
        { value: '40%', duration: anime.stagger(-50, { start: 800 }) },
    ],

    // Change height from px to 100%
    easing: 'easeInOutQuad', // Define timing function of animation
    direction: 'alternate', // Direction of animation alternates
    loop: true
});