// Fondo con partículas cafés 🍫
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.id = "background";
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Aseguramos que el canvas esté debajo de otros elementos
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1"; // Hace que el canvas quede en el fondo, detrás de los demás elementos

let particles = [];

// Crear partículas
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

// Dibujar y mover partículas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#6d4c41"; // color café
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}
draw();

// Ajustar al redimensionar ventana
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
// Obtener el botón y el contenedor de texto
const aboutButton = document.getElementById('aboutButton');
const aboutText = document.getElementById('aboutText');

// Función para mostrar u ocultar el texto sobre el autor
aboutButton.addEventListener('click', () => {
  // Alterna la clase 'hidden' para mostrar/ocultar el texto
  aboutText.classList.toggle('hidden');
});
