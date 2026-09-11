# DRAGON BALL — Tienda de figuras coleccionables

Plataforma web de e-commerce simulado sobre el universo Dragon Ball. Permite explorar un catálogo de personajes con filtros y paginación, consultar fichas detalladas con ediciones especiales, llevar un carrito de compras y confirmar pedidos con un formulario de datos de envío validado campo a campo.

**Integrantes:**

-   Nombre — [@MaximilianoOrtiz](https://github.com/MaximilianoOrtiz)
-   Nombre — [@MatiasBenitez](https://github.com/Matis-Benitez)


**Demo (GitHub Pages):** [https://maximilianoortiz.github.io/app-dragon-ball/#](https://maximilianoortiz.github.io/app-dragon-ball/#)

---

## Tabla de contenidos

-   [Cómo levantar el proyecto en local](#cómo-levantar-el-proyecto-en-local)
-   [Stack tecnológico](#stack-tecnológico)
-   [Estructura del proyecto](#estructura-del-proyecto)
-   [Funcionalidades principales](#funcionalidades-principales)
-   [Enfoque del trabajo integrador](#enfoque-del-trabajo-integrador)

---

## Cómo levantar el proyecto en local

### Pasos

1.  Clonar el repositorio:

    ```
    git clone https://github.com/MaximilianoOrtiz/app-dragon-ball.git
    ```

2.  Levantar un servidor local:

    **Extensión Live Server de VS Code:** Clic derecho sobre `index.html` → *Open with Live Server*.

3.  Abrir el navegador en la dirección que indique la herramienta elegida, por ejemplo:

    ```
    http://localhost:5500
    ```

4.  Navegar desde `index.html`. No requiere variables de entorno ni claves de API: la [Dragon Ball API](https://dragonball-api.com) utilizada es pública y no exige autenticación.

---

## Stack tecnológico

| Capa                | Tecnología                                                                 |
| ------------------- | -------------------------------------------------------------------------- |
| Estructura          | HTML5 semántico                                                            |
| Estilos             | CSS3 puro (variables/custom properties, Flexbox, Grid, `@media` queries, BEM) |
| Lógica              | JavaScript, sin frameworks                                                 |
| Datos remotos       | [Dragon Ball API](https://web.dragonball-api.com/) (REST, JSON)                 
| Persistencia local  | `localStorage` (carrito, vistos recientemente)                             |
| Mapas               | Leaflet + geocoding de Nominatim (CDN, página "Contacto")            |
| Tipografías         | Google Fonts (Rajdhani, Outfit)                             |

No se utilizó ningún framework de frontend (React, Vue, etc.) ni bundlers (Webpack, Vite)

---

## Estructura del proyecto 
Se opto por un enfoque orientado a componentes


```
app-dragon-ball/
├── *.html                 # Vistas del sitio (home, catálogo, detalle, carrito, nosotros)
├── css/
│   └── styles.css         # Hoja de estilos única, centraliza todo el diseño
└── js/
    ├── api/               # Comunicación con servicios externos (Dragon Ball API, Leaflet)
    ├── components/        # Piezas de UI reutilizables, agrupadas por dominio (cart, order, ui,home)
    ├── pages/             # Orquestación de cada vista
    ├── utils/             # Utilidades de estado y persistencia en el navegador
    ├── validators/        # Motor de validación de formularios y sus reglas
    └── main.js            # Punto de entrada: monta los componentes compartidos
```


La separación por carpetas busca aislar responsabilidades: quien habla con la API (`api/`), quien presenta cada pieza de UI (`components/`), quien organiza cada pantalla (`pages/`) y quien expone utilidades de estado y validación (`utils/`, `validators/`) — sin depender de un framework para lograr esa organización.

---

## Funcionalidades principales

-   **Catálogo con filtros combinables**: nombre, raza y género, con búsqueda por texto accesible desde la navegación y paginación de 10 resultados por página.
-   **Ficha de detalle**: sinopsis, raza, género, afiliación y precio simulado a partir del *ki* del personaje, más sus **ediciones especiales** (transformaciones) con agregado al carrito.
-   **Historial de vistos recientemente**: las figuras visitadas se muestran en el home, persistidas en el navegador.
-   **Carrito**: sumar/restar cantidades, eliminar un producto o vaciar el carrito completo; todo guardado en `localStorage` y reflejado en la navegación.
-   **Resumen del pedido**: subtotal por producto, subtotal general, envío gratis y total.
-   **Checkout con validación**: modal de datos de envío (nombre, apellido, dirección, celular y aclaraciones) con validación campo a campo y mensajes de error accesibles (`aria-invalid`).
-   **Notificación de éxito**: al confirmar el pedido se muestra un *toast* reutilizable antes de vaciar el carrito.
-   **Contacto**: mapa interactivo (Leaflet) de la ubicación de la institución, con geocoding y coordenadas de respaldo.
-   **Diseño responsive**: navegación y layout adaptados a mobile y desktop, con una única hoja de estilos.
-   **Accesibilidad**: uso de `aria-modal`, `aria-label`, `aria-live`, `aria-invalid` y estructura semántica en los componentes.

---

## Enfoque del trabajo integrador

### Tecnologías utilizadas y su rol

| Tecnología          | Rol en el proyecto                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------- |
| HTML5 + CSS3 + JS   | Única base tecnológica: estructura, estilos y toda la lógica corren en el navegador tal cual |
| Dragon Ball API     | Única fuente de datos del catálogo (REST, JSON), consumida de forma asíncrona con `fetch`    |
| `localStorage`      | Persistencia de estado del usuario: carrito de compras y vistos recientemente                |
| Leaflet + Nominatim | Mapa interactivo de la página "Contacto" (geocoding con coordenadas de respaldo)       |
| Google Fonts        | Tipografías Rajdhani (display) y Outfit (texto) vía `<link>`                                  |
| Custom Events       | Comunicación desacoplada entre componentes (`cart:updated`, `order:checkout`)                |

### Relación con los requisitos funcionales

| Requisito funcional                                   | Tecnología que lo resuelve                                                          |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Explorar catálogo con filtros y paginación            | `fetch` + `URLSearchParams` (query a la API) + normalización de respuestas en `api.js` |
| Ver ficha detallada y ediciones especiales            | `details.html` + `api.js` (`fetchProductById`) + `Card`                             |
| Carrito persistente y vistos recientemente            | `localStorage` (`local-storage-util`, `recently-viewed-util`)                        |
| Confirmar pedido con datos de envío validados         | Motor declarativo `FormValidator` + reglas en `order-form-rules.js`                  |                                                |
| Ubicación institucional                               | Leaflet + geocoding de Nominatim (`apiLeaflet.js`)                                  |
| Diseño adaptable a mobile y desktop                   | CSS puro: variables, Flexbox/Grid y `@media` queries                                |
| Accesibilidad (modal, errores, notificaciones)        | `aria-modal`, `aria-invalid`, `aria-live`, `aria-label`                             |

### Framework y enfoque elegido

No se utilizó framework de frontend ni bundler: el proyecto se resolvió con JavaScript vanilla a propósito, priorizando el dominio de los conceptos base del trabajo integrador (manipulación del DOM, asincronía y manejo de estado en el navegador) antes que apoyarse en abstracciones de terceros.

Para mantener el orden sin framework, se replicó  un enfoque basados en componetes: objetos con una API común (`render`/`bindEvents`) que se auto-montan en puntos del DOM (`#site-header`, `#site-nav`, `#site-modal`, etc.) y se comunican por `CustomEvent`, de modo que el carrito, el modal de pedido y las notificaciones no se acoplan entre sí. Este enfoque imita la estructura de componentes de un framework moderno, con el objetivo de aumentar su comprension a futuro.
