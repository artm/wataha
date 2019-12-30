# Intro

What is this about?

A live coding env. No philosophical restrictions, no artist statement. Using familiar tools.

The world runs in docker. 

The world state is in some kind of databases. 

The world behavior? Needs some mechanism of simulation.

Output? Needs a front end that sonorizes and visualizes the world.

Frontend connects to the database / world api, downloads and displays the state of the world, after which it receives updates. So the world is a document and it would be nice if it supported diffs.

What could be inside the world document?

- description of the world in terms of objects
- description in terms of primitives
- visual: shaders, textures
- sound: samples
- generative art: things that get built by formulas

But imagine a sound generator: how does that work exactly? There is a sound generator config inside the world tree and the front end interpretes that. Normally this includes real-time state - e.g. where are we in the currently generated measure or something...

So the frontend asks the simulation for the short time score to follow and follows this score. Score updates may override previously fetched future and it's up to front end what it does with that. 

What else? The separation of concerns between the simulators (world development), database (world state), score (world development representation?) and frontends (view into the world) is unclear. Need more concrete example of describing a sound generator all the way through to output.

Why can the future change from prediction? Because the world sources could have changed or events. 

Can frontend feed back to the simulation? E.g. mic / cam / input devices? Or is the actual simulation happens in the frontend, thus the world document is in the frontend? But the whole idea was supposed to be that the world runs as a bunch of docker containers.

# Architecture

Not interested in the primitives: need to pick some existing ones. Can be plug and playable from set to set (a set is like a performance template). 

What to start with? Sound or visuals? A game engine in a browser?

Maybe this: https://www.babylonjs.com/ ? See: https://www.babylonjs.com/specifications/

## Sim scripts

How does this work? A sim script describes development of the world. It reads the state of the world and plans events. How does it evolve? When a sim script source changes on disc a new container will be attempted to be built. If that succeeds it will attempt to take over simulation, but several older versions of the container are kept so that it is possible to rollback.

Another aspect: what do the scripts apply to. A sim script consists of multiple behaviors which describe one way or another what they apply to (a query into the world). Whenever the script changes or the world changes the queries are reexecuted to find matching behaviors.

Simulation is event driven: a sim script schedules its events in the near future. 

What about interactions ("collisions") where objects interact? This could be a feature of the world, some primitives are physical and a physics engine affects the world / events.

## Build scripts

The state of the world is maintained in some sort of database (using the term losely, it could just as well be a javascript app keeping an object in memory). A build script may teardown the world and build it again. 

Sim and build scripts are separated for continuity: rebuilding the world happens less often than adjusting the behaviour. But simulation will result in changing the world structure as well: objects may disappear and new objects appear. 

## Frontends

Frontends are tick driven: every frame / every audio buffer the frontend calculates what should be drawn / sounded. The frontends need to run as strict on schedule as possible, updating their copy of the world in free time. Frontend representation of the world is different than the build / sim scripts: it is built of primitives. 

# Architecture reset

Reset is needed if the project be based on a game engine, because game engine already handles many of the building / simulation concerns. What is desired is a dynamic programming of the world and triggering things live. 

The question becomes: how does the IDE communicate with the game engine based performance?

## Scene graph

SG is the world state. Babylon has a JSON based scene graph format. What does that mean?

Let's start with a sample html that renders something. Then remove irrelevant bits for now.

# Initial project

## A breathing cube

Size trilling, material, camera, lights, demo animation (scene slowly rotates).

The goal is that some of the same generators modulate synths and the textures.

What does it mean?

A build script: populate the scene, connect generators to parameters.

Development script: adjust the breath generators and connect to parameters. Old generators get disconnected. Generators that aren't connected anywhere anymore get garbage collected.

## Sub: folk sequencer

Tambourine, strum guitar, bass.

Abc notation or something?

Score generators.

## Sub: react to fft 

Listen to the microphone (fiddle) or the other input (piano, guitar)
