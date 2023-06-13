import "./_colors.scss";
import "./style.scss";

const closeMenuBtn = document.querySelector(".close-menu")!;
const mobileMenu = document.querySelector(".mobile-menu")!;
const burgerBtn = document.querySelector(".burger")!;

const bigPicture = document.querySelector(".big-image-img")! as HTMLImageElement;
const body = document.querySelector("body")!;

const cartBtn = document.querySelector(".cart")!;
const cart = document.querySelector(".cart-display")! as HTMLDivElement;
const cartContent = document.querySelector(".cart-content")!;
const cartInfo = document.querySelector('.active-cart')! as HTMLDivElement;
const cartInfoAmount = cartInfo.querySelector('.amount-in-cart')!;
const quantity = document.querySelector(".quantity")!;
const finalAmount = document.querySelector(".final-amount")!;
const deleteFromCart = document.querySelector(".delete")!;

const addToCartBtn = document.querySelector(".add")!;
const plus = document.querySelector(".plus")!;
const minus = document.querySelector(".minus")!;
const pairAmount = document.querySelector(
	".item-amount"
)! as HTMLParagraphElement;
let amount: number = 0;
let amountInCart: number = 0;
let imgIndex = 0;
let galleryImgIndex = 0;

const arrows = document.querySelectorAll('.arrow')!;
const smallPicBoxes = document.querySelectorAll(".slider-image")!;
const smallPics = document.querySelectorAll(".small-picture")!;

const dekstopGallery = document.querySelector('.desktop-gallery')! as HTMLDivElement;
const closeGallery = document.querySelector('.close-gallery')!;
const mainGalleryPic = document.querySelector('.main-gallery-img')! as HTMLImageElement;
const galleryArrows = document.querySelectorAll('.arrow-gallery')!;
const smallGalleryPics = document.querySelectorAll('.gallery-image')!;

console.log(arrows);


const imgPaths:string[] = ["./src/images/image-product-1.jpg",
"./src/images/image-product-2.jpg",
"./src/images/image-product-3.jpg",
"./src/images/image-product-4.jpg"];


// clears active states on slider images
const clearActiveStates = (big: boolean) => {
	if (big) {
		for (const box of smallPicBoxes) {
			box.classList.remove("slider-image--active");
		}
	} else {
		for (const box of smallGalleryPics) {
			box.classList.remove('gallery-image--active')
		}
	}
};


const handlePickChange = (pic: Element, path: string, big: boolean) => {
	if (big) {
		const box = pic.closest(".slider-image");
		clearActiveStates(true);
		box?.classList.add("slider-image--active");
		bigPicture.setAttribute("src", path);
	} else {
		const box = pic.closest('.gallery-image');
		clearActiveStates(false)
		box?.classList.add('gallery-image--active')
		mainGalleryPic.setAttribute('src', path)
	}
};

for (const pic of smallPics) {
	pic.addEventListener("click", () => {
		if (pic.classList.contains("small-picture-first")) {
			handlePickChange(pic, imgPaths[0], true);
		}
		if (pic.classList.contains("small-picture-second")) {
			handlePickChange(pic, imgPaths[1], true);
		}
		if (pic.classList.contains("small-picture-third")) {
			handlePickChange(pic, imgPaths[2], true);
		}
		if (pic.classList.contains("small-picture-fourth")) {
			handlePickChange(pic, imgPaths[3], true);
		}
	});
}

// shows current amount of items
const handleAmount = () => {
	pairAmount.textContent = amount.toString();
};

// increases amount of items to add to cart
const increaseAmount = () => {
	if (amount < 10 && amount + amountInCart < 10) {
		amount++;
		handleAmount();
	}
};

// decreases amount of items to add to cart
const decreaseAmount = () => {
	if (amount > 0) {
		amount--;
		handleAmount();
	}
};

const checkAmount = () => {

	if (+pairAmount.textContent! > 0) {
		addToCart();
	}
};

const addToCart = () => {
	if (amountInCart + amount < 11) {
		amountInCart += amount;
		checkCartAmount();
		amount = 0;
		handleAmount()
	}
};



