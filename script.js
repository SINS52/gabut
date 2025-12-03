function searchTransition() {
    var search = document.querySelector('.search');
    var inputSearch = document.querySelector('#inputSearchMain');
    var shortCutApp = document.querySelector('.shortcutapp');
    search.classList.toggle('active');
    inputSearch.classList.toggle('active');
    shortCutApp.classList.toggle('active');
    
}

function openMenu() {
  var menu = document.querySelector('.menu');
  var buttonMenu = document.getElementById('button-menu')
  menu.classList.toggle('active');
  buttonMenu.classList.toggle('active')
}

const wallpapers = [
  'wallpaper1.jpg',
  'wallpaper2.png',
  'wallpaper3.jpg',
  'wallpaper4.jpg',
  'wallpaper5.jpeg',
  'wallpaper6.jpg',
  'wallpaper7.jpg',
  'wallpaper8.png',
  'wallpaper9.jpg'
];

let currentWallpaperIndex = 0;

const btnBackground = document.getElementById('changeBackground');

btnBackground.addEventListener('click', () => {
  document.body.style.backgroundImage = `url(${wallpapers[currentWallpaperIndex]})`;
  
  currentWallpaperIndex = (currentWallpaperIndex + 1) % wallpapers.length;
});


document.getElementById('searchForm').addEventListener('submit', function(event) {  
      var input = document.getElementById('inputSearchMain').value;  
      if (input.trim() === '') {  
        event.preventDefault();
      }  
    });

function updateTime() {

  const now = new Date();

            
  // Format jam: menit: detik
            
  const hours = String(now.getHours()).padStart(2, '0');
            
  const minutes = String(now.getMinutes()).padStart(2, '0');
           
  const seconds = String(now.getSeconds()).padStart(2, '0');

            
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

            
  
  // Hari ini
            
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
            
  const today = days[now.getDay()];
           
  document.getElementById('day').textContent = today;
        
}

// Update jam setiap 1 detik
        
setInterval(updateTime, 1000);
       
updateTime(); // panggil langsung agar segera tampil