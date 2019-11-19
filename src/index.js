<<<<<<< Updated upstream
// var header_hidden = 0;
// var menu = document.querySelector('.menu');
// window.addEventListener('scroll', function () {
//     var header_top = document.getElementsByClassName('header_top')[0];
//     if (this.pageYOffset > 50 && header_hidden == 0) {
//         header_top.classList.add("scroll");
//         menu.style.paddingLeft = 0;
//         header_hidden = 1;
//     }
//     else if (this.pageYOffset <= 50 && header_hidden == 1) {
//         header_top.classList.remove("scroll");
//         menu.style.paddingLeft = '150px';
//         header_hidden = 0;
//     }
// });
// var header_menu_btn = document.querySelector('.menu_icon');
// header_menu_btn.addEventListener('click', function () {
//     if (menu.style.display == '') {
//         menu.style.display = 'flex';
//     }
//     else menu.style.display = '';
// });

// var popup_back = document.querySelector('.popup_back');
// var basket_counter_block = document.querySelector('.basket_counter');
// var basket_counter_n = 0;
// var basket_counter_number = document.querySelector('.basket_counter_number');
// var basket_items = [];
// var items_buttons = document.querySelectorAll('.item button');

// items_buttons.forEach(function(element){
//     element.onclick = function () {
//         basket_add(element.parentNode);
//         basket_counter_block.style.display = "flex";
//     };
// });
// var basket_icon = document.querySelector('.header_basket');
// basket_icon.onclick = function () {
//     popup_back.style.display = "flex";
// };
// var basket_close = document.querySelector('.basket_close');
// basket_close.onclick = function () {
//     popup_back.style.display = "none";
// };

// var basket_total_sum = 0;
// function basket_add(temp) {
//     var is_in_basket = 0;
//     var items = popup_back.querySelectorAll('.basket_img');
//     items.forEach(function (elem){
//         if (elem.parentNode.style.display == 'flex' &&
//             elem.src == temp.querySelector('.item-img').src) {
//             is_in_basket = 1;
//             elem.parentNode.querySelector('.basket_amount_number').innerHTML++;
//             elem.parentNode.querySelector('.sum_number').textContent =
//                 parseInt(elem.parentNode.querySelector('.sum_number').textContent) +
//                 parseInt(elem.parentNode.querySelector('.basket_item_cost_number').textContent);
//             basket_total_sum +=
//                 parseInt(elem.parentNode.querySelector('.basket_item_cost_number').textContent);
//             popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
//         }
//     });
//     if (is_in_basket == 0) {
//         basket_counter_n++;
//         basket_counter_number.innerHTML = basket_counter_n;
//         popup_back.querySelector('.basket_empty').style.display = 'none';
//         var temp_row = popup_back.querySelector('.basket_rows').lastElementChild;
//         var copy_row = temp_row.cloneNode(true);
//         copy_row.style.display = "flex";
//         copy_row.id = "";
//         copy_row.querySelector('.basket_img').src = temp.querySelector('.item-img').src;
//         var item_name = "";
//         var desc = temp.querySelector('.description').children;
//         for(var iter = 0; iter<desc.length; iter++){
//             if (!desc.item(iter).classList.contains('cost_block')) {
//                 item_name += desc.item(iter).innerHTML + " ";
//             }
//         }
//         copy_row.querySelector('.basket_name').innerHTML = item_name;
//         copy_row.querySelector('.basket_item_cost_number').innerHTML = temp.querySelector('.cost').innerHTML;
//         copy_row.querySelector('.sum_number').innerHTML = temp.querySelector('.cost').innerHTML;
//         basket_total_sum += parseInt(copy_row.querySelector('.sum_number').textContent);
//         popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
//         copy_row.querySelector('.basket_minus_block').onclick = function () {
//             if (copy_row.querySelector('.basket_amount_number').innerHTML > 0) {
//                 copy_row.querySelector('.basket_amount_number').innerHTML--;
//                 copy_row.querySelector('.sum_number').innerHTML -=
//                     parseInt(copy_row.querySelector('.basket_item_cost_number').textContent);
//                 basket_total_sum -=
//                     parseInt(copy_row.querySelector('.basket_item_cost_number').textContent);
//                 popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
//                 if (copy_row.querySelector('.basket_amount_number').innerHTML == 0) {
//                     basket_remove(copy_row);
//                 }
//             }
//         };
//         copy_row.querySelector('.basket_plus_block').onclick = function () {
//             copy_row.querySelector('.basket_amount_number').innerHTML++;
//             copy_row.querySelector('.sum_number').textContent =
//                 parseInt(copy_row.querySelector('.sum_number').textContent) +
//                 parseInt(copy_row.querySelector('.basket_item_cost_number').textContent);
//             basket_total_sum +=
//                 parseInt(copy_row.querySelector('.basket_item_cost_number').textContent);
//             popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
//         };

