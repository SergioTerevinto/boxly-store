import CartWidget from './CartWidget';  // Importamos el CartWidget

function Navbar() {
    return (
        <nav>
            <h1>BOXLY STORE</h1>
            
            {/* Categorías de productos */}
            <ul>
                <li>Bolsas compostables</li>
                <li>Rollos térmicos</li>
                <li>Bolsas para residuos</li>
                <li>Bandejas de espuma</li>
                <li>Bolsas en rollo</li>
            </ul>

            {/* CartWidget */}
            <CartWidget />
        </nav>
    );
}

export default Navbar;
