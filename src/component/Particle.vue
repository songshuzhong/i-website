<template>
  <canvas ref="canvas" :class="classname" />
</template>

<script>
import {defineComponent, ref, onMounted, onBeforeUnmount} from 'vue';

class Box {
  constructor(index, x, y, options) {
    this.content = options.content;
    this.height = options.height;
    this.index = index;
    this.x = x;
    this.y = y;
    this.r = Math.random() * options.radius + 1;
    this.alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = `rgba(255,255,255,${this.alpha})`;
  }

  draw() {
    this.content.fillStyle = this.color;
    this.content.shadowBlur = this.r * 2;
    this.content.beginPath();
    this.content.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.content.fill();
  }

  move() {
    this.y -= 1;
    if (this.y <= -10) {
      this.y = this.height + 10;
    }
    this.draw();
  }
}

export default defineComponent({
  name: 'Particle',
  props: {
    radius: { type: Number, default: 10 },
    width: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    classname: { type: String, default: '' },
    particleCount: { type: Number, default: 80 },
    action: Function,
  },
  setup(props) {
    const canvas = ref(null);
    const ctx = ref(null);
    const round = ref([]);
    let animationId;
    let resizeObserver;
    let lastTime = 0;

    const initParticles = () => {
      if (!ctx.value) {
        return;
      }
      round.value = Array.from({ length: props.particleCount }, (_, i) =>
        new Box(i, Math.random() * canvas.value.width, Math.random() * canvas.value.height, {
          content: ctx.value,
          height: canvas.value.height,
          radius: props.radius
        })
      );
    };

    const animate = (timestamp) => {
      if (timestamp - lastTime < 32) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = timestamp;
      if (!ctx.value || !canvas.value) {
        return;
      }
      ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
      round.value.forEach(particle => particle.move());
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas.value?.parentNode) {
        return;
      }
      const parent = canvas.value.parentNode;
      const dpr = window.devicePixelRatio;

      canvas.value.width = (props.width || parent.offsetWidth) * dpr;
      canvas.value.height = (props.height || parent.offsetHeight) * dpr;
      canvas.value.style.width = `${props.width || parent.offsetWidth}px`;
      canvas.value.style.height = `${props.height || parent.offsetHeight}px`;

      ctx.value.scale(dpr, dpr);
      initParticles();
    };

    onMounted(() => {
      if (!canvas.value) {
        return;
      }
      ctx.value = canvas.value.getContext('2d');
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(canvas.value.parentNode);
      handleResize();
      animate();
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
    });

    return {canvas};
  }
});
</script>