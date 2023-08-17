import * as THREE from './assets/threejs/build/three.module.js';

import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.18/+esm';

import { GLTFLoader } from './assets/threejs/GLTFLoader.js'
import { OrbitControls } from './assets/threejs/OrbitControls.js'


var scene = new THREE.Scene();

let explosionTexture = new THREE.TextureLoader().load('/assets/models/textures/crowbar_baseColor.png')
let normalTexture = new THREE.TextureLoader().load('/assets/models/textures/crowbar_metallicRoughness.png')
let metallicTexture = new THREE.TextureLoader().load('/assets/models/textures/crowbar_normal.png')
explosionTexture.flipY = false
normalTexture.flipY = false
metallicTexture.flipY = false
const material = new THREE.MeshStandardMaterial({
  map: explosionTexture,
  normalMap: normalTexture,
  metalnessMap: metallicTexture,
})

const gltfLoader = new GLTFLoader()
gltfLoader.load('/assets/models/scene.gltf', (gltf) => {
  let model = gltf.scene
  scene.add(model)
})

var pointLight = new THREE.SpotLight( 0xffffff, 100 )
pointLight.position.set( 0, 1, 100 );
pointLight.distance = 0;
pointLight.power = 1024;

var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 0, 0, 0 );

var ambient = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambient);


var width = window.innerWidth;
var height = window.innerHeight;
var k = width / height;
var s = 200;

var camera = new THREE.PerspectiveCamera();
camera.position.set(100, 150, 100);
camera.lookAt(scene.position);


var renderer = new THREE.WebGLRenderer();
camera.aspect = window.innerWidth / window.innerHeight
camera.updateProjectionMatrix()
renderer.setSize(
  window.innerWidth/2, // 宽度
  window.innerHeight/2 // 高度
);
renderer.setClearColor(0x2d3436);
document.body.appendChild(renderer.domElement);

addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(
      window.innerWidth/2, // 宽度
      window.innerHeight/2 // 高度
  );
  renderer.setPixelRatio(window.devicePixelRatio)
})


const controls = new OrbitControls(camera, renderer.domElement);
//controls.enableDamping = true;
controls.addEventListener('change', function () {
    renderer.render(scene, camera);
});


function animate() {
    requestAnimationFrame(animate);

    //scene.rotation.x += 0.005;
    scene.rotation.y += 0.01;
    //scene.rotation.z += 0.005;

    // 渲染场景
    renderer.render(scene, camera);
}

// 开始动画循环
animate();