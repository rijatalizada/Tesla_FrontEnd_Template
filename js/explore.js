const title = document.querySelector("#title");
const resMetaData = document.querySelector("#res-metadata");
const sort = document.querySelector("#sort");
const resData = document.querySelector("#res-data");
const searchBtn = document.querySelector("#search");
const searchInput = document.querySelector("#searchInput");


searchBtn.addEventListener("click", function () {
  const txt = searchInput.value;
  title.innerHTML = `<h1>${searchInput.value.toUpperCase()}</h1>`;
  resData.innerHTML = ""
  searchInput.value = ""
  fetch("https://json-fake-api.herokuapp.com/cars").then((res)=>{
    return res.json()
  }).then((json)=>{
    addToView(json.filter(e=>e.marka.toLowerCase() == txt.toLowerCase()))
  })
});


const addToView = (list)=>{
  resMetaData.innerText = `We've found ${list.length} results of ${title.innerText}`

  list.forEach((e)=>{
    resData.innerHTML += component(e.marka, e.model, e.new?'New':'Used', e.engine, e.fuel, e.transmission, e.price,e.img_src)
  })

}

const component = (marka, model, _new, engine, fuel, transmission, price, img) => `
<div style="margin-top:6%;" class="items"> 
<div class="row">

<div class="col-lg-4">
  <img style="width: 100%; height:100%" src="${img}">
</div>

<div class="col-lg-8">

<div class="d-flex flex-column">
        <div style="color: #FA3C45; font-size: 16px;">${marka}</div>
        <div><span style="font-size: 23px">${model}</span>  <span style="font-size: 10px">(${_new})</span></div>
        <div>
          <div  class="row car-info">
              <div style="margin-bottom:1%;font-size:10px; color:grey;" class="col-4">Engine</div>
              <div style="margin-bottom:1%;font-size:10px; color:grey;" class="col-4">Type of fuel</div>
              <div style="margin-bottom:1%;font-size:10px; color:grey;" class="col-4">Transmission</div>
              <div style="margin-bottom:2%;" class="col-4">${engine}</div>
              <div style="margin-bottom:2%;" class="col-4">${fuel}</div>
              <div style="margin-bottom:2%;" class="col-4">${transmission}</div>
          </div>
        </div>
        <div class="d-flex col-md-12 justify-content-between">
            <div style="color: #FA3C45"><h3>${price}$</h3></div>
            <button style="background-color: #FA3C45; color: white" class="btn">Details</button>
        </div>
</div>


</div>

</div> 

</div>`

