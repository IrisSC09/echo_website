function forwardImg() {
    console.log('test')

    let imgs = document.getElementsByClassName("teamImage")
    let curImg = document.getElementsByClassName("activeImage")[0]
    let nextImgNum = parseInt(curImg.id.slice(3)) + 1
    if (nextImgNum > imgs.length) {
        nextImgNum = 1
    }
    curImg.className="teamImage"
    
    let nextImg = document.getElementById(`img${nextImgNum}`)
    nextImg.className += " activeImage"
}

function backwardImg() {
    console.log('test')
    let imgs = document.getElementsByClassName("teamImage")
    console.log(imgs.length)
    let curImg = document.getElementsByClassName("activeImage")[0]
    let nextImgNum = parseInt(curImg.id.slice(3)) - 1
    console.log(nextImgNum)
    if (nextImgNum<1) {
        nextImgNum = imgs.length
    }
    console.log(nextImgNum)
    curImg.className="teamImage"
    let nextImg = document.getElementById(`img${nextImgNum}`)
    nextImg.className += " activeImage"
}