let images = ["imgs/aboutusimg.webp", "imgs/bari.webp", "imgs/catherine.avif", "imgs/cello.avif", "imgs/discord.svg", "imgs/flute.avif", "imgs/followus.webp", "imgs/ig.webp", "imgs/iris.avif", "imgs/joinus.webp", "imgs/linktree.webp", "imgs/online.avif", "imgs/scheduleimg.webp"]

for (i of images) {
    let img = new Image()
    img.src=i
}

for (let e = 1; e<12; e++) {
    let fp = `imgs/team/${e}.avif`
    let img = new Image()
    img.src=fp
}

console.log('yooo')