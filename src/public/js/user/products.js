async function logout() {
    try {
        const response = await fetch('/api/sessions/logout', { method: 'POST' });
        const data = await response.json();
        alert(data.message);
        if (data.status === 'success') {
            window.location.href = '/login';
        }
    } catch (error) {
        alert(error);
    }
}

// async function addProductToCart(productId, cartId) {
//     try {
//         const quantity = 1
//         const response = await fetch(`/api/carts/${cartId}/products/${productId}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ quantity })
//         });
//         const data = await response.json();
//         if (data.status === 'success') {
//             alert('Producto agregado al carrito');
//         }
//     } catch (error) {
//         console.log(error)
//         alert(error);
//     }
// }