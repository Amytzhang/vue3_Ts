<template>
  <div id="try" class="trye"></div>
</template>

<script  lang="module">
import * as THREE from 'three';
export default {
  name:'trye',
  mounted () {
    this.initFn()
  },
  methods: {
    initFn(){
      var scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    var material = new THREE.MeshLambertMaterial({
        color: 0xff0000
    }); //材质对象Material，这里只设置颜色
    var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中

    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    /**
     * 相机设置
     */
    const sizes = {
		  width: document.getElementById('try').clientWidth,
		  height: document.getElementById('try').clientHeight
		}
    var width = sizes.width; //窗口宽度
    var height =sizes.height; //窗口高度
    //创建相机对象
    var camera=new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(200, 200, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.getElementById('try').appendChild(renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    renderer.render(scene, camera);

    	// 页面缩放事件监听
		window.addEventListener('resize', () => {
		  sizes.width = document.getElementById('try').clientWidth;
		  sizes.height = document.getElementById('try').clientHeight;
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
		  mesh && (mesh.rotation.y += .02);
		  mesh && (mesh.rotation.x += .02);
		  // 页面重绘时调用自身
		  window.requestAnimationFrame(tick);
		}
		tick();
    }
  }
}

</script>
<style  scoped>
.trye{
  width:100%;
  height:100%;
 
  position: relative;
}
</style>


