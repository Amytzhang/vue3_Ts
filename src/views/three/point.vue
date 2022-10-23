<template>
  <div id="point">
    <!-- <canvas class="pointExample"></!--> -->
  </div>
</template>

<script>
import * as THREE from 'three';
import {TrackballControls,CSS3DRenderer, CSS3DObject } from 'three';
export default {
  name:'point',
  data () {
    return {
      

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init() {
      const sizes = {
		    width: document.getElementById('point').clientWidth,
        height: document.getElementById('point').clientHeight
      }
		  const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer();
		  // 初始化相机
		  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000)
      camera.position.set(0,0,1000)
      scene.add(camera);
      var spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(40, 0, 50);
      spotLight.castShadow = true;
      scene.add(spotLight)
      renderer.setSize(sizes.width,sizes.height)
      document.getElementById('point').appendChild(renderer.domElement)


      const vertices = [];
      for ( let i = 0; i < 30000; i ++ ) {
          const x = THREE.MathUtils.randFloatSpread( 2000 );
          const y = THREE.MathUtils.randFloatSpread( 2000 );
          const z = THREE.MathUtils.randFloatSpread( 2000 );
          vertices.push( x, y, z );
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute( 'position', new THREE.Float32BufferAttribute(vertices, 3));

      const star = new THREE.TextureLoader().load('./img/start.jpg',()=>{
        renderer.render(scene,camera)
      })
      const material = new THREE.PointsMaterial({size:10,color: 0x888888,})
      const points = new THREE.Points(geometry,material)
      points.translateY(-100)
      
      scene.add(points)


      renderer.render(scene,camera)
      // let render = ()=>{
      //   renderer.render(scene,camera)
      //   requestAnimationFrame(render)
      // }
      // render()


    }
   
  },
  components:{

  }
}
</script>

<style lang="scss" scoped>
    #point {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .pointExample{
      width: 500px;
      height: 500px;
    }
</style>