let h1 = document.createElement('h1')
let main = document.createElement('main')
let blockOne = document.createElement('div')
let blockTwo = document.createElement('div')
let blockThree = document.createElement('div')
let imgOne = document.createElement('img')
let imgTwo = document.createElement('img')
let imgThree = document.createElement('img')
let InBlockOne = document.createElement('div')
let InBlockTwo = document.createElement('div')
let InBlockThree = document.createElement('div')
let h2One = document.createElement('h3')
let h2Two = document.createElement('h3')
let h2Three = document.createElement('h3')
let spanOne = document.createElement('span')
let spanTwo = document.createElement('span')
let spanThree = document.createElement('span')
let txtOne = document.createElement('span')
let txtTwo = document.createElement('span')
let txtThree = document.createElement('span')

blockOne.classList.add('blockOne')
blockTwo.classList.add('blockTwo')
blockThree.classList.add('blockThree')
InBlockOne.classList.add('InBlockOne')
InBlockTwo.classList.add('InBlockTwo')
InBlockThree.classList.add('InBlockThree')
spanOne.classList.add('spanOne')
spanTwo.classList.add('spanTwo')
spanThree.classList.add('spanThree')
txtOne.classList.add('txtOne')
txtTwo.classList.add('txtTwo')
txtThree.classList.add('txtThree')

imgOne.src = './img/Block 1.png'
imgTwo.src = './img/Block 2.png'
imgThree.src = './img/block 3.png'

h1.innerHTML = "How it Works?"
h2One.innerHTML = "SpiderShib Inu Ecosystem"
h2Two.innerHTML = "Many options to earn"
h2Three.innerHTML = "Reshaping DeFi"
spanOne.innerHTML = "Large variety of options to use SpiderShib Inu tokens and NFTs"
spanTwo.innerHTML = "Thanks to our ecosystem you will be able to earn passively and actively"
spanThree.innerHTML = "We are evolving DeFi concepts such as participation rewards, NFTs and tokenomics to maximise profit for every investor"
txtOne.innerHTML = "Our ecosystem is different from all the others, we have created the first REAL nft game with SpiderShib Inu. <br> So the tokens will have real usefulness and to ensure constant growth for all holders."
txtTwo.innerHTML = "The passive income: <br> - staking <br> - the appreciation of the staked currency <br><br> The active income: <br> - Gaming process (you will earn money that you can turn into tokens)<br>- Re-sale of the NFTs"
txtThree.innerHTML = "We offer huge tools for people around the world to take control of their financial future."

document.body.prepend(main)
document.body.prepend(h1)
main.append(blockOne)
main.append(blockTwo)
main.append(blockThree)
blockOne.append(imgOne)
blockTwo.append(imgTwo)
blockThree.append(imgThree)
blockOne.append(InBlockOne)
blockTwo.append(InBlockTwo)
blockThree.append(InBlockThree)
InBlockOne.append(h2One)
InBlockTwo.append(h2Two)
InBlockThree.append(h2Three)
InBlockOne.append(spanOne)
InBlockTwo.append(spanTwo)
InBlockThree.append(spanThree)
InBlockOne.append(txtOne)
InBlockTwo.append(txtTwo)
InBlockThree.append(txtThree)


// The passive income:
// - staking
// - the appreciation of the staked currency

// The active income:
// - Gaming process (you will earn money that you can turn into tokens)
// - Re-sale of the NFTs



// Our ecosystem is different from all the others, we have created the first REAL nft game with SpiderShib Inu.

// So the tokens will have real usefulness and to ensure constant growth for all holders.