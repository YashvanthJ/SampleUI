// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://sephora.p.rapidapi.com/stores/list?latitude=33.9733&longitude=-118.2487&radius=25',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6b3c2df9b6msh31fb7f228df92b0p12df4djsn5c63ad043130',
// 		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



const fetch_Data = () => {
  $.getJSON("../mockJson.json", function (json) {
    var mockData = json;
    console.log(mockData); // this will show the info it in firebug console
    const box = document.createElement("div");
    box.id = "box";
    var store_container = document.getElementById("store_details");
    store_container.appendChild(box);
    appendToDOM(mockData.stores, box);
  }).catch((error) => console.error(error));
};

const appendToDOM = (data, box) => {
  const ul = document.createElement("ul");
  data.map((data) => {
    ul.appendChild(create_Li(data));
  });
  box.appendChild(ul);
};

const create_Li = (product) => {
  const li = document.createElement("li");
  img = document.createElement("img");
  img.src = product.storeHeroImages.imagePath;
  li.textContent = `${product.storeType} Location ${product.address.country} ${product.address.city} ${product.address.phone}`;
  li.appendChild(img);
  return li;
};
