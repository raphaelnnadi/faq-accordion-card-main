'use script';

let accordionButton = document.querySelector('.accordion__question');

document.querySelectorAll('.accordion__question').forEach(item => {
  item.addEventListener('click', function () {
    console.log('click!');

    let accCollapse = item.nextElementSibling;

    if (!item.classList.contains('collapsing')) {
      // Open accordion item
      if (!item.classList.contains('open')) {
        console.log('toggle   accordion');

        // Remove "collapse", add "collapsing" class to accordion__collapse (sibling)

        accCollapse.style.display = ' block';
        let accHeight = accCollapse.clientHeight;

        setTimeout(() => {
          accCollapse.style.height = accHeight + 'px';
          accCollapse.style.display = '';
        }, 1);

        accCollapse.classList = 'accordion__collapse collapsing';
        // After X amount of time, Remove "collapsing" class and add "collapse open" class

        setTimeout(() => {
          console.log('open accordion content');
          accCollapse.classList = 'accordion__collapse collapse open';
        }, 300);
      }
      // Close accordion item
      else {
        // Remove "collapse open" from accordion__collapse, add "collapsing"
        accCollapse.classList = 'accordion__collapse collapsing';

        setTimeout(() => {
          accCollapse.style.height = '0px';
        }, 1);

        // After X amount of time, remove "collapsing" class and add "collapse" class
        setTimeout(() => {
          console.log('close accordion content');
          accCollapse.classList = 'accordion__collapse collapse';
          accCollapse.style.height = '';
        }, 300);
      }
    }

    item.classList.toggle('open');
    // accCollapse.classList.toggle('open');
  });
});

// select the p elements
// let question = document.getElementsByClassName('question');
// let answer = document.getElementsByClassName('answer');
// // create an event listener on all quetion paragraph
// for (let i = 0; i < question.length; i++) {
//   question[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//     // let answer = this.nextElementSibling;
//     if (answer.style.display === 'none') {
//       answer.style.display = 'block';
//     } else {
//       answer.style.display = 'none';
//     }
//   });
// }

// function myFunction() {
//   if (answer.style.display === none) {
//     answer.style.display = 'block';
//   } else {
//     answer.style.display = 'none';
//   }
// }

// $('.question').on('click', function () {
//   $(this).next('.answer').slideToggle('slow');
// });

// $(document).ready(function () {
//   $('div').children('.answer').hide();
// });

// $(document).ready(function () {
//   $('.answer').hide();

//   $('.question').click(function () {
//     $('.answer').hide();
//     $(this).next('.answer').show();
//   });
// });
