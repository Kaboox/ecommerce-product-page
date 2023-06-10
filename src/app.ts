import './_colors.scss';
import './style.scss';


const closeMenuBtn = document.querySelector('.close-menu')!;
const mobileMenu = document.querySelector('.mobile-menu')!;
const burgerBtn = document.querySelector('.burger')!;

const bigPicture = document.querySelector('.big-image-img')!;
const body = document.querySelector('body')!;

const cartBtns = document.querySelectorAll('.cart')!
const cart = document.querySelector('.cart-display')! as HTMLDivElement
const cartContent = document.querySelector('.cart-content')!;
const quantity = document.querySelector('.quantity')!
const finalAmount = document.querySelector('.final-amount')!

const addToCartBtn = document.querySelector('.add')!;
const plus = document.querySelector('.plus')!;
const minus = document.querySelector('.minus')!;
const pairAmount = document.querySelector('.item-amount')! as HTMLParagraphElement;
let amount:number = 0;
let amountInCart:number = 0;


const smallPicBoxes = document.querySelectorAll('.slider-image')
const smallPics = document.querySelectorAll('.small-picture');

const imageValues = {
    firstImg: {
        path: '../src/images/image-product-1.jpg'
    },
    secondImg: {
        path: '../src/images/image-product-2.jpg'
    },
    thirdImg: {
        path: '../src/images/image-product-3.jpg'
    },
    fourthImg: {
        path: '../src/images/image-product-4.jpg'
    }
}


// clears active states on slider images
const clearActiveStates = () => {
    for (const box of smallPicBoxes) {
        box.classList.remove('slider-image--active')
    }
}

const handlePickChange = (pic: Element, path: string) => {
    const box = pic.closest('.slider-image')
    clearActiveStates()
    box?.classList.add('slider-image--active')
    bigPicture.setAttribute('src', path)
}

for (const pic of smallPics) {
    pic.addEventListener('click', () => {
        if (pic.classList.contains('small-picture-first')) {
            handlePickChange(pic, imageValues.firstImg.path)
        }
        if (pic.classList.contains('small-picture-second')) {
            handlePickChange(pic, imageValues.secondImg.path)
        }
        if (pic.classList.contains('small-picture-third')) {
            handlePickChange(pic, imageValues.thirdImg.path)
        }
        if (pic.classList.contains('small-picture-fourth')) {
            handlePickChange(pic, imageValues.fourthImg.path)
        }
    })
}

// shows current amount of items
const handleAmount = () => {
    pairAmount.textContent = amount.toString();
}

// increases amount of items to add to cart
const increaseAmount = () => {
    if (amount < 10) {
        amount++;
        handleAmount()
    }
}

// decreases amount of items to add to cart
const decreaseAmount = () => {
    if (amount > 0) {
        amount--;
        handleAmount()
    }
}

const checkAmount = () => {
    if (+(pairAmount.textContent)! > 0) {
        addToCart()
    }
}

const addToCart = () => {
    if (amountInCart + amount < 11) {
        amountInCart += amount
    }
    checkCartAmount()
}

const checkCartAmount = () => {


    if (amountInCart == 0) {
        (cartContent.querySelector('.not-empty-cart') as HTMLDivElement)!.style.display = 'none';
        (cartContent.querySelector('.empty-cart'))!.textContent = 'Your cart is empty.';
    } else {
        (cartContent.querySelector('.not-empty-cart') as HTMLDivElement)!.style.display = 'flex';
        quantity.textContent = amountInCart.toString()
        finalAmount.textContent = `$${((+quantity.textContent * 125).toFixed(2)).toString()}`
    }
}



burgerBtn?.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu--active')
    body.style.overflow = 'hidden'
})

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active')
    body.style.overflow = 'auto'
})

for (const cartBtn of cartBtns) {
    cartBtn.addEventListener('click', () => {
        if ((cart as HTMLDivElement).style.display == 'flex') {
            (cart as HTMLDivElement).style.display = 'none'
        } else {
            (cart as HTMLDivElement).style.display = 'flex'
        }
    })
}

addToCartBtn.addEventListener('click', checkAmount);

plus?.addEventListener('click', increaseAmount)
minus?.addEventListener('click', decreaseAmount)

handleAmount();