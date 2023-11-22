const words = ['Safe!', 'Educated!', 'Trained!'];

let i = 0;
let j = 0;
let curr = '';
let deleting = false;

const typewriter = () => {
  curr = words[i];

  if (deleting) {
    document.getElementById('typewriter').textContent = curr.substring(
      0,
      j - 1
    );
    j--;

    if (j == 0) {
      deleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
      setTimeout(typewriter, 1000);
    } else {
      setTimeout(typewriter, 200);
    }
  } else {
    document.getElementById('typewriter').textContent = curr.substring(
      0,
      j + 1
    );
    j++;
    if (j == curr.length) {
      deleting = true;
      setTimeout(typewriter, 1000);
    } else {
      setTimeout(typewriter, 200);
    }
  }
};

typewriter();

// burger menu
var burger = document.getElementById('burger-menu');
var menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
