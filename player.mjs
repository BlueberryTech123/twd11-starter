import { Vector2, GameObject } from "./essentials.mjs";

function Player(_speed) {
    const speed = _speed;

    let gameobject = new GameObject();
    gameobject.position = new Vector2(4, 4);

    let horizontalAxisRaw = {left: 0, right: 0};
    let verticalAxisRaw = {up: 0, down: 0};
    let rotationRaw = {left: 0, right: 0};

    let horizontalAxis = 0;
    let verticalAxis = 0;
    let rotation = 0;

    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("keyup", onKeyUp, false);

    // Input functions

    function onKeyDown(event) {let keyCode = event.key;
    
        if (keyCode == "w" || keyCode == "W" || keyCode == "ArrowUp") verticalAxisRaw.up = 1;
        if (keyCode == "s" || keyCode == "S" || keyCode == "ArrowDown") verticalAxisRaw.down = 1;
        if (keyCode == "a" || keyCode == "A" || keyCode == "ArrowLeft") horizontalAxisRaw.left = 1;
        if (keyCode == "d" || keyCode == "D" || keyCode == "ArrowRight") horizontalAxisRaw.right = 1;

        if (keyCode == "q" || keyCode == "Q") rotationRaw.left = 1;
        if (keyCode == "e" || keyCode == "E") rotationRaw.right = 1;

        rotation = rotationRaw.right - rotationRaw.left;
        rotation *= 6 * Math.PI;
        updateAxis();
    }
    function onKeyUp(event) {
        let keyCode = event.key;
    
        if (keyCode == "w" || keyCode == "W" || keyCode == "ArrowUp") verticalAxisRaw.up = 0;
        if (keyCode == "s" || keyCode == "S" || keyCode == "ArrowDown") verticalAxisRaw.down = 0;
        if (keyCode == "a" || keyCode == "A" || keyCode == "ArrowLeft") horizontalAxisRaw.left = 0;
        if (keyCode == "d" || keyCode == "D" || keyCode == "ArrowRight") horizontalAxisRaw.right = 0;

        if (keyCode == "q" || keyCode == "Q") rotationRaw.left = 0;
        if (keyCode == "e" || keyCode == "E") rotationRaw.right = 0;

        rotation = rotationRaw.right - rotationRaw.left;
        updateAxis();
    }

    function updateAxis() {
        horizontalAxis = horizontalAxisRaw.right - horizontalAxisRaw.left;
        verticalAxis = verticalAxisRaw.up - verticalAxisRaw.down;
    }

    return gameobject;
}

export {
    Player
}