<template>
  <div ref="container"></div>
</template>

<script>
import {defineComponent, ref, onMounted, getCurrentInstance} from 'vue';

export default defineComponent({
  name: 'Three',
  props: {
    useGasp: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const {proxy} = getCurrentInstance();
    console.log(props, proxy);
    const container = ref(null);
    let renderer;
    let scene;
    let camera;
    let cube;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    const init = async () => {
      scene = new window.THREE.Scene();
      camera = new window.THREE.PerspectiveCamera(
        75,
        window.innerWidth - 40 / window.innerHeight - 20,
        0.1,
        1000
      );
      camera.position.z = 5;
      renderer = new window.THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth - 40, window.innerHeight - 20);
      container.value.appendChild(renderer.domElement);
      const geometry = new window.THREE.BoxGeometry(2, 2, 2); // 宽、高、深
      const material = new window.THREE.MeshLambertMaterial({
        color: 0x0099ff // 蓝色
      });

      cube = new window.THREE.Mesh(geometry, material);
      scene.add(cube);
      const light = new window.THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      scene.add(light);
      animate();
    };
    /*const useGsapPlugin = () => {
      if (props.useGasp) {
        return proxy.$.appContext.$IRenderer.scripts['gsap'].execute();
      }
      return Promise.resolve();
    };*/
    onMounted(() => {
      init();
    });
    return {
      container
    };
  }
});
</script>
