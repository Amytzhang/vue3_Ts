<template>
  <div class="learn_one" id="learn_one"></div>
</template>

<script>
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { render } from '@vue/runtime-dom';
import * as dat from 'dat.gui'
import threeExampleVue from './threeExample.vue';

export default {
  name: 'tubeOne',
  data() {
    return {
      
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      let width = document.getElementById('learn_one').clientWidth;
      let height = document.getElementById('learn_one').clientHeight;

      const renderer = new THREE.WebGLRenderer();
      //设置阴影
      renderer.shadowMap.enabled = true;
      renderer.setSize(width,height);
      

      document.getElementById('learn_one').appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
      //设置鼠标控制  第二个参数是鼠标作用的对象
      const orbit = new OrbitControls(camera,renderer.domElement)

      camera.position.set(0,2,5)
      orbit.update();
      //坐标轴辅助线
      const axesHelper = new THREE.AxesHelper(5)
      scene.add(axesHelper)

      //设置box
      const boxGeometry = new THREE.BoxGeometry();
      const boxMaterial = new THREE.MeshBasicMaterial({color:0x00FF00});
      const box = new THREE.Mesh(boxGeometry,boxMaterial);
      scene.add(box)

      //设置平板
		  const planeGeometry = new THREE.PlaneGeometry(30,30);
      //材料设置双面
		  const planeMaterial = new THREE.MeshBasicMaterial(
        { color:0xFFFFFF,
          side: THREE.DoubleSide
        });
		  const plane = new THREE.Mesh(planeGeometry,planeMaterial);
		  scene.add(plane)
      //设置平板旋放角度
      plane.rotation.x = -0.5 * Math.PI;
      //设置阴影接受的物体
      plane.receiveShadow = true;


      //设置网格
      const gridHelper = new THREE.GridHelper(30,30);
      scene.add(gridHelper)


      //添加球状结构
      const sphereGeometry = new THREE.SphereGeometry(4,50,50);
      //材料不一样效果不同MeshBasicMaterial
      //MeshStandardMaterial更暗
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color:0x0000FF,
        wireframe:false,
      })
      const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial)
      scene.add(sphere)
       //设置图形位置
      sphere.position.set(-10,-10,0);
      //阴影相关
      sphere.castShadow = true;


      //设置灯光
      const ambientLight = new THREE.AmbientLight(0x333333);
      scene.add(ambientLight)

      //设置定向光，设置颜色跟强度
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF,0.8);
      scene.add(directionalLight);
      directionalLight.position.set(-30,50,0);
      directionalLight.castShadow = true;

      //添加定向光源辅助
      const dLightHelper = new THREE.DirectionalLightHelper(directionalLight,5);
      scene.add(dLightHelper)

      const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
      scene.add(dLightShadowHelper)

      //添加球状图像控制器
      const gui = new dat.GUI();
      const options = {
        sphereColor:'#ffea00',
        wireframe:false,
        speed: 0.01
      }
      gui.addColor(options,'sphereColor').onChange(function(e){
        sphere.material.color.set(e)
      })
      gui.add(options,'wireframe').onChange(function(e){
        sphere.material.wireframe = e;
      })
      //弹跳速度第三个参数设置最小数，第四个参数设置上限
      gui.add(options,'speed',0,0.1)

    
     
      let step = 0;
      let animate=()=>{
        box.rotation.x +=0.01;
        box.rotation.y +=0.01;

        //设置球状物体弹跳速度
        step+=options.speed;
        sphere.position.y = 10*Math.abs(Math.sin(step))


        renderer.render(scene,camera);
        
      }
      renderer.setAnimationLoop(animate)
    }
  },
}
</script>

<style scoped>
.learn_one{
  width: 100%;
  height: 100%;
  background-color: #ec1f1f;
}

</style>