const app = new PIXI.Application();
await app.init({ width: 640, height: 360 });
document.body.appendChild(app.canvas);

// load the PNG asynchronously
await PIXI.Assets.load('sample.png');
let sprite = PIXI.Sprite.from('sample.png');
app.stage.addChild(sprite);

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((ticker) => {
	elapsed += ticker.deltaTime;
	sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});