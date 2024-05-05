//This is for header changing color
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

//This is for sidebar changing color
document.addEventListener('scroll', () => {
    const sidebar = document.querySelector('.sidebar');

    if (window.scrollY > 0) {
        sidebar.classList.add('scrolled');
    } else {
        sidebar.classList.remove('scrolled');
    }
})

// JS for Side Bar Show/Hide
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    sidebar.style.transition = '300ms'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// JS for Product Page
document.addEventListener("DOMContentLoaded", () => {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 2000;
    let timeAutoNext = 30000;

    nextDom.onclick = function () {
        showSlider('next');
    }

    prevDom.onclick = function () {
        showSlider('prev');
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)

    function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            next.click();
        }, timeAutoNext)
    }
});

// JS for Cart Page
document.addEventListener("DOMContentLoaded", () => {
    const quantityWrappers = document.querySelectorAll(".row");
    const subtotalElement = document.querySelector(".to-checkout .row .subtotal");

    let sumIni = 0;
    let sum = 0;
    

    quantityWrappers.forEach(row => {
        const plus = row.querySelector(".plus"),
            num = row.querySelector(".num"),
            minus = row.querySelector(".minus"),
            reset = row.querySelector(".reset"),
            price = row.querySelector(".price"),
            total = row.querySelector(".total");

        let a = parseInt(num.innerText, 10);
        let itemPrice = parseInt(price.innerText, 10);
        total.innerText = parseInt(price.innerText, 10);
        sumIni += itemPrice;
        sum = sumIni;
        subtotalElement.innerText = sumIni;

        plus.addEventListener("click", () => {
            a++;
            num.innerText = (a < 10) ? "0" + a : a;
            total.innerText = itemPrice * a;
            sum += itemPrice;
            updateSubtotal();
        });

        minus.addEventListener("click", () => {
            if (a > 1) {
                a--;
                num.innerText = (a < 10) ? "0" + a : a;
                total.innerText -= itemPrice;
                sum -= itemPrice;
                updateSubtotal();
            }
        });

        reset.addEventListener("click", () => {
            a = 1;
            num.innerText = "01";
            total.innerText = itemPrice;
            sumIni = 0;
            sum = sumIni - itemPrice
            updateSubtotal();
        });
    });

    function updateSubtotal() {
        console.log(sumIni);
        console.log(sum);
        subtotalElement.innerText = sum;
    }
});

//JS FOR CHECKOUT
document.addEventListener("DOMContentLoaded", () => {
    const expiryDateInput = document.getElementById('expiryDate');

    // Function to enforce numeric input and format as "YYYY-MM-DD"
    expiryDateInput.addEventListener('input', () => {
    let inputValue = expiryDateInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2) + '-' + inputValue.slice(2, 4);
    }
    expiryDateInput.value = inputValue;
    });

    const radioButtonsDeli = document.querySelectorAll('.DeliveryMethod input[type="radio"]');
    const radioButtonsPay = document.querySelectorAll('.Pay input[type="radio"]');
    const pickupStatus = document.querySelectorAll('.pickStatus');
    const paymentMethod = document.querySelectorAll('.paymentMeth');
    const divsDeli = document.querySelectorAll('.DeliveryMethod .custom-div');
    const divsPay = document.querySelectorAll('.Pay .custom-div');

    radioButtonsDeli.forEach((radioButton, index1) => {
        radioButton.addEventListener('change', () => {
            pickupStatus.forEach(message => {
                message.style.display = 'none';
            });

            const selectedMessage = document.getElementById(`message${index1 + 0}`);
            if (selectedMessage) {
                selectedMessage.style.display = 'block';
            }

            divsDeli.forEach(div => {
                div.classList.remove('selected-div'); // Remove 'selected-div' class from all divs
            });

            const selectedDiv = divsDeli[index1];
            if (selectedDiv) {
                selectedDiv.classList.add('selected-div'); // Add 'selected-div' class to selected div
            }
        });
    });

    radioButtonsPay.forEach((radioButton, index2) => {
        radioButton.addEventListener('change', () => {
            paymentMethod.forEach(message => {
                message.style.display = 'none';
            });

            const selectedMessage2 = document.getElementById(`payment${index2 + 1}`);
            if (selectedMessage2) {
                selectedMessage2.style.display = 'flex';
            }

            divsPay.forEach(div => {
                div.classList.remove('selected-div'); // Remove 'selected-div' class from all divs
            });

            const selectedDiv = divsPay[index2];
            if (selectedDiv) {
                selectedDiv.classList.add('selected-div'); // Add 'selected-div' class to selected div
            }
        });
    });

});