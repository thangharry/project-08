let iconplay = document.querySelector(".icon-play");
iconplay.addEventListener(
    "click",
    () => {
        let vd = document.getElementById("video");
        if (vd) {
            vd.play();
        } else {
            vd.pause();
        }
    },
    { once: true }
);

let t = document.querySelector("#js");

t.addEventListener("mousemove", (e) => {
    t.scrollLeft = e.pageX;
});
