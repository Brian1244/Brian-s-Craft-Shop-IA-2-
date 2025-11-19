document.addEventListener("DOMContentLoaded", () => {
    const paymentField = document.getElementById("payment");

    
    let cartSummary = document.createElement("div");
    cartSummary.id = "cart-summary";
    paymentField.parentElement.insertBefore(cartSummary, paymentField);

    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartSummary.innerHTML = "<p>Your cart is empty.</p>";
        paymentField.value = "$0.00";
    } else {
        let total = 0;

        
        let summaryHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
        `;

        cart.forEach(item => {
            let subtotal = item.price * item.qty;
            total += subtotal;
            summaryHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.qty}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${subtotal.toFixed(2)}</td>
                </tr>
            `;
        });

        summaryHTML += `</tbody></table>`;
        cartSummary.innerHTML = summaryHTML;

        
        paymentField.value = `$${total.toFixed(2)}`;
    }

    
    document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        alert("Order confirmed. Thank you for your purchase!");

        window.location.href = "invoice.html";
    });
});
