document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get('id');

            fetch(`/products/${productId}`)
                .then(response => response.json())
                .then(product => {
                    const productdetailsDiv = document.getElementById('product-details');
                    productdetailsDiv.innerHTML = `
                        <h2>${product.name}</h2>
                        <img src="${product.imageUrl}" alt="${product.name}">
                        <p>Description: ${product.description}</p>
                        <p>Price: $${product.price}</p>
                        <!-- Add more product details as needed -->
                    `;
                })
                .catch(error => console.error('Error fetching product details:', error));
        });