const checkCartAmount = () => {
	if (amountInCart == 0) {
		cartContent.querySelector(".empty-cart")!.textContent =
			"Your cart is empty.";
		(cartContent.querySelector(
			".not-empty-cart"
		) as HTMLDivElement)!.style.display = "none";
		cartInfo.style.display = 'none'
	} else {
		(cartContent.querySelector(
			".not-empty-cart"
		) as HTMLDivElement)!.style.display = "flex";
		quantity.textContent = amountInCart.toString();
		finalAmount.textContent = `$${(+quantity.textContent * 125)
			.toFixed(2)
			.toString()}`;
		cartContent.querySelector(".empty-cart")!.textContent = "";
		cartInfo.style.display = 'flex'
		cartInfoAmount.textContent = `${amountInCart}`
	}
};

const clearCart = () => {
	amountInCart = 0;
	checkCartAmount();
};

burgerBtn?.addEventListener("click", () => {
	mobileMenu.classList.add("mobile-menu--active");
	body.style.overflow = "hidden";
});

closeMenuBtn.addEventListener("click", () => {
	mobileMenu.classList.remove("mobile-menu--active");
	body.style.overflow = "auto";
});

cartBtn.addEventListener("click", () => {
	if ((cart as HTMLDivElement).style.display == "flex") {
		(cart as HTMLDivElement).style.display = "none";
	} else {
		(cart as HTMLDivElement).style.display = "flex";
	}
});

// slider
const slideImages = (e:Event) => { 
    imgIndex = searchImgIndex(bigPicture);
	console.log(((e.target)! as HTMLDivElement).classList.contains('next'));
    if (((e.target)! as HTMLDivElement).classList.contains('next')) {
        bigPicture.setAttribute('src', imgPaths[(imgIndex + 1)%4]) 
    } else {
        if (imgIndex == 0) {
            imgIndex = 4;
        }
        bigPicture.setAttribute('src', imgPaths[(imgIndex - 1)%4])
    }
    
}

const searchImgIndex = (pic: HTMLImageElement) => {
	console.log(pic.getAttribute('src')!);
    return imgPaths.indexOf(pic.getAttribute('src')!);
}

addToCartBtn.addEventListener("click", checkAmount);
deleteFromCart.addEventListener("click", clearCart);

plus?.addEventListener("click", increaseAmount);
minus?.addEventListener("click", decreaseAmount);

for (const arrow of arrows) {
    arrow.addEventListener('click', slideImages)
}

closeGallery.addEventListener('click', () => {
    dekstopGallery.style.display = 'none'
})

bigPicture.addEventListener('click', () => {
    dekstopGallery.style.display = 'flex'
	prepareGallery()
})

const prepareGallery = () => {
	mainGalleryPic.setAttribute('src', imgPaths[searchImgIndex(bigPicture)])
	for (const pic of smallGalleryPics) {
		pic.classList.remove('gallery-image--active')
	}
	smallGalleryPics[imgPaths.indexOf(imgPaths[searchImgIndex(bigPicture)])].classList.add('gallery-image--active')
}

for (const arrow of galleryArrows) {
	arrow.addEventListener('click', (e:Event) => {
		galleryImgIndex = searchImgIndex(mainGalleryPic)
		if (((e.target)! as HTMLDivElement).classList.contains('next-gallery')) {
			mainGalleryPic?.setAttribute('src', imgPaths[(galleryImgIndex+1)%4])
			for (const pic of smallGalleryPics) {
				pic.classList.remove('gallery-image--active')
			}
			smallGalleryPics[imgPaths.indexOf(imgPaths[searchImgIndex(mainGalleryPic)])].classList.add('gallery-image--active')
		} else {
			if (galleryImgIndex == 0) {
				galleryImgIndex = 4;
			}
			mainGalleryPic?.setAttribute('src', imgPaths[(galleryImgIndex-1)%4])
			for (const pic of smallGalleryPics) {
				pic.classList.remove('gallery-image--active')
			}
			smallGalleryPics[imgPaths.indexOf(imgPaths[searchImgIndex(mainGalleryPic)])].classList.add('gallery-image--active')
		}
	})
}

for (const pic of smallGalleryPics) {
	pic.addEventListener('click', () => {
		console.log(pic);
		if (pic.classList.contains("gallery-image-first")) {
			handlePickChange(pic, imgPaths[0], false);
		}
		if (pic.classList.contains("gallery-image-second")) {
			handlePickChange(pic, imgPaths[1], false);
		}
		if (pic.classList.contains("gallery-image-third")) {
			handlePickChange(pic, imgPaths[2], false);
		}
		if (pic.classList.contains("gallery-image-fourth")) {
			handlePickChange(pic, imgPaths[3], false);
		}
	})
}

handleAmount();
checkCartAmount();
