const pics = [
    'imgs/kitty_bed.jpg',
    'imgs/kitty_basket.jpg',
    'imgs/kitty_laptop.jpg',
    'imgs/kitty_door.jpg',
    'imgs/kitty_sink.jpg',
    'imgs/kitty_wall.jpg',
  ]
  
  const button = document.querySelector('button')
  const img = document.querySelector('img')
  
  let picsIndex = 0
  button.addEventListener('click', function() {
    picsIndex = picsIndex + 1
    if (picsIndex === 6) { picsIndex = 0 }
    img.src = pics[picsIndex]
  })