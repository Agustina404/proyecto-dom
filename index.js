// AÑADIR PRODUCTOS EN EL MISMO FORMATO
document.addEventListener('DOMContentLoaded', () => {
  const productos = [
    {
      nombre: 'Camiseta',
      marca: 'Nike',
      precio: 19.99,
      descripcion: 'Camiseta de algodón 100%',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/3d5c32590cc246948fabecb552cd4747/3088ec9e6cc148c78c5b4f6fffb42398.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Pantalones',
      marca: 'Adidas',
      precio: 39.99,
      descripcion: 'Pantalones vaqueros de mezclilla',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/66110dd53883488ea50ec79ea652acae/9d3a26f8a24247fa89836d9c9be8461c.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Zapatos',
      marca: 'Puma',
      precio: 59.99,
      descripcion: 'Zapatos de cuero cómodos',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/fbe33b25c7744817804fcbf79c2ef92a/ed0ec87d58824d338ec345cad8aa7145.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Sweater',
      marca: 'Rebook',
      precio: 15.99,
      descripcion: 'Sweater de lana de oveja',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/8d49799c30094e9ba1e379ffc8fbbebb/90057fb7593441c39f02816adf5f47b2.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Chaqueta',
      marca: "Levi's",
      precio: 89.99,
      descripcion: 'Chaqueta de invierno',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/84757d10a52a3b919727559fe949aaa8/e2993009b1054c2aafe5c69de7ad35d9.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Bufanda',
      marca: 'Zara',
      precio: 12.99,
      descripcion: 'Bufanda de lana',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/b580449212ca469ca6b7b1a7d7caf8d0/ae4647743ad94ac2a220626115973f07.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Sombrero',
      marca: 'H&M',
      precio: 8.99,
      descripcion: 'Sombrero de algodón',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/06ef179b1369492791fe69f3cdcd4e3d/0c3385ad18be4562a2a5cb874ee10ba4.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Guantes',
      marca: 'Uniqlo',
      precio: 14.99,
      descripcion: 'Guantes de lana',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/4ab14ea0c6f841dfa1dde14d0c2c2a91/a89af239173c4911bef96c5d4d82db3c.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Camisa',
      marca: 'Gap',
      precio: 24.99,
      descripcion: 'Camisa de lino',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/ebff6c9cab1a4134b1befbdc42a0d2b2/7fa67bada018457da56f3231c22b0e70.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Bermudas',
      marca: 'Tommy Hilfiger',
      precio: 29.99,
      descripcion: 'Bermudas de algodón',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/cb8de13935c94168981236d98fe6992b/4cb8a3c653494458b9aa803d1172e196.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Reloj',
      marca: 'Casio',
      precio: 199.99,
      descripcion: 'Reloj dorado',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/121e6f4842ab4f3980669603d4770b8e/ba04642647be4d609eeb67598be5a642.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Bolso',
      marca: 'Michael Kors',
      precio: 149.99,
      descripcion: 'Bolso de cuero',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/2e31600c9a804e73adf2b3744d1db7e9/ceed2a2345614c7696ae366ac5eded51.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Pendientes',
      marca: 'Tiffany',
      precio: 318.5,
      descripcion: 'Pendientes de plata',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/77bc484ca3db44ab8c463e3e33d69d80/175e2d7f35214a8dbaa7f0a0b5872057.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Calcetines',
      marca: 'Primark',
      precio: 8.75,
      descripcion: 'Calcetines blancos y rosas',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/275db79c20374856984ebaf1ace8e2e3/df707430e13342df89a00f2c3d1bb582.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Chandal',
      marca: 'Puma',
      precio: 49.99,
      descripcion: 'Chandal beige deportivo',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/18367667bb054c7fa041c3de7d566817/26f25b5ec2b94346b318868b4b81cb18.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Sudadera',
      marca: 'Only',
      precio: 32.99,
      descripcion: 'Sudadera negra bordada',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/cedb1f1c46b246faa339acb2a7079bcc/81d25b749e5e44f8a1062140c4371db7.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Zapatillas',
      marca: 'Anna Field',
      precio: 25.5,
      descripcion: 'Zapatillas blancas y beige',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/e890675a24ed3c6d96cd79ab4004167a/402becef11914a44923b20b75b453506.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Vestido',
      marca: 'Next',
      precio: 37.5,
      descripcion: 'Vestido leopardo con sudadera',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/bbd4a4a2cce04b45ad8279b23b253fd2/7094a0a3e40740fa8a330fc9fdc9e209.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Botas',
      marca: 'Anna Field',
      precio: 60.99,
      descripcion: 'Botas beige con tacon',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/0e106fa0121d4b2dbec503c5a281e69d/dcfa7d8f7a7b4a788f06fcc5ff1ff453.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Vaquero',
      marca: 'Mango',
      precio: 39.99,
      descripcion: 'Vaquero azul marino',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/6bdcb2f271344922bedc138348726f9f/f0753fc2df2b4e36bfe4b505fb24ab8f.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Top',
      marca: 'Crypt',
      precio: 20.99,
      descripcion: 'Top rosa con lentejuelas',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/dafd963cff294cfdba56c5ea418f237d/8ec9910a6db14ae7ac0d41d73f936c13.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Collar',
      marca: 'Rosefield',
      precio: 75.99,
      descripcion: 'Collar cola de serpiente',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/130ed71a5d75419bbc5f0161a9695407/71a3200af28f4f9da206d0705ba86879.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Sweater',
      marca: 'Vero Moda',
      precio: 40.99,
      descripcion: 'Sweater de punto azul',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/d2b8d784ebff4cc5bfc684f12a2be604/30d0f27b5b53444bace352c3f618280f.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Zapatillas',
      marca: 'Adidas',
      precio: 104.99,
      descripcion: 'Zapatillas adidas rojo',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/ef4babf485264408aeccdf01fbd8b339/3575c443f172482fad1f6587b3879a0d.jpg?imwidth=1800&filter=packshot'
    },
    {
      nombre: 'Cinturón',
      marca: 'Anna Field',
      precio: 29.99,
      descripcion: 'Cinturón marrón de cuero',
      imgUrl:
        'https://img01.ztat.net/article/spp-media-p1/b3cc08b1c5b24c5f88c3af4eedb85804/62472b98fe5f43fba9bea6a0efb2c496.jpg?imwidth=1800&filter=packshot'
    }
  ]

  const productContainer = document.getElementById('product-container')
  const template = document.createElement('template')
  template.innerHTML = `
<div class="product-card" data-price="">
  <a href="#"><img src="" alt="Product Image"></a>
  <h2 class="product-name"></h2>
  <p class="product-seller"></p>
  <p class="product-price"></p>
  <p class="product-description"></p>
</div>
  `

  productos.forEach((product) => {
    const productCard = document.importNode(template.content, true)
    productCard.querySelector('img').src = product.imgUrl
    productCard.querySelector('img').alt = product.nombre
    productCard.querySelector('.product-name').textContent = product.nombre
    productCard.querySelector(
      '.product-seller'
    ).textContent = `Marca: ${product.marca}`
    productCard.querySelector(
      '.product-price'
    ).textContent = `Precio: $${product.precio.toFixed(2)}`
    productCard.querySelector(
      '.product-description'
    ).textContent = `Descripción: ${product.descripcion}`
    productCard
      .querySelector('.product-card')
      .setAttribute('data-price', product.precio)
    productContainer.appendChild(productCard)
  })
})

