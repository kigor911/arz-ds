(function() {
    const canvas = document.getElementById('circle--particle');
    const widthCanvas = window.innerWidth;
    canvas.width = window.innerWidth;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    const pi = Math.PI;
    const particles = [];

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * (widthCanvas - 50 + 1) + 50;
            this.y = Math.random() * (1000 - 50 + 1) + 50;
            this.radius = Math.random() * (50 - 10 + 1) + 20;
            this.speed = Math.random() * (1 - 0.5) + 0.5;
            this.direction = Math.random() < 0.5 ? -1 : 1;
        }

        draw() {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(0, 0, 0, 0.651)';
            ctx.arc(this.x, this.y, this.radius, 0, pi * 2);
            ctx.fill();
        }

        update() {
            this.x += this.direction * this.speed;
            this.y -= 1;
            if (this.y + this.radius < 0 || (this.x > canvas.width + this.radius || this.x + this.radius < 0)) {
                this.reset();
                this.y = canvas.height + this.radius;
            }
            this.draw();
        }
    }

    for (let i = 0; i < 15; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => particle.update());
        requestAnimationFrame(animate);
    }

    animate();
})();