# 🛒 Boxly - E-commerce en React

Este es un proyecto de e-commerce hecho con **React**, que permite a los usuarios:

- Ver un listado de productos
- Filtrar productos por categoría
- Agregar o quitar productos del carrito
- Finalizar la compra generando una orden en Firebase

---

## 🚀 Tecnologías utilizadas

| Librería/Framework | Versión  | Descripción | Documentación |
|--------------------|----------|-------------|----------------|
| React              | ^19.0.0  | Biblioteca principal para construir la UI | [React Docs](https://reactjs.org/) |
| React DOM          | ^19.0.0  | Renderiza componentes React en el DOM | [React DOM Docs](https://reactjs.org/docs/react-dom.html) |
| React Router       | ^7.4.1   | Navegación entre páginas | [React Router Docs](https://reactrouter.com/en/main) |
| React Router DOM   | ^7.5.0   | Enrutamiento web con React Router | [React Router DOM Docs](https://reactrouter.com/en/main/start/overview) |
| Firebase           | ^11.6.0  | Backend para base de datos y autenticación | [Firebase Docs](https://firebase.google.com/docs) |
| Bootstrap          | ^5.3.3   | Framework de estilos responsivos | [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/) |
| React Bootstrap    | ^2.10.9  | Componentes de Bootstrap como React components | [React Bootstrap Docs](https://react-bootstrap.github.io/) |
| React Icons        | ^5.5.0   | Colección de íconos populares para React | [React Icons Docs](https://react-icons.github.io/react-icons/) |

---

## 📁 Estructura del Proyecto

src/ │ ├── components/ │ ├── Navbar.jsx │ ├── ItemListContainer.jsx │ ├── ItemDetailContainer.jsx │ ├── Item.jsx │ ├── CartPage.jsx │ └── Checkout.jsx │ ├── context/ │ └── CartContext.jsx │ ├── firebase/ │ ├── config.js │ └── db.js │ ├── styles/ │ └── *.module.css │ └── App.jsx


---

## 🔧 Funcionalidades principales

- 📦 **Listado de productos:** Todos los productos disponibles se muestran con imagen, descripción y precio.
- 📂 **Filtrado por categoría:** Permite visualizar solo los productos de una categoría.
- 🛒 **Carrito de compras:** Se pueden agregar, quitar y modificar cantidades de productos en el carrito.
- ✅ **Finalizar compra:** Al completar el formulario de compra se genera una orden en Firebase Firestore.

---

## 📝 Cómo iniciar el proyecto

1. Cloná el repositorio
2. Ejecutá:

```bash
npm install
npm run dev
