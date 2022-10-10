<template>
 <div>
   <div id="container"></div>
		<div id="blocker"></div>
 </div>
</template>

<script  lang="ts">
import {TrackballControls,CSS3DRenderer, CSS3DObject } from 'three';
export default {
  name:'threeExample',
  data () {
    return {
       camera:'',
        scene:'', renderer:'',controls:''
    }
  },
  created () {
   this.init();
	 this.animate();
 },
  methods: {
    Element( id, x, y, z, ry ) {

				const div = document.createElement( 'div' );
				div.style.width = '480px';
				div.style.height = '360px';
				div.style.backgroundColor = '#000';

				const iframe = document.createElement( 'iframe' );
				iframe.style.width = '480px';
				iframe.style.height = '360px';
				iframe.style.border = '0px';
				iframe.src = [ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
				div.appendChild( iframe );

				const object = new CSS3DObject( div );
				object.position.set( x, y, z );
				object.rotation.y = ry;

				return object;

      },
      init() {

				const container = document.getElementById( 'container' );

			  this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
				this.camera.position.set( 500, 350, 750 );

				this.scene = new THREE.Scene();

				this.renderer = new CSS3DRenderer();
				this.renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( this.renderer.domElement );

				const group = new THREE.Group();
				group.add( this.Element( 'SJOz3qjfQXU', 0, 0, 240, 0 ) );
				group.add( this.Element( 'Y2-xZ-1HE-Q', 240, 0, 0, Math.PI / 2 ) );
				group.add( this.Element( 'IrydklNpcFI', 0, 0, - 240, Math.PI ) );
				group.add( this.Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
				this.scene.add( group );

				this.controls = new TrackballControls( this.camera, this.renderer.domElement );
				this.controls.rotateSpeed = 4;

				window.addEventListener( 'resize', this.onWindowResize );

				// Block iframe events when dragging camera

				const blocker = document.getElementById( 'blocker' );
				blocker.style.display = 'none';

				this.controls.addEventListener( 'start', function () {

					blocker.style.display = '';

				} );
				this.controls.addEventListener( 'end', function () {

					blocker.style.display = 'none';

				} );

			},

			onWindowResize() {

				this.camera.aspect = window.innerWidth / window.innerHeight;
				this.camera.updateProjectionMatrix();
				this.renderer.setSize( window.innerWidth, window.innerHeight );

			},

		animate() {

				requestAnimationFrame( this.animate );
				this.controls.update();
				this.renderer.render( this.scene, this.camera);

			}
  },
  components:{

  }
}

</script>

<style scoped>

</style>