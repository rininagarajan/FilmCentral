const app = Vue.createApp({ // links to app in html, tells js what it controls
    mounted() { // when the "app" is "mounted", this happens (mount = page load)
        const carousel = document.querySelector('.carousel'); // document.querySelector selects element, this case carousel 

        carousel.addEventListener('scroll', () => { //event listener is like an interaction that happens like scroll or click
            this.tiltImages(carousel); //when scrolls, do this
        });

        this.tiltImages(carousel); 
        
        document.querySelectorAll('.disc_pic').forEach(pic => {
            pic.addEventListener('mouseenter', () => {
                pic.style.transform = `perspective(800px) rotateY(0deg) scale(1.05)`; // need to change the tilt back to normal when hovered, so i do that and the scale in here at the same time instead of in css
            });

            pic.addEventListener('mouseleave', () => {
                this.tiltImages(carousel);
            });
});
    },

    methods: {
        tiltImages(carousel) {
            const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2; //find center
            document.querySelectorAll('.disc_pic').forEach(pic => { // choose pic
                const picCenter = pic.getBoundingClientRect().left + pic.offsetWidth / 2; 
                const tilt = (picCenter - carouselCenter) * 0.010; //to calculate tilt 
                pic.style.transform = `perspective(800px) rotateY(${-tilt}deg)`; 
            });
        }
    }
})

app.mount('#app')
