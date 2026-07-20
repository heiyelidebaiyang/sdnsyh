(function(){
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];
    const particleCount = 120;

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height - height;
            this.size = Math.random() * 3 + 1.5;
            this.speed = Math.random() * 2.5 + 1.2;
            this.opacity = Math.random() * 0.5 + 0.15;
        }
        update() {
            this.y += this.speed;
            if (this.y > height) {
                this.reset();
                this.y = -this.size;
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            const p = new Particle();
            p.y = Math.random() * height;
            particles.push(p);
        }
    }

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
})();