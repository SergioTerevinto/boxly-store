import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
    const notificationCount = 2;

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <FaShoppingCart size={30} />
            {notificationCount > 0 && (
                <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '5px',
                    fontSize: '12px',
                }}>
                    {notificationCount}
                </span>
            )}
        </div>
    );
}

export default CartWidget;
