import { Vector2, GameObject, Hierarchy } from "./essentials.mjs";
import { Player } from "./player.mjs";

function Scene() {
    const max_framerate = 60.0;
    const framerate_delta = 1.0 / max_framerate;

    let canvas = null;
    let ctx = null;

    function updateSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    function initCanvas() {
        // Create and append canvas onto HTML document
        canvas = document.createElement("canvas");
        document.body.appendChild(canvas);

        ctx = canvas.getContext("2d");
        updateSize();
    }

    // Run at start
    function ready() {
        initCanvas();
    }

    // Run every frame
    function update() {
        updateSize();
        
        // Implement lmao
    }

    // =======================================================

    ready();
    setInterval(() => {
        // Error catching, just avoids the output "Script Error" which was annoying af
        try {
            update();
        }
        catch (error) {
            alert(`Error: ${error.message}`);
        }
    }, framerate_delta);

    return {
        canvas: canvas
    }
}
let main = null;

$(document).ready(() => {
    main = new Scene();
});
$(document).bind("error", (event) => {
    alert(event);
})