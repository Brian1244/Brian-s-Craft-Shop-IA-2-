document.addEventListener("DOMContentLoaded", () => {
    
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Cart data from localStorage:", cart); 

    const invoiceDate = document.getElementById("invoice-date");
    const tbody = document.querySelector("#invoice-table tbody");
    const subtotalField = document.getElementById("subtotal");
    const taxField = document.getElementById("tax");
    const totalField = document.getElementById("total");
    const printButton = document.getElementById("print-invoice");

    if (cart.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4">No items in the invoice.</td></tr>`;
        subtotalField.textContent = "";
        taxField.textContent = "";
        totalField.textContent = "";
        printButton.style.display = "none"; 
        return;
    }

    
    const today = new Date();
    invoiceDate.textContent = `Date: ${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;

    
    let subtotal = 0;
    cart.forEach(item => {
        const itemSubtotal = item.price * item.qty;
        subtotal += itemSubtotal;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${itemSubtotal.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });

    
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    
    subtotalField.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    taxField.textContent = `Tax (10%): $${tax.toFixed(2)}`;
    totalField.textContent = `Total: $${total.toFixed(2)}`;

    
    printButton.addEventListener("click", () => {
        window.print();
        localStorage.removeItem("cart"); 
    });
});
