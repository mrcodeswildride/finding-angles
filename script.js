let rotationParagraph = document.getElementById(`rotationParagraph`)
let image = document.getElementById(`image`)

document.addEventListener(`mousemove`, findAngle)

function findAngle(event) {
  let imageX = image.offsetLeft + image.offsetWidth / 2
  let imageY = image.offsetTop + image.offsetHeight / 2

  let opposite = -(event.offsetY - imageY)
  let adjacent = event.offsetX - imageX
  let radians = Math.atan2(opposite, adjacent)
  let degrees = radians * (180 / Math.PI)

  let imageRotation = -degrees + 90
  let normalizedRotation = (imageRotation + 360) % 360

  let rotation = Math.round(normalizedRotation)
  let rotationUnits = rotation == 1 ? `degree` : `degrees`

  rotationParagraph.innerHTML = `Rotation: ${rotation} ${rotationUnits}`
  image.style.transform = `rotate(${rotation}deg)`
}