// BARRA DE INTERACCION EN MOVIMIENTO
document.addEventListener('DOMContentLoaded', () => {
  const mensajes = [
    'ENVÍO GRATIS EN PEDIDOS +100! 🩷',
    'REBAJAS HASTA EL 50% 🩷',
    'OFERTAS DE TIEMPO LIMITADO 🩷',
    'NOVEDADES TODOS LOS DÍAS 🩷',
    'NUEVA COLECCIÓN DE OTOÑO 🩷',
    'ENVÍOS INTERNACIONALES 🩷',
    'FREE GIFT POR CADA COMPRA 🩷',
    'TALLAS ESPECIALES DISPONIBLES 🩷',
    'ENVÍOS EN 24/48 HORAS 🩷',
    'VENTA POR MAYOR DISPONIBLE 🩷'
  ]
  const topBarContainer = document.querySelector('.top-bar-container')
  const topBar = document.createElement('div')
  topBar.className = 'topBar'
  const topBarContent = document.createElement('div')
  topBarContent.className = 'top-bar-content'

  mensajes.forEach((mensaje) => {
    const paragraph = document.createElement('p')
    paragraph.textContent = mensaje
    topBarContent.appendChild(paragraph)
  })
  topBar.appendChild(topBarContent)

  topBarContainer.appendChild(topBar)
})

