<template>
  <div id="app">
    <canvas id="renderCanvas" touch-action="none"></canvas>
  </div>
</template>

<script>
var BABYLON = window.BABYLON;

export default {
  name: "demo",
    mounted() {

      function createScene() {
      // Create the scene space
      var scene = new BABYLON.Scene(engine);

      // Add a camera to the scene and attach it to the canvas
      var camera = new BABYLON.ArcRotateCamera(
          "Camera", 
          Math.PI / 2, 
          Math.PI / 2, 2, 
          new BABYLON.Vector3(0,0,5), 
          scene);
      camera.attachControl(canvas, true);

      // Add lights to the scene
      new BABYLON.HemisphericLight(
          "light1", 
          new BABYLON.Vector3(1, 1, 0), 
          scene);
      new BABYLON.PointLight(
          "light2", 
          new BABYLON.Vector3(0, 1, -1), 
          scene);

      // Add and manipulate meshes in the scene
      BABYLON.MeshBuilder.CreateSphere(
          "sphere", 
          {diameter:2}, 
          scene);

      return scene;
    }

    var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
    var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
    var scene = createScene(); 

    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () { 
      scene.render();
    });

    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () { 
      engine.resize();
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#renderCanvas {
    width: 100%;
    height: 100%;
    touch-action: none;
}
</style>
