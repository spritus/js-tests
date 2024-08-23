window.onload = () => {
    const SW = 600;
    const SH = 400;

    const screen = document.createElement("div");
    const stl = {
        backgroundColor: "black",
        background: "url('./winter.jpg')",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
        width: SW + "px",
        height: SH + "px",
        margin: "10px auto",
        border: "solid 4px #fff",
    }
    Object.assign(screen.style, stl);
    document.body.append(screen);
    document.body.style.backgroundColor = "#777";

    const snows = [];
    const count = 500;

    for (let n = 0; n < count; n++) {
        const snow = document.createElement("div");
        snow.x = Math.round(Math.random() * (SW + 10));
        snow.y = -Math.round(Math.random() * SH);
        snow.s = 1 + Math.random() * 4;
        const snst = {
            backgroundColor: "#fff",
            position: "absolute",
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            left: snow.x + "px",
            top: snow.y + "px"
        }
        Object.assign(snow.style, snst);
        screen.append(snow);
        snows.push(snow);
    }

    const music = new Audio("./1999.mp3");
    music.muted = true;

    document.body.onclick = () => {
        music.muted = false;
        music.play();
    };

    setInterval(() => {
        for (snow of snows) {
            if (snow.y < SH) snow.y += snow.s;
            else snow.y = 0;

            if (snow.x < SW) snow.x += (3 - Math.random() * 3);
            else snow.x = 0;
            snow.style.top = snow.y + "px";
            snow.style.left = snow.x + "px";
        }
    }, 50);
}