// FILTRO DE BUSQUEDA
const filtersSection = document.getElementById('filters-section')

function createFilterGroup() {
  const filterGroup = document.createElement('div')
  filterGroup.classList.add('filterGroup')

  const priceLabel = document.createElement('h3')
  priceLabel.textContent = 'Filtrar por precio'

  const minPriceInput = document.createElement('input')
  minPriceInput.setAttribute('type', 'number')
  minPriceInput.setAttribute('placeholder', 'Min')
  minPriceInput.id = 'min-price'

  const maxPriceInput = document.createElement('input')
  maxPriceInput.setAttribute('type', 'number')
  maxPriceInput.setAttribute('placeholder', 'Max')
  maxPriceInput.id = 'max-price'

  const applyButton = document.createElement('button')
  applyButton.textContent = 'Buscar'
  applyButton.addEventListener('click', applyFilters)

  filterGroup.appendChild(priceLabel)
  filterGroup.appendChild(minPriceInput)
  filterGroup.appendChild(maxPriceInput)
  filterGroup.appendChild(applyButton)

  filtersSection.appendChild(filterGroup)

  //FILTRO DE ORDEN
  const sortLabel = document.createElement('h3')
  sortLabel.textContent = 'Ordenar por'

  const sortSelect = document.createElement('select')
  sortSelect.id = 'orderBox'
  const optionDefault = document.createElement('option')
  optionDefault.value = ''
  optionDefault.textContent = 'Seleccionar'

  const optionAsc = document.createElement('option')
  optionAsc.value = 'asc'
  optionAsc.textContent = 'Precio ascendente'

  const optionDesc = document.createElement('option')
  optionDesc.value = 'desc'
  optionDesc.textContent = 'Precio descendente'

  sortSelect.appendChild(optionDefault)
  sortSelect.appendChild(optionAsc)
  sortSelect.appendChild(optionDesc)

  const sortButton = document.createElement('button')
  sortButton.id = 'orderButton'
  sortButton.textContent = 'Ordenar'
  sortButton.addEventListener('click', () => {
    sortProductsByPrice(sortSelect.value)
  })

  filterGroup.appendChild(sortLabel)
  filterGroup.appendChild(sortSelect)
  filterGroup.appendChild(sortButton)
  filtersSection.appendChild(filterGroup)
}

function sortProductsByPrice(order) {
  const productContainer = document.getElementById('product-container')
  const products = Array.from(document.querySelectorAll('.product-card'))

  const sortedProducts = products.sort((a, b) => {
    const priceA = parseFloat(a.getAttribute('data-price'))
    const priceB = parseFloat(b.getAttribute('data-price'))

    if (order === 'asc') {
      return priceA - priceB
    } else if (order === 'desc') {
      return priceB - priceA
    }
    return 0
  })

  productContainer.innerHTML = ''

  sortedProducts.forEach((product) => {
    productContainer.appendChild(product)
  })
}

function applyFilters() {
  const minPrice = parseFloat(document.getElementById('min-price').value) || 0
  const maxPrice =
    parseFloat(document.getElementById('max-price').value) || Infinity

  const products = document.querySelectorAll('.product-card')

  products.forEach((product) => {
    const productPrice = parseFloat(product.getAttribute('data-price'))

    if (productPrice >= minPrice && productPrice <= maxPrice) {
      product.style.display = 'block'
    } else {
      product.style.display = 'none'
    }
  })
}

createFilterGroup()
