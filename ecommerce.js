var makeupProduct = {
  Maybelline: {
    NewYork: {
      productName: "Lipstick",
      shade: "Red",
      price: "$10",
    },
    Turkey: {
      productName: "Mascara",
      shade: "Blue",
      price: "$20",
    },
  },
  LOreal: {
    Paris: {
      productName: "Foundation",
      shade: "Beige",
      price: "$15",
    },
  },
  Revlon: {
    London: {
      productName: "Mascara",
      shade: "Black",
      price: "$12",
    },
    Pakistan: {
      productName: "Lipglow",
      shade: "Pink",
      price: "$8",
    },
  },
  MAC: {
    Toronto: {
      productName: "Eyeshadow",
      shade: "Gold",
      price: "$20",
    },
  },
  NARS: {
    Tokyo: {
      productName: "Blush",
      shade: "Pink",
      price: "$18",
    },
  },
};

var main = document.querySelector("#main");
var brand = document.getElementById("brand");
var country = document.getElementById("country");

// Populate the brand dropdown
brand.innerHTML = `<option value="">Select Brand</option>`;
for (var key in makeupProduct) {
  brand.innerHTML += `<option value="${key}">${key}</option>`;
}

// Populate the country dropdown based on selected brand
function setCountry() {
  var selectedBrand = brand.value;
  country.innerHTML = `<option value="">Select Country</option>`; // Reset country dropdown
  main.innerHTML = ''; // Clear previous results

  if (makeupProduct[selectedBrand]) {
    for (var key1 in makeupProduct[selectedBrand]) {
      country.innerHTML += `<option value="${key1}">${key1}</option>`;
    }
  }
}

// Display products based on selected brand and country
function searchProduct() {
  main.innerHTML = ''; // Clear previous results
  var selectedBrand = brand.value;
  var selectedCountry = country.value;

  // If no brand or country is selected, show all products
 
  // If both brand and country are selected, show the specific product
   if (makeupProduct[selectedBrand] && makeupProduct[selectedBrand][selectedCountry]) {
    var obj = makeupProduct[selectedBrand][selectedCountry];
    main.innerHTML += `
      <div class="card text-center" style="width: 18rem;">
        <img src="./lipistick.png" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h5 class="card-title">${obj.productName}</h5>
          <p class="card-text">${obj.price}</p>
          <a href="#" class="btn btn-primary">${obj.shade}</a>
        </div>
      </div>`;
  }
  // If only brand is selected, show all products from that brand
  else if (makeupProduct[selectedBrand]) {
    for (var key1 in makeupProduct[selectedBrand]) {
      var obj = makeupProduct[selectedBrand][key1];
      main.innerHTML += `
        <div class="card text-center" style="width: 18rem;">
          <img src="./lipistick.png" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">${obj.productName}</h5>
            <p class="card-text">${obj.price}</p>
            <a href="#" class="btn btn-primary">${obj.shade}</a>
          </div>
        </div>`;
    }
  }
}
function clearSearch(){
  main.innerHTML=''
}