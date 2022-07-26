const range = document.querySelector(".range");
const val = document.querySelector("#display");
const slide = document.querySelector("#slide");
const check = document.querySelector(".checkbox");
const duration = document.querySelector(".duration");
const pageviews = document.querySelector(".pageviews");
const number = document.querySelector(".number");

// display numbers
function updatePrice() {
  if (range.value == 1) {
    if (check.checked == true) {
      number.innerHTML = `${(8 - 8 * 0.25) * 12}`;
      pageviews.innerHTML = "10K";
    } else {
      number.innerHTML = 8;
      pageviews.innerHTML = "10K";
      duration.textContent = "/month";
    }
  } else if (range.value == 2) {
    if (check.checked == true) {
      number.innerHTML = `${(12 - 12 * 0.25) * 12}`;
      pageviews.innerHTML = "50K";
      duration.textContent = "/year";
    } else {
      number.innerHTML = 12;
      duration.textContent = "/month";
      pageviews.innerHTML = "50K";
    }
  } else if (range.value == 3) {
    if (check.checked == true) {
      number.innerHTML = `${(16 - 16 * 0.25) * 12}`;
      pageviews.innerHTML = "100K";
      duration.textContent = "/year";
    } else {
      number.innerHTML = 16;
      pageviews.innerHTML = "100K";
      duration.textContent = "/month";
    }
  } else if (range.value == 4) {
    if (check.checked == true) {
      number.innerHTML = `${(24 - 24 * 0.25) * 12}`;
      pageviews.innerHTML = "500K";
      duration.textContent = "/year";
    } else {
      number.innerHTML = 24;
      pageviews.innerHTML = "500K";
      duration.textContent = "/month";
    }
  } else if (range.value == 5) {
    if (check.checked == true) {
      number.innerHTML = `${(36 - 36 * 0.25) * 12}`;
      pageviews.innerHTML = "1M";
      duration.textContent = "/year";
    } else {
      number.innerHTML = 36;
      duration.textContent = "/month";
      pageviews.innerHTML = "1M";
    }
  }
}

updatePrice();
range.addEventListener("input", updatePrice);
range.addEventListener("click", updatePrice);

function checkChange() {
  let cost = number.textContent;
  if (check.checked == true) {
    number.innerHTML = cost * 0.75 * 12;
    duration.textContent = "/year";
  } else {
    updatePrice();
  }
}
check.addEventListener("click", checkChange);

// range.addEventListener("click", function () {

//   let color = `linear-gradient(to right, rgba(16, 214, 214, 1)${this.value}%, hsl(224, 65%, 95%) ${this.value}%)`;

//   range.style.background = color;

// });

range.addEventListener("input", function () {
  let value = this.value * 25 - 25;
  //
  range.style.background = `linear-gradient(to right, hsl(174, 77%, 80%)0%, hsl(174, 77%, 80%) ${value}%,hsl(224, 65%, 95%)0%,hsl(224, 65%, 95%)100%`;
});
