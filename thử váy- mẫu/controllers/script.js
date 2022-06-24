// import { Item } from "./../models/item"
// import { listItem  } from "./../models/listItem"
// import data from "./../data/Data.json"

let data = {
  navPills: [
    { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
    { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
    { tabName: "tabShoes", showName: "Giày dép", type: "shoes" },
    { tabName: "tabHandBags", showName: "Túi xách", type: "handbags" },
    {
      tabName: "tabNecklaces",
      showName: "Dây chuyền",
      type: "necklaces",
    },
    { tabName: "tabHairStyle", showName: "Kiểu tóc", type: "hairstyle" },
    { tabName: "tabBackground", showName: "Nền", type: "background" },
  ],
  tabPanes: [
    {
      id: "topcloth_1",
      type: "topclothes",
      name: "Top Cloth 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "./assets/images/clothes/topcloth1_show.jpg",
      imgSrc_png: "./assets/images/clothes/topcloth1.png",
    },
    {
      id: "topcloth_2",
      type: "topclothes",
      name: "Top Cloth 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/topcloth2_show.jpg",
      imgSrc_png: "../assets/images/clothes/topcloth2.png",
    },
    {
      id: "topcloth_3",
      type: "topclothes",
      name: "Top Cloth 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/topcloth3_show.jpg",
      imgSrc_png: "../assets/images/clothes/topcloth3.png",
    },
    {
      id: "topcloth_4",
      type: "topclothes",
      name: "Top Cloth 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/topcloth4_show.jpg",
      imgSrc_png: "../assets/images/clothes/topcloth4.png",
    },
    {
      id: "topcloth_5",
      type: "topclothes",
      name: "Top Cloth 5",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/topcloth5_show.jpg",
      imgSrc_png: "../assets/images/clothes/topcloth5.png",
    },
    {
      id: "topcloth_6",
      type: "topclothes",
      name: "Top Cloth ",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/topcloth6_show.jpg",
      imgSrc_png: "../assets/images/clothes/topcloth6.png",
    },
    {
      id: "botcloth_1",
      type: "botclothes",
      name: "Bot Cloth 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/botcloth1_show.jpg",
      imgSrc_png: "../assets/images/clothes/botcloth1.png",
    },
    {
      id: "botcloth_2",
      type: "botclothes",
      name: "Bot Cloth 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/botcloth2_show.jpg",
      imgSrc_png: "../assets/images/clothes/botcloth2.png",
    },
    {
      id: "botcloth_3",
      type: "botclothes",
      name: "Bot Cloth 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/botcloth3_show.jpg",
      imgSrc_png: "../assets/images/clothes/botcloth3.png",
    },
    {
      id: "botcloth_4",
      type: "botclothes",
      name: "Bot Cloth 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/botcloth4_show.jpg",
      imgSrc_png: "../assets/images/clothes/botcloth4.png",
    },
    {
      id: "botcloth_5",
      type: "botclothes",
      name: "Bot Cloth 5",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/botcloth5_show.jpg",
      imgSrc_png: "../assets/images/clothes/botcloth5.png",
    },
    {
      id: "shoes_1",
      type: "shoes",
      name: "Shoes 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/shoes/shoes1_show.jpg",
      imgSrc_png: "../assets/images/shoes/shoes1.png",
    },
    {
      id: "shoes_2",
      type: "shoes",
      name: "Shoes 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/shoes/shoes2_show.jpg",
      imgSrc_png: "../assets/images/shoes/shoes2.png",
    },
    {
      id: "shoes_3",
      type: "shoes",
      name: "Shoes 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/shoes/shoes3_show.jpg",
      imgSrc_png: "../assets/images/shoes/shoes3.png",
    },
    {
      id: "shoes_4",
      type: "shoes",
      name: "Shoes 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/shoes/shoes4_show.jpg",
      imgSrc_png: "../assets/images/shoes/shoes4.png",
    },
    {
      id: "shoes_5",
      type: "shoes",
      name: "Shoes 5",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/shoes/shoes5_show.jpg",
      imgSrc_png: "../assets/images/shoes/shoes5.png",
    },
    {
      id: "handbag_1",
      type: "handbags",
      name: "Handbag 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/handbags/handbag1_show.jpg",
      imgSrc_png: "../assets/images/handbags/handbag1.png",
    },
    {
      id: "handbag_2",
      type: "handbags",
      name: "Handbag 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/handbags/handbag2_show.jpg",
      imgSrc_png: "../assets/images/handbags/handbag2.png",
    },
    {
      id: "handbag_3",
      type: "handbags",
      name: "Handbag 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/handbags/handbag3_show.jpg",
      imgSrc_png: "../assets/images/handbags/handbag3.png",
    },
    {
      id: "necklace_1",
      type: "necklaces",
      name: "Necklace 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/necklaces/necklace1_show.jpg",
      imgSrc_png: "../assets/images/necklaces/necklace1.png",
    },
    {
      id: "necklace_2",
      type: "necklaces",
      name: "Necklace 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/necklaces/necklace2_show.jpg",
      imgSrc_png: "../assets/images/necklaces/necklace2.png",
    },
    {
      id: "necklace_3",
      type: "necklaces",
      name: "Necklace 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/necklaces/necklace3_show.jpg",
      imgSrc_png: "../assets/images/necklaces/necklace3.png",
    },
    {
      id: "hairstyle_1",
      type: "hairstyle",
      name: "Hairstyle 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/hairstyle/hairstyle1_show.jpg",
      imgSrc_png: "../assets/images/hairstyle/hairstyle1.png",
    },
    {
      id: "hairstyle_2",
      type: "hairstyle",
      name: "Hairstyle 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/hairstyle/hairstyle2_show.jpg",
      imgSrc_png: "../assets/images/hairstyle/hairstyle2.png",
    },
    {
      id: "hairstyle_3",
      type: "hairstyle",
      name: "Hairstyle 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/hairstyle/hairstyle3_show.jpg",
      imgSrc_png: "../assets/images/hairstyle/hairstyle3.png",
    },
    {
      id: "background_1",
      type: "background",
      name: "Background 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/background/background1_show.jpg",
      imgSrc_png: "../assets/images/background/background1.jpg",
    },
    {
      id: "background_2",
      type: "background",
      name: "Background 2",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/background/background2_show.jpg",
      imgSrc_png: "../assets/images/background/background2.jpg",
    },
    {
      id: "background_3",
      type: "background",
      name: "Background 3",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/background/background3_show.jpg",
      imgSrc_png: "../assets/images/background/background3.jpg",
    },
    {
      id: "background_4",
      type: "background",
      name: "Background 4",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/background/background4_show.jpg",
      imgSrc_png: "../assets/images/background/background4.jpg",
    },
  ],
};
// const CHOSEN_LIST = new listItem();
const ACTIVE_CLASS = "active";
const FADE_CLASS = "fade";
const LIST_ITEM = data.tabPanes;
renderHTML();

function getTabPills(tab, activeClass) {
  return `
    <li class="nav-item" role="presentation">
    <button
      class="nav-link ${activeClass}"
      id="${tab.tabName}-tab"
      data-bs-toggle="pill"
      data-bs-target="#${tab.tabName}"
      type="button"
      role="tab"
    >
      ${tab.showName}
    </button>
  </li>
    
    `;
}
function getEveryItem(list) {
  let content = "";
  list.forEach((item) => {
    content += `
        <div class="card col-3">
        <img
          src="${item.imgSrc_jpg}"
          class="card-img-top img-fluid"
          
        />
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <button  class="btn btn-secondary changeStyle" data-name="${item.name}">Thử đồ</button>
        </div>
      </div>
        
        
        `;
  });

  return content;
}
function pushItem(tabType, arrItem) {
  let listItem = [];
  arrItem.forEach((item) => {
    if (tabType === item.type) {
      listItem.push(item);
    }
  });
  return listItem;
}

function renderTabListItem(tabName, arrItem) {
  let listItem = null;
  let itemHTML = "";
  switch (tabName) {
    case "tabTopClothes":
      listItem = pushItem("topclothes", arrItem);
      itemHTML = getEveryItem(listItem);
      break;

    case "tabBotClothes":
      listItem = pushItem("botclothes", arrItem);
      itemHTML = getEveryItem(listItem);
      break;
    case "tabShoes":
      listItem = pushItem("shoes", arrItem);
      itemHTML = getEveryItem(listItem);
      break;
    case "tabHandBags":
      listItem = pushItem("handbags", arrItem);
      itemHTML = getEveryItem(listItem);
      break;
    case "tabNecklaces":
      listItem = pushItem("necklaces", arrItem);
      itemHTML = getEveryItem(listItem);
      break;
    case "tabHairStyle":
      listItem = pushItem("hairstyle", arrItem);
      itemHTML = getEveryItem(listItem);
      break;
    case "tabBackground":
      listItem = pushItem("background", arrItem);
      itemHTML = getEveryItem(listItem);
      break;
  }

  return itemHTML;
}

function renderHTML() {
  let contentTabPane = "";
  let contentTabPills = "";
  data.navPills.forEach((item) => {
    let activeClass = item.tabName === "tabTopClothes" ? ACTIVE_CLASS : "";
    let fadeClass = item.tabName !== "tabTopClothes" ? FADE_CLASS : "";
    contentTabPills += getTabPills(item, activeClass);
    contentTabPane += `
        <div class="tab-pane container ${activeClass} ${fadeClass}" 
        id="${item.tabName}">
            <div class="row">
                ${renderTabListItem(item.tabName, data.tabPanes)}
            </div>
    
        </div>     
           
        
        `;
  });
  document.querySelector(".nav-pills").innerHTML = contentTabPills;
  document.querySelector(".tab-content").innerHTML = contentTabPane;
}

document.querySelectorAll(".changeStyle").forEach((item) => {
  item.onclick = (event) => {
    let nameItem = event.target.dataset.name;
    let chosenItem = findIndexItem(nameItem, LIST_ITEM);
    renderContain(chosenItem)
  };
});

// Render Body
function findIndexItem(name, arrItem) {
  let index = -1;
  for (let i in arrItem) {
    if (arrItem[i].name === name) {
      index = i;
      break;
    }
  }
  return arrItem[index];
}
function renderContain(item) {
  let typeItem = item.type;
  switch (typeItem) {
    case "topclothes":
      renderTop(item.imgSrc_png);
      break;
    case "botclothes":
      renderBot(item.imgSrc_png);
      break;
    case "shoes":
      renderShoes(item.imgSrc_png);
      break;
    case "handbags":
      renderHandBag(item.imgSrc_png);
      break;
    case "hairstyle":
      renderHairStyle(item.imgSrc_png);
      break;
    case "necklaces":
      renderNecklace(item.imgSrc_png);
      break;
    case "background":
      renderBackground(item.imgSrc_png);
      break;
  }
}
function renderTop(img) {
    $(".bikinitop").css({
      width: "500px",
      height: "500px",
      background: `url(${img})`,
      position: "absolute",
      top: "-9%",
      left: "-5%",
      zIndex: "3",
      transform: "scale(0.5)"
    });
  }
  
function renderBot(img) {
    $(".bikinibottom").css({
      width: "500px",
      height: "1000px",
      background: `url(${img})`,
      position: "absolute",
      top: "-30%",
      left: "-5%",
      zIndex: "2",
      transform: "scale(0.5)"
    });
  }
  
function renderShoes(img) {
    $(".feet").css({
      width: "500px",
      height: "1000px",
      background: `url(${img})`,
      position: "absolute",
      bottom: "-37%",
      right: "-3.5%",
      transform: "scale(0.5)",
      zIndex: "1"
    });
  }
  
function renderHandbag(img) {
    $(".handbag").css({
      width: "500px",
      height: "1000px",
      background: `url(${img})`,
      position: "absolute",
      bottom: "-40%",
      right: "-3.5%",
      transform: "scale(0.5)",
      zIndex: "4"
    });
  }
  
function renderNecklace(img) {
    $(".necklace").css({
      width: "500px",
      height: "1000px",
      background: `url(${img})`,
      position: "absolute",
      bottom: "-40%",
      right: "-3.5%",
      transform: "scale(0.5)",
      zIndex: "4"
    });
  }
  
function renderHairstyle(img) {
    $(".hairstyle").css({
      width: "1000px",
      height: "1000px",
      background: `url(${img})`,
      position: "absolute",
      top: "-75%",
      right: "-57%",
      transform: "scale(0.15)",
      zIndex: "4"
    });
  }
  
function renderBackground(img) {
    $(".background").css({
      backgroundImage: `url(${img})`
    });
  }