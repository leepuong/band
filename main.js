// mouse dot

document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.cursor');
    const hoverTargets = document.querySelectorAll('.hover-target');

    document.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursor.style.left = `${posX}px`;
        cursor.style.top = `${posY}px`;
    });



    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', function () {
            cursor.style.transform = 'scale(2)';
            
        });

        target.addEventListener('mouseleave', function () {
            cursor.style.transform = 'scale(1)';

        });
        
    });
});

// mouse dot











// intro loaded

document.addEventListener('DOMContentLoaded', function () {
    const animationItems =document.querySelectorAll('.content_slider');
    let currentInder = 0;

    function showNextItem() {
        animationItems[currentInder].classList.remove('show');
        currentInder = (currentInder + 1) % animationItems.length;
        animationItems[currentInder].classList.add('show');
    }
    setInterval(showNextItem, 3000);
})
// intro loaded














// href toàn phần
var clickableElements = document.querySelectorAll('.linkTo');

    // Lặp qua từng phần tử và thêm sự kiện click
    clickableElements.forEach(function(element) {
      element.addEventListener('click', function(event) {
        // Lấy thẻ a trong thẻ li
        var anchorElement = element.querySelector('a');
        // Lấy href từ thẻ a
        var href = anchorElement.getAttribute('href');
        // Chuyển hướng đến href
        if (href) {
          window.location.href = href;
        }
        // Ngăn chặn hành động mặc định của thẻ a
        event.preventDefault();
      });
    });

// href toàn phần










// psesudo lé

// Lấy phần tử moreIcon
var moreIcon = document.querySelector('.moreIcon');
// Lấy phần tử closeIcon
var closeIcon = document.querySelector('.closeIcon');
// Lấy tất cả các phần tử mobiBar
var mobiBars = document.querySelectorAll('.mobiBar');

// Thêm sự kiện click cho moreIcon
moreIcon.addEventListener('click', function() {
  // Hiển thị closeIcon và ẩn moreIcon
  closeIcon.style.display = 'inline';
  moreIcon.style.display = 'none';
  
  // Hiển thị các li
  mobiBars.forEach(function(element) {
    element.style.display = 'block';
  });
});

// Thêm sự kiện click cho closeIcon
closeIcon.addEventListener('click', function() {
  // Hiển thị moreIcon và ẩn closeIcon
  closeIcon.style.display = 'none';
  moreIcon.style.display = 'inline';
  
  // Ẩn các li
  mobiBars.forEach(function(element) {
    element.style.display = 'none';
  });
});


// psesudo lé
var button = document.getElementById('showAlertButton');








// Chọn các phần tử của cửa sổ thông báo tùy chỉnh
var modal = document.getElementById('customInputBox');
var inputField = document.getElementById('inputField');

// Thêm sự kiện click cho nút
button.addEventListener('click', function() {
    // Hiển thị cửa sổ thông báo tùy chỉnh
    modal.style.display = 'block';
    // Focus vào ô nhập văn bản
    inputField.focus();
});

// Thêm sự kiện nhấn phím
inputField.addEventListener('keyup', function(event) {
    // Kiểm tra xem người dùng đã nhấn phím Enter không
    if (event.keyCode === 13) {
        // Ẩn cửa sổ thông báo tùy chỉnh khi nhấn Enter
        modal.style.display = 'none';
    }
});

// Thêm sự kiện click cho nút đóng
window.addEventListener('click', function(event) {
    // Ẩn cửa sổ thông báo tùy chỉnh khi người dùng bấm ngoài phạm vi của nó
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// // Chọn các phần tử của cửa sổ thông báo tùy chỉnh
// var modal = document.getElementById('customInputBox');
// var inputField = document.getElementById('inputField');

// // Thêm sự kiện click cho nút
// button.addEventListener('click', function() {
//     // Hiển thị cửa sổ thông báo tùy chỉnh và áp dụng hiệu ứng puffIn
//     modal.style.display = 'block';
//     modal.classList.add('vanishIn');
//     // Focus vào ô nhập văn bản
//     inputField.focus();
// });

// // Thêm sự kiện nhấn phím
// inputField.addEventListener('keyup', function(event) {
//     // Kiểm tra xem người dùng đã nhấn phím Enter không
//     if (event.keyCode === 13) {
//         // Ẩn cửa sổ thông báo tùy chỉnh khi nhấn Enter và áp dụng hiệu ứng puffOut
//         modal.classList.remove('vanishIn');
//         modal.classList.add('vanishOut');
//         setTimeout(function() {
//             modal.style.display = 'none';
//         }, 400); // Thời gian phải tương ứng với thời gian hoàn thành hiệu ứng puffOut
//     }
// });

// // Thêm sự kiện click cho nút đóng
// window.addEventListener('click', function(event) {
//     // Ẩn cửa sổ thông báo tùy chỉnh khi người dùng bấm ngoài phạm vi của nó và áp dụng hiệu ứng puffOut
//     if (event.target == modal) {
//       modal.classList.remove('vanishIn');
//       modal.classList.add('vanishOut');
//         setTimeout(function() {
//             modal.style.display = 'none';
//         }, 400); // Thời gian phải tương ứng với thời gian hoàn thành hiệu ứng puffOut
//     }
// });
