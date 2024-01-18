## Raycasting Starter Code

Something you can start with so you don't have to do the annoying parts
****
#### `Vector2` - from `essentials.mjs`
Represent 2D positions and vectors
  **Example**
  ```js
  import { Vector2 } from "./essentials.mjs";
  const point = new Vector2(7, 2); // Creates a point with x = 7 and y = 2
  ```
  **Methods & Properties**
  * `x` - x component
  * `y` - y component
  * `magnitude` - magnitude (no shit)
  * `add(vector2)` - Add vectors
  * `multiplyScalar(v)` - Multiply vector by `v`
  * `divideScalar(v)` - Divide vector by `v`
****

****
#### `GameObject` - from `essentials.mjs`
Objects that exist in the game world/scene. Think about Unity's "GameObjects" but scuffed.
  **Example**
  ```js
  import { GameObject, Hierarchy } from "./essentials.mjs";
  // ... Define stuff such as canvas and ctx ...
  // Learn more on canvases here: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
  const hierarchy = new Hierarchy(canvas, ctx);
  const object1 = new GameObject(new Vector2(1, 2)); // Creates GameObject at (1, 2)
  const object2 = new GameObject(new Vector2(3, 2), Math.PI / 2); // Creates GameObject at (3, 2) looking at angle PI/2
  const object1 = new GameObject(); // Creates GameObject at (0, 0)
  hierarchy.add(object1, "default"); // All objects need to be manually added to hierarchy
  hierarchy.add(object2, "default");
  ```
  **Methods & Properties**
  * `position` - Position, defaulted to (0, 0)
  * `theta_radians` - Rotation from standard position in radians (not degrees), defaulted to 0
  * `hierarchy` - The hierarchy it belongs to
  * `ready()` - You can call this when the object is loaded
  * `update(delta)` - Called every time `hierarchy` gets `update` (`delta` is the time in seconds between two frames)
  * `inCollider(position)` - Check if position is within hitbox
****

****
#### `Hierarchy` - from `essentials.mjs`
A list of objects inside a scene
  **Example**
  ```js
  import { Hierarchy } from "./essentials.mjs";
  // ... Define stuff such as canvas and ctx ...
  // Learn more on canvases here: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
  const point = new Hierarchy(canvas, ctx); // Creates hierarchy
  ```
  **Methods & Properties**
  * `tree` - Gets list of ALL objects
  * `layer_objects` - Layer dictionary
  * `layers` - List containing the name of all layers
  * `add(object, layer, is_player = false)` - Add object to hierarchy, `layer` is a string, use "default" for default layer
  * `update(delta)` - You may call this every frame in main.js (`delta` is the time in seconds between two frames)
****

****
#### `Player` - from `player.mjs`
Player, do I need to explain, inherits `GameObject` (so it has all the properties such as `update`, `position`, etc.)
  **Example**
  ```js
  import { Player } from "./player.mjs";
  const point = new Player(6.5); // Creates player that moves at 6.5 units/second
  ```
  **Methods & Properties**
  * There are no public ones, but `horizontalAxis` and `verticalAxis` handle input, they correspond to WASD and arrow keys. Similar to `Input.GetAxis("Horizontal")` and `Input.GetAxis("Vertical")` from Unity (https://docs.unity3d.com/ScriptReference/Input.GetAxis.html) respectively.
  * Of course, `rotation` handles camera rotation, and those three are the ones you'll actively use
****
