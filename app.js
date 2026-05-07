// 1. Base de Datos de Productos Compleja
const products = [
    // --- MUJER ---
    {
        id: 1,
        name: "Black Opium",
        brand: "YVES SAINT LAURENT",
        gender: "mujer",
        basePrice: 89.95,
        originalPrice: 110.00,
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=400&auto=format&fit=crop",
        tag: "Oferta",
        desc: "Una fragancia adictiva que combina la energía del café negro con la feminidad de las flores blancas. Una vibración moderna y juvenil.",
        notes: "Salida: Pimienta rosa, Flor de azahar. Corazón: Café, Jazmín. Fondo: Vainilla, Pachulí.",
        sizes: [
            { ml: 30, multiplier: 1 },
            { ml: 70, multiplier: 1.4 },
            { ml: 100, multiplier: 1.8 }
        ]
    },
    {
        id: 2,
        name: "La Vie Est Belle",
        brand: "LANCÔME",
        gender: "mujer",
        basePrice: 74.99,
        originalPrice: 95.00,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop",
        tag: "",
        desc: "El perfume de la felicidad. Una declaración universal a la belleza de la vida. Protagonizado por el iris, la flor de la luz.",
        notes: "Salida: Grosellas negras, Pera. Corazón: Iris, Jazmín, Flor de azahar. Fondo: Praliné, Vainilla.",
        sizes: [
            { ml: 30, multiplier: 1 },
            { ml: 70, multiplier: 1.3 },
            { ml: 100, multiplier: 1.6 }
        ]
    },
    {
        id: 3,
        name: "Good Girl",
        brand: "CAROLINA HERRERA",
        gender: "mujer",
        basePrice: 98.00,
        originalPrice: 120.00,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format&fit=crop",
        tag: "Top Ventas",
        desc: "Audaz y sofisticada. Good Girl es una fragancia poderosa y sensual. Una mezcla audaz de elementos claros y oscuros.",
        notes: "Salida: Almendra, Café. Corazón: Nardo, Jazmín Sambac. Fondo: Haba tonka, Cacao.",
        sizes: [
            { ml: 30, multiplier: 1 },
            { ml: 70, multiplier: 1.5 },
            { ml: 100, multiplier: 1.9 }
        ]
    },
    {
        id: 4,
        name: "Baccarat Rouge 540",
        brand: "MAISON F. KURKDJIAN",
        gender: "mujer",
        basePrice: 265.00,
        originalPrice: null,
        image: "assets/baccarat.png",
        tag: "Exclusivo",
        desc: "Luminoso y sofisticado, Baccarat Rouge 540 se posa sobre la piel como un soplo ambarino, floral y amaderado. Una alquimia poética.",
        notes: "Salida: Jazmín, Azafrán. Corazón: Madera de cedro. Fondo: Ámbar gris.",
        sizes: [
            { ml: 30, multiplier: 1 },
            { ml: 70, multiplier: 1.8 },
            { ml: 100, multiplier: 2.5 }
        ]
    },
    // --- HOMBRE ---
    {
        id: 5,
        name: "Bleu de Chanel",
        brand: "CHANEL",
        gender: "hombre",
        basePrice: 115.99,
        originalPrice: 135.00,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400&auto=format&fit=crop",
        tag: "Novedad",
        desc: "El elogio de la libertad masculina expresado en una fragancia aromática amaderada de estela cautivadora.",
        notes: "Salida: Limón, Menta, Pimienta rosa. Corazón: Jengibre, Nuez moscada, Jazmín. Fondo: Incienso, Sándalo, Cedro.",
        sizes: [
            { ml: 30, multiplier: 1 },
            { ml: 70, multiplier: 1.4 },
            { ml: 100, multiplier: 1.7 }
        ]
    },
    {
        id: 6,
        name: "Sauvage Elixir",
        brand: "DIOR",
        gender: "hombre",
        basePrice: 142.50,
        originalPrice: 160.00,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=400&auto=format&fit=crop",
        tag: "Top Ventas",
        desc: "Un perfume extraordinariamente concentrado. La frescura emblemática de Sauvage con un corazón de especias.",
        notes: "Salida: Nuez moscada, Canela, Cardamomo. Corazón: Lavanda de Nyons. Fondo: Maderas dulces, Pachulí.",
        sizes: [
            { ml: 30, multiplier: 1 },
            { ml: 70, multiplier: 1.5 },
            { ml: 100, multiplier: 2.0 }
        ]
    },
    {
        id: 7,
        name: "Acqua Di Gio",
        brand: "GIORGIO ARMANI",
        gender: "hombre",
        basePrice: 65.50,
        originalPrice: 85.00,
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=400&auto=format&fit=crop",
        tag: "",
        desc: "Nacida del mar, el sol, la tierra y la brisa de una isla mediterránea. Transparente, aromática y amaderada.",
        notes: "Salida: Naranja, Lima, Mandarina, Bergamota. Corazón: Ciclamen, Nuez moscada, Notas marinas. Fondo: Ámbar, Pachulí, Cedro.",
        sizes: [
            { ml: 30, multiplier: 1 },
            { ml: 70, multiplier: 1.3 },
            { ml: 100, multiplier: 1.6 }
        ]
    },
    {
        id: 8,
        name: "Terre d'Hermès",
        brand: "HERMÈS",
        gender: "hombre",
        basePrice: 105.00,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=400&auto=format&fit=crop",
        tag: "Clásico",
        desc: "Terre d’Hermès narra la relación del hombre con la tierra, su diálogo humilde y armónico con la naturaleza y los elementos.",
        notes: "Salida: Naranja, Pomelo. Corazón: Pimienta, Pelargonio. Fondo: Vetiver, Cedro, Pachulí, Benjuí.",
        sizes: [
            { ml: 30, multiplier: 1 },
            { ml: 70, multiplier: 1.4 },
            { ml: 100, multiplier: 1.8 }
        ]
    }
];

