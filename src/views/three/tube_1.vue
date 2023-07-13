<template>
  <div class="learn_one" id="learn_one"></div>
</template>

<script>
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { render } from '@vue/runtime-dom';
import * as dat from 'dat.gui'
import start from './img/start.jpg'
import starts2 from './img/starts2.jpg'
import Stats from 'stats.js'

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
      renderer.setSize(width,height);
      //设置阴影
      renderer.shadowMap.enabled = true;
      
      document.getElementById('learn_one').appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
      //设置鼠标控制  第二个参数是鼠标作用的对象
      const orbit = new OrbitControls(camera,renderer.domElement)

      camera.position.set(0,2,3)
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
      //材料设置双面 standard材质吸收光
		  const planeMaterial = new THREE.MeshStandardMaterial(
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
      const gridHelper = new THREE.GridHelper(30);
      scene.add(gridHelper)


      //添加球状结构 4 50 50
      const sphereGeometry = new THREE.SphereGeometry(4,50,50);
      //材料不一样效果不同MeshBasicMaterial
      //MeshStandardMaterial更暗
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color:0x0000FF,
        wireframe:false,

      })
      const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial)
      scene.add(sphere)
       //设置图形位置 -10 10 0
      sphere.position.set(-10,10,0);
      //阴影相关
      sphere.castShadow = true;


      //设置灯光
      const ambientLight = new THREE.AmbientLight(0x333333);
      scene.add(ambientLight)



      //TODO 1设置定向光，设置颜色跟强度
      // const directionalLight = new THREE.DirectionalLight(0xFFFFFF,.8);
      // scene.add(directionalLight);
      // directionalLight.position.set(-30,40,0);
      // directionalLight.castShadow = true;
      // directionalLight.shadow.camera.bottom = -12;


      // TODO 1添加定向光源辅助
      // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight,5);
      // scene.add(dLightHelper)
      // TODO 1
      // const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
      // scene.add(dLightShadowHelper)


      // TODO 2 聚光
      const spotLight = new THREE.SpotLight(0xFFFFFF);
      scene.add(spotLight)
      spotLight.position.set(-100,100,0);
      spotLight.castShadow = true;
      //缩小灯光
      spotLight.angle = 0.2;
      //聚光辅助线
      const sLightHelper = new THREE.SpotLightHelper(spotLight);
      scene.add(sLightHelper)

      //雾
      // scene.fog = new THREE.Fog(0xFFFFFF,0,100)
      scene.fog = new THREE.FogExp2(0xFFFFFF,0.01)


      //设置图片背景图 --平面
      const textureLoader = new THREE.TextureLoader();
      scene.background = textureLoader.load(starts2)
      //TODO     未生效  背景设置6个方向的图片
      // let url = [
      //   start,
      //   start,
      //   starts2,
      //   starts2,
      //   starts2,
      //   starts2
      // ]
      // const cubeTextureLoader = new THREE.CubeTextureLoader().load(url);
      // scene.background = cubeTextureLoader;

      //正方体的几何面贴图
      const box2Geometry = new THREE.BoxGeometry(4,4,4);
      const box2Material = new THREE.MeshBasicMaterial({
        // map: textureLoader.load(start)
      }) 
      //正方体几个面的设置
      const box2MultiMaterial = [
        new THREE.MeshBasicMaterial({map: textureLoader.load(start)}),
        new THREE.MeshBasicMaterial({map: textureLoader.load(start)}),
        new THREE.MeshBasicMaterial({map: textureLoader.load(starts2)}),
        new THREE.MeshBasicMaterial({map: textureLoader.load(start)}),
        new THREE.MeshBasicMaterial({map: textureLoader.load(starts2)}),
        new THREE.MeshBasicMaterial({map: textureLoader.load(start)})
      ]
      const box2 = new THREE.Mesh(box2Geometry,box2MultiMaterial);
      scene.add(box2);
      box2.position.set(0,15,10);
      //设置立方体名字
      box2.name = 'try2';

      //TODO图形4 设置网格
      const plane2Geometry = new THREE.PlaneGeometry(10,10,10,10);
      const plane2Material = new THREE.MeshLambertMaterial({
        color: 0xFFFFFF,
        wireframe:true
      })
      const plane2 = new THREE.Mesh(plane2Geometry,plane2Material)
      scene.add(plane2)
      plane2.position.set(10,10,15)
      plane2.geometry.attributes.position.array[0] -=10*Math.random();
      plane2.geometry.attributes.position.array[1] -=10*Math.random();
      plane2.geometry.attributes.position.array[2] -=10*Math.random();
      const lastPointZ = plane2.geometry.attributes.position.array.length -1;
      plane2.geometry.attributes.position.array[lastPointZ] -=10*Math.random();

      //
      const sphere2Geometry = new THREE.SphereGeometry(4);
      const vShader = `void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`;
      const fShader = `void main(){
        gl_FragColor = vec4(0.5,0.5,1.0,1.0);
      }`;
      
      const sphere2Material = new THREE.ShaderMaterial({
        vertexShader: vShader,
        fragmentShader: fShader
      })
      const sphere2 = new THREE.Mesh(sphere2Geometry,sphere2Material)
      scene.add(sphere2)
      sphere2.position.set(-5,10,10)

      //添加球状图像控制器
      const gui = new dat.GUI();
      const options = {
        sphereColor:'#ffea00',
        wireframe:false,
        speed: 0.01,
          //聚光
        angle:0.2,
        penumbar:0.01,
        intensity:0.1
      }
      gui.addColor(options,'sphereColor').onChange(function(e){
        sphere.material.color.set(e)
      })
      gui.add(options,'wireframe').onChange(function(e){
        sphere.material.wireframe = e;
      })
      //弹跳速度第三个参数设置最小数，第四个参数设置上限
      gui.add(options,'speed',0,0.1)
      gui.add(options,'angle',0,1)
      gui.add(options,'penumbar',0,1);
      gui.add(options,'intensity',0,1)

    
     
      let step = 0;

      //鼠标
      const mousePosition = new THREE.Vector2();
      window.addEventListener('mousemove',function(e){
        mousePosition.x = (e.clientX/width)*2-1;
        mousePosition.y = (e.clientY/height)*2+1
      })
      const rayCaster = new THREE.Raycaster();

      //球体ID
      const sphereId = sphere.id;
      const stats = new Stats()
		  stats.dom.style.position = 'absolute';
     	stats.dom.style.left = '0';
     	stats.dom.style.top = '0';
     	document.getElementById('learn_one').appendChild(stats.dom);
      let animate=()=>{
        box.rotation.x +=0.01;
        box.rotation.y +=0.01;

        //设置球状物体弹跳速度
        step+=options.speed;
        sphere.position.y = 10*Math.abs(Math.sin(step))
        //控制灯光等
        spotLight.angle = options.angle;
        spotLight.penumbra = options.penumbar;
        spotLight.intensity = options.intensity;
        sLightHelper.update()

        //鼠标
        rayCaster.setFromCamera(mousePosition,camera);
        const intersects = rayCaster.intersectObjects(scene.children)
        for(let i=0; i<intersects.length;i++){
          if(intersects[i].object.id === sphereId){
            intersects[i].object.material.color.set(0xFF0000);
          }
          if(intersects[i].object.name == 'try2') {
            intersects[i].object.rotation.x +=0.01;
            intersects[i].object.rotation.y +=0.01;
          }
        }
        //TODO图4网格
        plane2.geometry.attributes.position.array[0] =10*Math.random();
        plane2.geometry.attributes.position.array[1] =10*Math.random();
        plane2.geometry.attributes.position.array[2] =10*Math.random();
        plane2.geometry.attributes.position.array[lastPointZ] =10*Math.random();
        plane2.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene,camera);
        renderer.setAnimationLoop(animate)
        stats.begin();
        // 执行你的更新逻辑
        stats.end();
      }
     animate()
      // 页面缩放事件监听
		window.addEventListener('resize', () => {
		  width = document.getElementById('learn_one').clientWidth;
      height = document.getElementById('learn_one').clientHeight;
		  // 更新渲染
		  renderer.setSize(width, height);
		  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		  // 更新相机
		  camera.aspect = width / height;
		  camera.updateProjectionMatrix();
		});


  },
 }
}
</script>

<style scoped>
.learn_one{
  width: 100%;
  height: 100%;
  background-color: #ec1f1f;
}

</style>