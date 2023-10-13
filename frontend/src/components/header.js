const header = () => {
  const template = `
    <header class="bg-white shadow-lg">
        <div class="container mx-auto flex items-center justify-between px-4 py-3">
            <!-- Logo - Imagen -->
            <a href="/" class="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" class="w-12 h-12">
                <!-- Divider negro y delgado -->
                <hr class="border-t border-black h-8 w-px my-auto mx-2">
                <a href="/mercado-juegos" class="text-gray-500 hover:text-gray-800">Juegos</a>
                <hr class="border-t border-black h-8 w-px my-auto mx-2">
                <a href="/mercado-nft" class="text-gray-500 hover:text-gray-800">NFTs</a>
            </a>

            <!-- Barra de Búsqueda (Centrada) -->
            <div class="flex-grow mx-auto flex justify-center">
                <div class="relative w-full max-w-lg">
                    <input type="text" placeholder="Buscar..." class="py-2 px-3 rounded-md text-principal bg-white shadow-inner focus:outline-none w-full hover:bg-gray-100">
                    <button class="absolute inset-y-0 right-2 flex items-center">
                        <img src="search.png" alt="Lupa" class="w-5 h-5 text-principal">
                    </button>
                </div>
            </div>
            
            <!-- Autenticación y Carrito -->
            <div class="flex items-center space-x-4">
                <!-- Botón de Carrito (Reemplaza con tu imagen de carrito) -->
                <button>
                    <div class="w-8 h-8 bg-principal bg-opacity-30 flex items-center justify-center rounded-full">
                        <img src="carrito.png" alt="Carrito" class="w-6 h-6 text-principal">
                    </div>
                </button>

                <!-- Botón de Usuario (Reemplaza con tu imagen de usuario) -->
                <button>
                    <div class="w-8 h-8 bg-principal bg-opacity-30 flex items-center justify-center rounded-full">
                        <img src="user.png" alt="Usuario" class="w-6 h-6 text-principal">
                    </div>
                </button>
            </div>
        </div>
    </header>
  `;

  return template;
};

export default header;

