import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/FBXLoader.js';


let scene, camera, mixer1,renderer,soare,mercur,venus,terra,marte,jupiter,saturn,uranus,neptun,meObj,torus;
const clock1 = new THREE.Clock();
function init() {
    const loader_ch = new FBXLoader();
    scene = new THREE.Scene();

    camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: document.querySelector('#bg'),});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    //light
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(25,25,25)
    
    const ambientLight = new THREE.AmbientLight(0xffffff)
    
    scene.add(pointLight, ambientLight)

    //backgroumd
    var spaceTexture = new THREE.TextureLoader().load('space.jpg');
    scene.background = spaceTexture;

    //me
    var texture = new THREE.TextureLoader().load('eu.jpg');
    var geometry = new THREE.BoxGeometry( 8, 8, 8 ); 
    var material = new THREE.MeshStandardMaterial({map:texture});
    meObj = new THREE.Mesh(geometry,material);
    scene.add(meObj);
    meObj.position.x = 7;
    meObj.position.y = 0;
    meObj.position.z = 30;

    //torus
    var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    var material = new THREE.MeshStandardMaterial( { color: 0xcd07ff} );
    torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
    torus.position.x = 7;
    torus.position.y = 0;
    torus.position.z = 30;

    // sun
    var geometry = new THREE.SphereGeometry( 8, 52, 40 ); 

    //const material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    //cube = new THREE.Mesh( geometry, material );

    var texture = new THREE.TextureLoader().load('sun.jpg');
    var normalTextureSun = new THREE.TextureLoader().load('sunNormalTexture.jpg'); 
    var material = new THREE.MeshStandardMaterial( {
        map: texture,
        normalMap: normalTextureSun
    });
    soare = new THREE.Mesh( geometry, material );
    scene.add( soare );

    //mercur
    var geometry = new THREE.SphereGeometry( 2, 11, 23 ); 

    var texture = new THREE.TextureLoader().load('mercur.jpg');
    var normalTextureMercur = new THREE.TextureLoader().load('mercuryNormalTexture.jpg'); 
    var material = new THREE.MeshStandardMaterial({
        map: texture,
        normalMap: normalTextureMercur
    } );
    mercur = new THREE.Mesh( geometry, material );
    
    mercur.position.x = 12;

    mercur.position.y = 0;

    mercur.position.z = - 10;
    scene.add( mercur );

    //venus
    var geometry = new THREE.SphereGeometry( 3, 11, 23 ); 

    var texture = new THREE.TextureLoader().load('venusmer.jpg');
    var normalTextureVenus = new THREE.TextureLoader().load('mercuryNormalTexture.jpg');
    var material = new THREE.MeshStandardMaterial( {
        map: texture,
        normalMap: normalTextureVenus
    } );
    venus = new THREE.Mesh( geometry, material );
    venus.position.x = 18;

    venus.position.y = 0;

    venus.position.z = 1;
    scene.add( venus );

    //terra
    var geometry = new THREE.SphereGeometry( 3, 11, 23 ); 

    var texture = new THREE.TextureLoader().load('earthmab.jpg');
    var normalTextureTerra = new THREE.TextureLoader().load('terraNormalTexture.jpg');
    var material = new THREE.MeshStandardMaterial( {
        map: texture,
        normalMap: normalTextureTerra} );
    terra = new THREE.Mesh( geometry, material );
    terra.position.x = 25;

    terra.position.y = 0;

    terra.position.z = 1;
    scene.add( terra );
 
    //marte
    var geometry = new THREE.SphereGeometry( 2, 11, 23 ); 

    var texture = new THREE.TextureLoader().load('mars.jpg');
    var normalTextureMars = new THREE.TextureLoader().load('marsNormalTexture.jpg');
    var material = new THREE.MeshStandardMaterial( {map: texture, normalMap: normalTextureMars} );
    marte = new THREE.Mesh( geometry, material );
    marte.position.x = 28;

    marte.position.y = 0;

    marte.position.z = 9;
    scene.add( marte );

    //jupiter
    var geometry = new THREE.SphereGeometry( 6, 11, 23 ); 

    var texture = new THREE.TextureLoader().load('jupeqsm.jpg');
    var normalTextureJupiter = new THREE.TextureLoader().load('jupiterNormalTexture.jpg');
    var material = new THREE.MeshStandardMaterial( {map: texture, normalMap: normalTextureJupiter} );
    jupiter = new THREE.Mesh( geometry, material );
    jupiter.position.x = 45;

    jupiter.position.y = 0;

    jupiter.position.z = -40;
    scene.add( jupiter );
    
    //saturn
    var geometry = new THREE.SphereGeometry( 6, 11, 23 ); 

    var texture = new THREE.TextureLoader().load('sat0fds1-copy-100-75.jpg');
    var normalTextureSaturn = new THREE.TextureLoader().load('saturnNormalMap.jpg');
    var material = new THREE.MeshStandardMaterial( {map: texture, normalMap: normalTextureSaturn} );
    saturn = new THREE.Mesh( geometry, material );
    saturn.position.x = 60;

    saturn.position.y = 0;

    saturn.position.z = 40;
    scene.add( saturn );

    //uranus
    var geometry = new THREE.SphereGeometry( 4, 11, 23 ); 

    var texture = new THREE.TextureLoader().load('uranus.jpg');
    var normalTextureUranus = new THREE.TextureLoader().load('uranusNormalMap.jpg');
    var material = new THREE.MeshStandardMaterial( {map: texture, normalMap: normalTextureUranus} );
    uranus = new THREE.Mesh( geometry, material );
    uranus.position.x = 79;

    uranus.position.y =0;

    uranus.position.z = 43;
    scene.add( uranus );
    //neptun
    var geometry = new THREE.SphereGeometry( 4, 11, 23 ); 

    var texture = new THREE.TextureLoader().load('nep0fds1-copy-100-75.jpg');
    var normalTextureJNeptun = new THREE.TextureLoader().load('neptunNormalMap.jpg');
    var material = new THREE.MeshStandardMaterial( {map: texture, normalMap: normalTextureJNeptun} );
    neptun = new THREE.Mesh( geometry, material );
    neptun.position.x = 89;

    neptun.position.y = 0;

    neptun.position.z = 22;
    scene.add( neptun );
    //camera position
    camera.position.x = 7.6077303857177965;
    camera.position.y = 0.7389706325148634;
    camera.position.z = 3.164959233343284;

    Array(300).fill().forEach(addStar);
    //camera.rotation.x = 75;
    
    //camera.position.set( 7.6077303857177965,0.7389706325148634,3.164959233343284);
    soare.add(mercur);
    soare.add(venus);
    soare.add(terra);
    soare.add(marte);
    soare.add(jupiter);
    soare.add(saturn);
    soare.add(uranus);
    soare.add(neptun);

    
    console.log(camera.position.z);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    if (mixer1) 
    mixer1.update(clock1.getDelta());
    const EARTH_YEAR = 2 * Math.PI * (1/60) * (1/60);
    // soare.rotation.x += 0.005;

    soare.rotation.y += 0.001;
    mercur.rotation.y += EARTH_YEAR * 4;
    venus.rotation.y += EARTH_YEAR * 2;
    terra.rotation.y += EARTH_YEAR;
    marte.rotation.y += EARTH_YEAR * 0.8;
    jupiter.rotation.y += EARTH_YEAR * 2;
    saturn.rotation.y += EARTH_YEAR * 4;


    uranus.rotation.y += EARTH_YEAR * 5;

    neptun.rotation.y += EARTH_YEAR * 2;
    meObj.rotation.y += 0.01;
    meObj.rotation.z += 0.01;
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    renderer.render(scene, camera);

    
}

function addStar(){
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshStandardMaterial({color: 0xFFFF47})
    const star = new THREE.Mesh(geometry, material);
  
    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
  
    star.position.set(x,y,z);

    scene.add(star)
  }


  
function updateCamera(ev) {
    
    const t = document.body.getBoundingClientRect().top;

    if (t < -209){
        camera.position.z = t* -0.02;
    }
    else{
        t = -210;
        camera.position.z = t* -0.02;
    }


}

//window.addEventListener("scroll", updateCamera);
document.body.onscroll = updateCamera

// se apeleaza functia onWindowResize() cand facem resize la pagina
window.addEventListener('resize', onWindowResize, false); 

init();
animate();