//         copy_row.firstElementChild.onclick = function () {
//             basket_remove(copy_row);
//             basket_total_sum -= parseInt(copy_row.querySelector('.sum_number').textContent);
//             popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
//         };
//         temp_row.before(copy_row);
//     }
// }

// function basket_remove(copy_row) {
//     copy_row.parentNode.removeChild(copy_row);
//     if (basket_counter_n > 0) {
//         basket_counter_n--;
//         basket_counter_number.innerHTML = basket_counter_n;
//     }
//     if (basket_counter_n == 0) {
//         popup_back.querySelector('.basket_empty').style.display = 'block';
//         basket_counter_block.style.display = "none";
//     }
// }

=======
import './scss/main.scss';
import $ from "jquery";


// Start of old code 
var header_hidden = 0;
window.addEventListener('scroll', function () {
  var header_top = document.getElementsByClassName('header_top')[0];
  if (this.pageYOffset > 50 && header_hidden == 0) {
    header_top.classList.add("scroll");
    header_hidden = 1;
  }
  else if (this.pageYOffset <= 50 && header_hidden == 1) {
    header_top.classList.remove("scroll");
    header_hidden = 0;
  }
});
var header_menu_btn = document.querySelector('.menu_icon');
var menu = document.querySelector('.menu');
var middle_wrapper = $(".middle_wrapper");
header_menu_btn.addEventListener('click', function () {
  let header_buttons = $(".header_buttons");

  let dif_height = 0;
  if (menu.style.display == '') {
    let old_height = parseInt(header_buttons.css('height'));
    menu.style.display = 'flex';
    dif_height = parseInt(header_buttons.css('height')) - old_height;
  }
  else {
    let old_height = parseInt(header_buttons.css('height'));
    menu.style.display = '';
    dif_height = parseInt(header_buttons.css('height')) - old_height;
  }
  middle_wrapper[0].style.paddingTop = (parseInt(parseInt(middle_wrapper.css('padding-top')) + dif_height) + "px");
});

var popup_back = document.querySelector('.popup_back');
var basket_counter_block = document.querySelector('.basket_counter');
var basket_counter_n = 0;
var basket_counter_number = document.querySelector('.basket_counter_number');
var basket_items = [];
var items_buttons = document.querySelectorAll('.item button');

items_buttons.forEach(function (element) {
  element.onclick = function () {
    basket_add(element.parentNode);
    basket_counter_block.style.display = "flex";
  };
});
var basket_icon = document.querySelector('.header_basket');
basket_icon.onclick = function () {
  popup_back.style.display = "flex";
};
var basket_close = document.querySelector('.basket_close');
basket_close.onclick = function () {
  popup_back.style.display = "none";
};

