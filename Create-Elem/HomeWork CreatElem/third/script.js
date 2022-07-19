let block = document.createElement('main')
let img = document.createElement('img')
let repost = document.createElement('img')
let like = document.createElement('img')
let a = document.createElement('a')
let txt = document.createElement('div')
let inMain = document.createElement('div')
let h3 = document.createElement('h3')
let h4 = document.createElement('h4')
let p = document.createElement('p')
let btn = document.createElement('button')

img.src = './img/Redmi.png'
repost.src = './img/repost.svg'
like.src = './img/like.png'

a.href = '#'
a.innerHTML = 'Смартфоны'
h3.innerHTML = '2 442 000 сум'
h4.innerHTML = 'от 253 000 сум/месяц'
p.innerHTML = 'Смартфон Xiaomi Redmi Note 11 оснащен экраном 6,6 дюйма с разрешением FullHD+. Имеет 6Гб оперативной памяти, а также 128Гб постоянной. Аккумулятор Redmi Note 11 имеет емкость 5000 мАч.'
btn.innerHTML = 'Купить'

btn.classList.add('btn')
h4.classList.add('credit')
img.classList.add('phone')
repost.classList.add('repost')
like.classList.add('like')
txt.classList.add('txt')
inMain.classList.add('inMain')

document.body.prepend(block)
block.append(inMain)
inMain.append(img)
inMain.append(like)
inMain.append(repost)
block.append(a)
block.append(h3)
block.append(h4)
block.append(txt)
txt.append(p)
txt.append(btn)