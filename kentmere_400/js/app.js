const app = Vue.createApp({
    mounted() {
        const carousel = document.querySelector('.carousel');

        carousel.addEventListener('scroll', () => {
            this.tiltImages(carousel);
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
            const carouselCenter = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
            document.querySelectorAll('.disc_pic').forEach(pic => {
                const picCenter = pic.getBoundingClientRect().left + pic.offsetWidth / 2;
                const tilt = (picCenter - carouselCenter) * 0.010;
                pic.style.transform = `perspective(800px) rotateY(${-tilt}deg)`;
            });
        }
    }
})

app.mount('#app')