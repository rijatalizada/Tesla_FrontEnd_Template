$(document).ready(function () {
  $("#video-player").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      patterns: {
        youtube: {
          index: "youtube.com/",

          id: "v=",

          src: "https://www.youtube.com/embed/SLtV_2Z1_x8",
        },
      },

      srcAction: "iframe_src",
    },
  });
});

let form = document.querySelector("#credit-form");
let month = document.querySelector('input[name="month"]');
let rate = document.querySelector('input[name="rate"]');
let price = document.querySelector('input[name="price"]');
let down = document.querySelector('input[name="down"]');
let alert = document.querySelector(".alert");
let tbody = document.querySelector('tbody');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  clearTable()

  let month_value = parseFloat(month.value);
  let rate_value = parseFloat(rate.value);
  let price_value = parseFloat(price.value);
  let down_price = parseFloat(down.value);

  if (isNaN(month_value) || isNaN(rate_value) || isNaN(price_value)) {
    alert.classList.remove("d-none");

  }else{
    alert.classList.add("d-none");
  }


  document.querySelector("i").addEventListener("click", function () {
    this.parentElement.classList.add("d-none");
  });

  price_value -= down_price;
  let total = price_value  + ((price_value * rate_value) / 100);
  let monthly_payment = total / month_value;

  let currentDate = new Date();

  for (let i = 0; i < month_value; i++) {
    let newTr = document.createElement ("tr");
    currentDate.setMonth(currentDate.getMonth() + 1)

    newTr.innerHTML = `
    <td >${i+1}</td>
    <td>${formatDate(currentDate)}</td>
    <td>${monthly_payment.toFixed(2) + "$"}</td>
    <td>${(total - monthly_payment * (i + 1)).toFixed(2)}</td>
    `;

    document.querySelector("tbody").append(newTr);
  }

  console.log(month_value);
});



function formatDate(date){
  let result = "";

  result += (date.getDate() >= 9 ? date.getDate() : "0" + date.getDate()) + "/";

  result += (date.getMonth() > 9 ? date.getMonth() + 1 : date.getMonth() + 1) + "/";

  result += date.getFullYear();

  return result;
}

function clearTable(){
  if(tbody.children.length > 0){
    Array.from.forEach((item) =>{
      item.remove();
    });
  }
}