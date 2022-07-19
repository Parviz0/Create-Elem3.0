let h1 = document.createElement('h1')
let leftBlockOne = document.createElement('div')
let leftBlockTwo = document.createElement('div')
let leftBlockThree = document.createElement('div')
let rightBlockOne = document.createElement('div')
let rightBlockTwo = document.createElement('div')
let mainLeft = document.createElement('div')
let mainRight = document.createElement('div')
let hr = document.createElement('hr')
let imgOne = document.createElement('img')
let imgTwo = document.createElement('img')
let imgThree = document.createElement('img')
let imgFour = document.createElement('img')
let imgFive = document.createElement('img')
let InLeftBlockOne = document.createElement('div')
let InLeftBlockTwo = document.createElement('div')
let InLeftBlockThree = document.createElement('div')
let InRightBlockOne = document.createElement('div')
let InRightBlockTwo = document.createElement('div')

imgOne.src = './img/one.png'
imgTwo.src = './img/two.png'
imgThree.src = './img/three.png'
imgFour.src = './img/four.png'
imgFive.src = './img/five.png'

mainLeft.classList.add('mainLeft')
mainRight.classList.add('mainRight')
leftBlockOne.classList.add('leftBlockOne')
leftBlockTwo.classList.add('leftBlockTwo')
leftBlockThree.classList.add('leftBlockThree')
rightBlockOne.classList.add('rightBlockOne')
rightBlockTwo.classList.add('rightBlockTwo')

InLeftBlockOne.classList.add('InLeftBlockOne')
InLeftBlockTwo.classList.add('InLeftBlockTwo')
InLeftBlockThree.classList.add('InLeftBlockThree')
InRightBlockOne.classList.add('InRightBlockOne')
InRightBlockTwo.classList.add('InRightBlockTwo')

h1.innerHTML = 'Roadmap'
InLeftBlockOne.innerHTML = '<h3>August 2021</h3> <br> •	Started project ☑️ <br> • Budget accumulation ☑️<br> • Winning team search ☑️'
InRightBlockOne.innerHTML = '<h3>Sept - Nov 2021</h3><br> •	Whitepaper creation ☑️ <br>• Smartcontract testing ☑️ <br>• Building ideas for nft game ☑️ <br>• start developing website and game ☑️ <br>• start creating NFT ☑️ <br>• start creating tokenomics ☑️'
InLeftBlockTwo.innerHTML = '<h3>Dec - Jan 2022</h3><br> • Official launch on pinksale ☑️ <br> • Start marketing campaign ☑️ <br>• Airdrop ☑️<br>• Panckacke swap launch ☑️<br>• Start of collaborations with decentraland and the sandbox ☑️'
InRightBlockTwo.innerHTML = '<h3>Q1 2022</h3><br> • Listing on coinmarketcap and coingecko<br>• Early beta game<br>• Promotion cooperation with big celebrities<br>• NFT & Game community build-up<br>• NFT collaborations and launch'
InLeftBlockThree.innerHTML = '<h3>Q2 2022</h3><br> • Launch of new website<br>• Centralized exchange listening<br>• Launch of Spidershiba inu single player<br>• Creation of NFT marketplace<br>• First teaser of Spidershiba inu World Metaverse multiplayer<br>• Android & iOS App release'


document.body.prepend(mainRight)
document.body.prepend(hr)
document.body.prepend(mainLeft)
document.body.prepend(h1)
mainLeft.append(leftBlockOne)
mainLeft.append(leftBlockTwo)
mainLeft.append(leftBlockThree)
mainRight.append(rightBlockOne)
mainRight.append(rightBlockTwo)
leftBlockOne.append(imgOne)
leftBlockTwo.append(imgThree)
leftBlockThree.append(imgFive)
rightBlockOne.append(imgTwo)
rightBlockTwo.append(imgFour)
leftBlockOne.append(InLeftBlockOne)
leftBlockTwo.append(InLeftBlockTwo)
leftBlockThree.append(InLeftBlockThree)
rightBlockOne.append(InRightBlockOne)
rightBlockTwo.append(InRightBlockTwo)