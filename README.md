# app-dragon-ball


https://maximilianoortiz.github.io/app-dragon-ball/#
# Capsule Store

Aplicación web móvil (PWA) que simula una tienda de figuras coleccionables de Dragon Ball, desarrollada como Trabajo Integrador — Módulo 1 de Aplicaciones Móviles.

Cada personaje de la API se muestra como una figura de colección, y sus transformaciones (cuando las tiene) se presentan como ediciones especiales de esa misma figura. El "Ki" de cada personaje se traduce en el precio de venta.

🔗 **Demo:** https://maximilianoortiz.github.io/app-dragon-ball/

## Integrantes

| Nombre | Rol |
|---|---|
| Desarrollador 1 | Frontend Developer |
| Desarrollador 2 | UI/UX Designer |

## Tecnologías

- HTML5 semántico
- CSS3 (mobile-first, sin frameworks de UI)
- JavaScript ES6+ (Vanilla JS)
- [Dragon Ball API](https://web.dragonball-api.com) — datos de personajes, transformaciones y planetas
- [Leaflet](https://leafletjs.com/) + [Nominatim/OpenStreetMap](https://nominatim.openstreetmap.org/) — mapa y geocodificación
- `localStorage` — persistencia de carrito e historial

## Vistas de la aplicación

| Vista | Archivo | Descripción |
|---|---|---|
| Home | `index.html` | Presentación de la app, destacados y accesos rápidos |
| Búsqueda | `search.html` | Filtros y listado de resultados |
| Detalle | `details.html` | Información completa de una figura y sus ediciones especiales |
| Carrito | `cart.html` | Ítems seleccionados por el usuario (ver nota de diseño) |
| Historial | `history.html` | Últimos personajes visitados |
| Sobre nosotros | `aboutMe.html` | Datos del equipo y ubicación en el mapa (ver nota de diseño) |

### Nota de diseño: Carrito en lugar de Lista de deseos

Dado que la aplicación simula una **tienda**, se optó por reemplazar la "Lista de deseos" genérica por un **carrito de compras funcional** (agregar, quitar, modificar cantidad, ver subtotal/total y confirmar pedido). Ambos resuelven el mismo problema conceptual pedido por la consigna — una colección persistente de ítems seleccionados por el usuario, guardada en `localStorage` y accesible desde la navegación principal — pero el carrito es la interpretación más coherente con la temática de "tienda de figuras" elegida por el grupo.

### Nota de diseño: "Sobre nosotros" en lugar de "Contacto"

La página `aboutMe.html` cumple la misma función que la vista de "Contacto" pedida por la consigna: presenta los datos del equipo de desarrollo (nombre, rol, contacto) y un mapa con la ubicación de la "oficina", implementado con Leaflet + geocodificación vía Nominatim.

## Filtros de búsqueda

La búsqueda permite combinar 4 filtros (la consigna pide un mínimo de 3):

- **Nombre**
- **Género** (Male / Female / Unknown)
- **Raza** (Human, Saiyan, Namekian, Majin, Frieza Race, Android, Jiren Race, God, Angel, Evil, Nucleico, Nucleico benigno, Unknown)
- **Afiliación** (Z Fighter, Red Ribbon Army, Namekian Warrior, Freelancer, Army of Frieza, Pride Troopers, Assistant of Vermoud, God, Assistant of Beerus, Villain, Other)

Los resultados se muestran de a 10 por página, con paginación Anterior/Siguiente.

## Historial de vistos recientemente

Cada vez que se accede al detalle de un personaje, este se registra automáticamente en el historial (orden cronológico inverso, últimos 10 ítems, sin duplicados), persistido en `localStorage`.

## Diseño responsivo

Enfoque mobile-first con los siguientes breakpoints:

| Contexto | Ancho | Resultados por fila |
|---|---|---|
| Móvil (portrait) | hasta 480px | 2 |
| Móvil (landscape) / Tablet | 481px – 1023px | 3 |
| Desktop | 1024px en adelante | 4 |

## Estructura del proyecto

```
├── index.html
├── search.html
├── details.html
├── cart.html
├── history.html
├── aboutMe.html
├── css/
│   └── styles.css
├── js/
│   ├── api/
│   │   ├── api.js            # Consumo de Dragon Ball API
│   │   └── apiLeaflet.js      # Geocodificación y mapa
│   ├── components/
│   │   ├── header.js
│   │   ├── footer.js
│   │   ├── bottom-nav.js
│   │   ├── card.js
│   │   ├── cart.js
│   │   ├── cart-header.js
│   │   ├── cart-item.js
│   │   ├── order-summary.js
│   │   └── quantity-selector.js
│   ├── pages/
│   │   ├── search.js
│   │   ├── details.js
│   │   ├── history.js
│   │   └── aboutMe.js
│   ├── utils/
│   │   ├── local-storage-util.js
│   │   ├── recently-viewed-util.js
│   │   └── router.js
│   └── main.js
└── assets/
    └── images/
```

## Cómo ejecutar el proyecto

No requiere instalación de dependencias ni build. Alcanza con:

1. Clonar el repositorio.
2. Abrir `index.html` con Live Server (extensión de VS Code) o cualquier servidor estático local.

> Nota: no se puede abrir directamente con `file://` porque algunas funcionalidades (como Fetch API) requieren ser servidas por HTTP.

## Estado del checklist de requerimientos

- [x] RF1 — Vista Home
- [x] RF2 — Búsqueda con filtros (4 filtros implementados)
- [x] RF3 — Visualización de resultados con paginación
- [x] RF4 — Vista de detalle
- [x] RF5 — Persistencia de selección del usuario (carrito, ver nota de diseño)
- [x] RF6 — Historial de ítems visitados
- [x] RF7 — Página de datos del equipo + mapa (ver nota de diseño)
- [x] RF8 — Diseño responsivo (mobile / tablet / desktop)
- [ ] PLUS — Progressive Web App (en desarrollo)

## Licencia

Proyecto académico desarrollado con fines educativos. Los datos de personajes son propiedad de sus respectivos titulares (Dragon Ball / Akira Toriyama / Toei Animation) y se consumen a través de [Dragon Ball API](https://web.dragonball-api.com) con fines exclusivamente ilustrativos.
