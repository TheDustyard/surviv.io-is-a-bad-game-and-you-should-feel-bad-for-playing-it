window.addEventListener("load", () => {
    console.log("loaded");

    let canvas = document.createElement("canvas");
    let gamecanvas = document.getElementById("cvs") as HTMLCanvasElement;

    canvas.width = gamecanvas.width;
    canvas.height = gamecanvas.height;

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.bottom = "0";
    canvas.style.right = "0";

    document.getElementById("game-area-wrapper").insertBefore(canvas, gamecanvas);

    let context = canvas.getContext("2d");

    console.log(Object.keys(window));

    (function render() {
        context.save();

        context.fillStyle = "black";
        context.fillRect(0, 0, 100, 100);

        context.stroke();
        context.fill();
        context.restore();

        requestAnimationFrame(render);
    })();
});