// 2. Variables de Estado
let cart = [];
let currentProduct = null;
let currentSelectedSizeIndex = 0;

// 3. Referencias al DOM
const gridMujer = document.getElementById('gridMujer');
const gridHombre = document.getElementById('gridHombre');

// Modal Elements
const productModal = document.getElementById('productModal');
const modalContentAnim = document.getElementById('modalContentAnim');
const modalImage = document.getElementById('modalImage');
const modalBrand = document.getElementById('modalBrand');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalOriginalPrice = document.getElementById('modalOriginalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalNotes = document.getElementById('modalNotes');
const sizeSelectorContainer = document.getElementById('sizeSelectorContainer');
const modalTag = document.getElementById('modalTag');

// Cart & Overlay
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

// 4. Renderizar Grids
function generateProductHTML(product) {
    return `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300 relative cursor-pointer" onclick="openProductModal(${product.id})">
            ${product.tag ? `<span class="absolute top-4 left-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full z-10">${product.tag}</span>` : ''}
            <div class="relative h-72 overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
                <div class="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <button class="bg-white text-gray-900 font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition duration-300 hover:bg-brand hover:text-white shadow-xl">
                        Ver Detalles
                    </button>
                </div>
            </div>
            <div class="p-6">
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">${product.brand}</p>
                <h3 class="text-xl font-bold text-gray-900 mb-2 truncate">${product.name}</h3>
                <div class="flex items-center space-x-2">
                    <span class="text-xl font-extrabold text-brand">Desde ${product.basePrice.toFixed(2)} €</span>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(filterText = "") {
    const text = filterText.toLowerCase();
    
    const mujerHTML = products
        .filter(p => p.gender === 'mujer' && (p.name.toLowerCase().includes(text) || p.brand.toLowerCase().includes(text)))
        .map(generateProductHTML)
        .join('');
        
    const hombreHTML = products
        .filter(p => p.gender === 'hombre' && (p.name.toLowerCase().includes(text) || p.brand.toLowerCase().includes(text)))
        .map(generateProductHTML)
        .join('');
    
    if(gridMujer) gridMujer.innerHTML = mujerHTML || '<p class="text-gray-500 col-span-full">No se encontraron productos.</p>';
    if(gridHombre) gridHombre.innerHTML = hombreHTML || '<p class="text-gray-500 col-span-full">No se encontraron productos.</p>';
}

// Lógica de Búsqueda
function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchDropdown');
    
    if (!searchInput || !dropdown) return;
    
    const text = searchInput.value.toLowerCase().trim();
    
    if (text.length === 0) {
        dropdown.classList.add('hidden');
        renderProducts(); // Mostrar todo
        return;
    }
    
    const matches = products.filter(p => p.name.toLowerCase().includes(text) || p.brand.toLowerCase().includes(text));
    
    if (matches.length > 0) {
        dropdown.innerHTML = matches.map(p => `
            <div onclick="selectFromSearch(${p.id})" class="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 transition">
                <img src="${p.image}" class="w-12 h-12 object-cover rounded-md mr-4">
                <div>
                    <p class="font-bold text-gray-900 text-sm">${p.name}</p>
                    <p class="text-xs text-brand font-bold uppercase">${p.brand}</p>
                </div>
            </div>
        `).join('');
        dropdown.classList.remove('hidden');
    } else {
        dropdown.innerHTML = '<div class="p-4 text-center text-gray-500 text-sm">No hay resultados</div>';
        dropdown.classList.remove('hidden');
    }
    
    renderProducts(text);
}

function selectFromSearch(id) {
    document.getElementById('searchInput').value = '';
    document.getElementById('searchDropdown').classList.add('hidden');
    renderProducts(); 
    openProductModal(id);
}

// Ocultar dropdown al hacer click fuera
document.addEventListener('click', function(e) {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchDropdown');
    if (searchInput && dropdown) {
        if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add('hidden');
        }
    }
});

// 5. Lógica del Modal de Producto
function openProductModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    currentSelectedSizeIndex = 0; // Reset a 30ml
    
    // Población de datos
    modalImage.src = currentProduct.image;
    modalBrand.textContent = currentProduct.brand;
    modalName.textContent = currentProduct.name;
    modalDesc.textContent = currentProduct.desc;
    modalNotes.textContent = currentProduct.notes;
    
    if(currentProduct.tag) {
        modalTag.textContent = currentProduct.tag;
        modalTag.classList.remove('hidden');
    } else {
        modalTag.classList.add('hidden');
    }

    renderSizeButtons();
    updateModalPrice();

    // Mostrar modal con animación
    productModal.classList.remove('hidden');
    // Pequeño timeout para que se aplique el display block antes de animar
    setTimeout(() => {
        modalContentAnim.classList.remove('scale-95', 'opacity-0');
        modalContentAnim.classList.add('scale-100', 'opacity-100');
    }, 10);
    
    // Evento boton añadir
    document.getElementById('modalAddToCartBtn').onclick = () => {
        addToCartWithDetails();
        closeProductModal();
    };
}

function closeProductModal() {
    modalContentAnim.classList.remove('scale-100', 'opacity-100');
    modalContentAnim.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        productModal.classList.add('hidden');
    }, 300); // esperar animación
}

function renderSizeButtons() {
    sizeSelectorContainer.innerHTML = currentProduct.sizes.map((size, index) => {
        const isSelected = index === currentSelectedSizeIndex;
        const baseClasses = "border-2 rounded-lg py-2 px-4 font-bold transition focus:outline-none";
        const selectedClasses = "border-brand bg-brand text-white shadow-md";
        const unselectedClasses = "border-gray-200 text-gray-600 hover:border-gray-400";
        
        return `
            <button onclick="selectSize(${index})" class="${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}">
                ${size.ml} ml
            </button>
        `;
    }).join('');
}

function selectSize(index) {
    currentSelectedSizeIndex = index;
    renderSizeButtons();
    updateModalPrice();
}

function updateModalPrice() {
    const size = currentProduct.sizes[currentSelectedSizeIndex];
    const finalPrice = currentProduct.basePrice * size.multiplier;
    
    modalPrice.textContent = finalPrice.toFixed(2) + ' €';
    
    if (currentProduct.originalPrice) {
        const finalOrigPrice = currentProduct.originalPrice * size.multiplier;
        modalOriginalPrice.textContent = finalOrigPrice.toFixed(2) + ' €';
        modalOriginalPrice.classList.remove('hidden');
    } else {
        modalOriginalPrice.classList.add('hidden');
    }
}

// 6. Lógica del Carrito
function addToCartWithDetails() {
    const size = currentProduct.sizes[currentSelectedSizeIndex];
    const finalPrice = currentProduct.basePrice * size.multiplier;
    
    // Crear un ID único basado en el producto + el tamaño
    const cartItemId = `${currentProduct.id}-${size.ml}`;
    
    const existingItem = cart.find(item => item.cartItemId === cartItemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: currentProduct.id,
            name: currentProduct.name,
            sizeStr: `${size.ml} ml`,
            price: finalPrice,
            image: currentProduct.image,
            quantity: 1
        });
    }
    
    updateCart();
    openCart();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    updateCart();
}

function updateQuantity(cartItemId, change) {
    const item = cart.find(item => item.cartItemId === cartItemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2) + ' €';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center mt-10"><i class="fas fa-shopping-basket text-4xl mb-4 opacity-50 block"></i>Tu cesta está vacía</p>';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="flex items-center space-x-4 border-b pb-4">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
            <div class="flex-1">
                <h4 class="text-sm font-bold text-gray-900 truncate">${item.name}</h4>
                <p class="text-xs text-gray-500 mb-1">Formato: ${item.sizeStr}</p>
                <p class="text-brand font-bold">${item.price.toFixed(2)} €</p>
                <div class="flex items-center mt-2 border rounded-lg w-24">
                    <button onclick="updateQuantity('${item.cartItemId}', -1)" class="px-2 py-1 text-gray-500 hover:text-brand">-</button>
                    <span class="flex-1 text-center text-sm font-bold">${item.quantity}</span>
                    <button onclick="updateQuantity('${item.cartItemId}', 1)" class="px-2 py-1 text-gray-500 hover:text-brand">+</button>
                </div>
            </div>
            <button onclick="removeFromCart('${item.cartItemId}')" class="text-gray-400 hover:text-red-500">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function openCart() {
    cartSidebar.classList.remove('translate-x-full');
    cartOverlay.classList.remove('hidden');
}

function closeCart() {
    cartSidebar.classList.add('translate-x-full');
    cartOverlay.classList.add('hidden');
}

// 7. Event Listeners y Utilidades
if(cartBtn) cartBtn.addEventListener('click', openCart);
if(closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if(cartOverlay) cartOverlay.addEventListener('click', closeCart);

// Foro
function openForum() {
    document.getElementById('forumModal').classList.remove('hidden');
}
function closeForum() {
    document.getElementById('forumModal').classList.add('hidden');
}

function postForumMessage() {
    const input = document.getElementById('forumInput');
    const msg = input.value.trim();
    if (!msg) return;
    
    const container = document.getElementById('forumMessages');
    
    // Crear el nuevo mensaje del usuario
    const newMsgHTML = `
        <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 animate-pulse">
            <div class="flex justify-between items-center mb-2">
                <span class="font-bold text-blue-800">Tú</span>
                <span class="text-xs text-blue-400">Ahora mismo</span>
            </div>
            <p class="text-gray-800 text-sm">${msg}</p>
        </div>
    `;
    
    // Insertarlo al principio de la lista
    container.insertAdjacentHTML('afterbegin', newMsgHTML);
    
    // Limpiar input y scrollear arriba
    input.value = '';
    container.scrollTop = 0;
    
    // Quitar la clase de pulso después de 1 segundo para efecto visual
    setTimeout(() => {
        container.firstElementChild.classList.remove('animate-pulse');
    }, 1000);
}

// Chat
function toggleChat() {
    const chat = document.getElementById('chatWindow');
    chat.classList.toggle('hidden');
}
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if(!msg) return;
    
    const container = document.getElementById('chatMessages');
    
    // User msg
    container.innerHTML += `
        <div class="flex justify-end mt-2">
            <div class="bg-brand text-white p-3 rounded-lg rounded-tr-none shadow-sm text-sm">
                ${msg}
            </div>
        </div>
    `;
    input.value = '';
    container.scrollTop = container.scrollHeight;
    
    // Auto reply
    setTimeout(() => {
        container.innerHTML += `
            <div class="flex mt-2">
                <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-700 border">
                    Gracias por tu mensaje. Un asesor perfumista te responderá en breve.
                </div>
            </div>
        `;
        container.scrollTop = container.scrollHeight;
    }, 1000);
}

// Gadgets (Reloj y Visitas)
setInterval(() => {
    const now = new Date();
    const clock = document.getElementById('digitalClock');
    if(clock) {
        clock.innerHTML = `<i class="far fa-clock text-brand mr-1"></i> ${now.toLocaleTimeString()}`;
    }
}, 1000);

// Contador visitas (fijo en 1 como pidió el usuario)
let visitas = 1;
const counter = document.getElementById('visitorCounter');
if(counter) counter.textContent = visitas.toLocaleString();

// Init
renderProducts();
updateCart();
