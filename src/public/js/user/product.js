async function addProductToCart(productId, cartId) {
    try {
        const quantity = 1
        const response = await fetch(`/api/carts/${cartId}/products/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        });
        const data = await response.json();
        if (data.status === 'success') {
            alert('Producto agregado al carrito');
        }
    } catch (error) {
        alert(error);
    }
}