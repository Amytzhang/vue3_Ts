<template>
 <div class="example" id="threeContent" >
   <canvas class="threeExample"></canvas>
	
 </div>
</template>

<script>

import * as THREE from 'three';
import {TrackballControls,CSS3DRenderer, CSS3DObject } from 'three';
export default {
  name:'threeExample',
  data () {
    return {
    }
  },
  mounted () {
	this.init()
	},
  methods: {
   init() {
		const canvas = document.querySelector('canvas.threeExample');
		// 定义渲染尺寸
		const sizes = {
		  width: document.getElementById('threeContent').clientWidth,
		  height: document.getElementById('threeContent').clientHeight
		}

		const renderer = new THREE.WebGLRenderer({ canvas: canvas });
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		// 初始化场景
		const scene = new THREE.Scene();

		// 初始化相机
		const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.y = 2;
		camera.position.z = 5;
		scene.add(camera);

		//设置坐标辅助线
		const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper)

		// 创建网格对象
		var grid3=new THREE.GridHelper(30,30,0xf0f0f0,0xffffff);
		scene.add(grid3);

		//设置3d物体
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x03c03c });
		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

	

		// 页面缩放事件监听
		window.addEventListener('resize', () => {
		  sizes.width = document.getElementById('threeContent').clientWidth;
		  sizes.height = document.getElementById('threeContent').clientHeight;
		  // 更新渲染
		  renderer.setSize(sizes.width, sizes.height);
		  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		  // 更新相机
		  camera.aspect = sizes.width / sizes.height;
		  camera.updateProjectionMatrix();
		});

		// 动画
		const tick = () => {
		  // 更新渲染器
		  renderer.render(scene, camera);
		  // 给网格模型添加一个转动动画
		  mesh && (mesh.rotation.y += .01);
		  mesh && (mesh.rotation.x += .01);
		  // 页面重绘时调用自身
		  window.requestAnimationFrame(tick);
		}
		tick();
		}
		
  },
  components:{

  }
}

</script>

<style scoped>
.example{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.threeExample {
  position: relative;
  top: 0;
  left: 0;
  outline: none;
}
</style>