const toastElList = document.querySelectorAll('.toast');
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl));

showToast = () => {
    toastList[0].show();
}

// tooltip Code

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


GoToProductInfo = (ProductId) => {
    if (ProductId == "product-1") {
        window.location.href = "product.html";
    } else if (ProductId == "product-2") {
        window.location.href = "product-2.html";
    } else if (ProductId == "product-3") {
        window.location.href = "product-3.html";
    } else if (ProductId == "product-4") {
        window.location.href = "product-4.html";
    } else if (ProductId == "product-5") {
        window.location.href = "product-5.html";
    } else if (ProductId == "product-6") {
        window.location.href = "product-6.html";
    }

}

// form validation

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
