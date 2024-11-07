let images = ["imgs/aboutusimg.webp", "imgs/bari.webp", "imgs/catherine.jpg", "imgs/cello.jpg", "imgs/cello.jpg", "imgs/discord.svg", "imgs/flute.jpeg", "imgs/followus.webp", "imgs/ig.webp", "imgs/iris.jpg", "imgs/joinus.webp", "imgs/linktree.webp", "imgs/online.jpg", "imgs/scheduleimg.webp"]

for (i of images) {
    let img = new Image()
    img.src=i
}

for (let e = 1; e<12; e++) {
    let fp = `imgs/team/${e}.jpg`
    let img = new Image()
    img.src=fp
}

console.log('yooo')