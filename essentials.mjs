import { Player } from "./player.mjs";

const raycast_increment = 0.12;
const raycast_increment_small = 0.025;

function Vector2(_x, _y) {
    let x = _x;
    let y = _y;
    let magnitude = 0;

    function add(vector2) {
        x += vector2.x;
        y += vector2.y;
    }

    function multiplyScalar(v) {
        x *= v;
        y *= v;
        magnitude *= v;
    }

    function divideScalar(v) {
        x /= v;
        y /= v;
        magnitude /= v;
    }

    function updateMagnitude() {
        magnitude = Math.sqrt(x ** 2 + y ** 2);
    }

    updateMagnitude();

    return {
        get x() { return x; },
        get y() { return y; },
        get magnitude() { return magnitude; },
        add, multiplyScalar, divideScalar
    };
}

function GameObject(_position = null, _theta_radians = null) {
    let position = _position;
    let theta_radians = _theta_radians; // Angle from standard position in radians
    let hierarchy = null;

    if (!_position) position = new Vector2(0, 0);
    if (!theta_radians) theta_radians = 0;

    function ready() {
        // TODO: IMplement lol
    }

    function update(delta) {
        // TODO: Implement lol
    }

    function inCollider(position) {
        return false;
    }

    return {
        position: position,
        get theta_radians() { return theta_radians; },
        set theta_radians(v) { theta_radians = v; },
        get hierarchy() { return hierarchy; },
        set hierarchy(v) { hierarchy = v; },
        ready, update, inCollider
    };
}

function Hierarchy(canvas, ctx) {
    let tree = [];
    let layer_objects = {
        default: [],
        raycast: [],
        player: [],
        enemies: []
    };
    let layers = Object.keys(layer_objects);
    let player = null;

    function add(object, layer, is_player = false) {
        object.hierarchy = this;
        tree.push(object);
        layer_objects[layer].push(object);

        if (is_player) {
            player = object;
        }
    }

    function update(delta) {
        for (let i = 0; i < tree.length; i++) {
            tree[i].update(delta);
        }
        // TODO: Implement lmao
    }

    return {
        get tree() { return tree; },
        set tree(v) { tree = v; },
        get layer_objects() { return layer_objects; },
        get layers() { return layers; },
        add, update
    };
}

export {
    Vector2, GameObject, Hierarchy
}