var basket_total_sum = 0;
function basket_add(temp) {
  var is_in_basket = 0;
  var items = popup_back.querySelectorAll('.basket_img');
  items.forEach(function (elem) {
    if (elem.parentNode.style.display == 'flex' &&
      elem.src == temp.querySelector('.item-img').src) {
      is_in_basket = 1;
      elem.parentNode.querySelector('.basket_amount_number').innerHTML++;
      elem.parentNode.querySelector('.sum_number').textContent =
        parseInt(elem.parentNode.querySelector('.sum_number').textContent) +
        parseInt(elem.parentNode.querySelector('.basket_item_cost_number').textContent);
      basket_total_sum +=
        parseInt(elem.parentNode.querySelector('.basket_item_cost_number').textContent);
      popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
    }
  });
  if (is_in_basket == 0) {
    basket_counter_n++;
    basket_counter_number.innerHTML = basket_counter_n;
    popup_back.querySelector('.basket_empty').style.display = 'none';
    var temp_row = popup_back.querySelector('.basket_rows').lastElementChild;
    var copy_row = temp_row.cloneNode(true);
    copy_row.style.display = "flex";
    copy_row.id = "";
    copy_row.querySelector('.basket_img').src = temp.querySelector('.item-img').src;
    var item_name = "";
    var desc = temp.querySelector('.description').children;
    for (var iter = 0; iter < desc.length; iter++) {
      if (!desc.item(iter).classList.contains('cost_block')) {
        item_name += desc.item(iter).innerHTML + " ";
      }
    }
    copy_row.querySelector('.basket_name').innerHTML = item_name;
    copy_row.querySelector('.basket_item_cost_number').innerHTML = temp.querySelector('.cost').innerHTML;
    copy_row.querySelector('.sum_number').innerHTML = temp.querySelector('.cost').innerHTML;
    basket_total_sum += parseInt(copy_row.querySelector('.sum_number').textContent);
    popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
    copy_row.querySelector('.basket_minus_block').onclick = function () {
      if (copy_row.querySelector('.basket_amount_number').innerHTML > 0) {
        copy_row.querySelector('.basket_amount_number').innerHTML--;
        copy_row.querySelector('.sum_number').innerHTML -=
          parseInt(copy_row.querySelector('.basket_item_cost_number').textContent);
        basket_total_sum -=
          parseInt(copy_row.querySelector('.basket_item_cost_number').textContent);
        popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
        if (copy_row.querySelector('.basket_amount_number').innerHTML == 0) {
          basket_remove(copy_row);
        }
      }
    };
    copy_row.querySelector('.basket_plus_block').onclick = function () {
      copy_row.querySelector('.basket_amount_number').innerHTML++;
      copy_row.querySelector('.sum_number').textContent =
        parseInt(copy_row.querySelector('.sum_number').textContent) +
        parseInt(copy_row.querySelector('.basket_item_cost_number').textContent);
      basket_total_sum +=
        parseInt(copy_row.querySelector('.basket_item_cost_number').textContent);
      popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
    };

    copy_row.firstElementChild.onclick = function () {
      basket_remove(copy_row);
      basket_total_sum -= parseInt(copy_row.querySelector('.sum_number').textContent);
      popup_back.querySelector('.total_sum_number').innerHTML = basket_total_sum;
    };
    temp_row.before(copy_row);
  }
}

function basket_remove(copy_row) {
  copy_row.parentNode.removeChild(copy_row);
  if (basket_counter_n > 0) {
    basket_counter_n--;
    basket_counter_number.innerHTML = basket_counter_n;
  }
  if (basket_counter_n == 0) {
    popup_back.querySelector('.basket_empty').style.display = 'block';
    basket_counter_block.style.display = "none";
  }
}
// End of old code


let categories_json;
read_categories(categories_json);
function read_categories(categories_json) {
  $.ajax({
    dataType: "json",
    url: "https://nit.tron.net.ua/api/category/list",
    success: function (data) {
      let temp_elem;
      temp_elem = $('<li class="category"><button id="category_all">All</button></li>');
      temp_elem.click = show_category("all");
      $(".categories_list").append(temp_elem);
      for (let i = 0; i < data.length; i++) {
        temp_elem = $('<li class="category"><button id="category_' + data[i].id + '">' + data[i].name + '</button></li>');
        temp_elem.click = show_category(data[i].id);
        $(".categories_list").append(temp_elem);
      }
    }
  });
}
function show_category(id) {
  if (id == "all") {
    $.ajax({
      dataType: "json",
      url: "https://nit.tron.net.ua//api/product/list",
      success: function (data) {
        $(".content_space").innerHTML="";
        data.forEach((value) => {
          $(".content_space").append(item(value));
        });
      }
    });
  }
  else {
    $.ajax({
      dataType: "json",
      url: "https://nit.tron.net.ua/api/product/list/category/" + id,
      success: function (data) {
        $(".content_space").innerHTML="";
        data.forEach((value) => {
          $(".content_space").append(item(value));
        });
      }
    });
  }
}

function item(elem) {
    let temp_item = '<div class="item" id="item-"'+elem.id+'>';
    temp_item+='<img class="item-img" src="'+elem.image_url+'" alt="Item '+elem.id+'">';
    temp_item+='<div class="description"> <div> <span>'+elem.name+'</span> </div> <div class="cost_block">';
    if(elem.special_price!=null){
      temp_item+='<div> <span class="old_cost">'+elem.price+'</span><span class="currency old_cost">грн</span> </div>';
      temp_item+='<div> <span class="cost">'+elem.special_price+'</span><span class="currency cost">грн</span> </div>';
    }
    else temp_item+='<div> <span class="cost">'+elem.price+'</span><span class="currency cost">грн</span> </div>';
    temp_item+='</div> </div> <button type="button">Купити</button> </div>';
    return temp_item;
}
>>>>>>> Stashed changes
