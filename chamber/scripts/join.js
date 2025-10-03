  // Set timestamp on form load
  document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("timestamp").value = new Date().toISOString();
  });

  // Modal functionality
  document.querySelectorAll('.info-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
            document.getElementById(modalId).setAttribute('aria-hidden', 'false');
            document.getElementById(modalId).focus();
        });
  });
  document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function () {
            this.closest('.modal').style.display = 'none';
            this.closest('.modal').setAttribute('aria-hidden', 'true');
        });
  });
  // Close modal on Escape key
  document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('keydown', function (e) {
            if (e.key === "Escape") {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
            }
        });
  });
function getQueryParams() {
    const params = {};
    window.location.search.replace(/^\?/, '').split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        if (key) params[key] = decodeURIComponent(value || '');
    });
    return params;
}
const params = getQueryParams();
document.getElementById('firstName').textContent = params.firstName || '';
document.getElementById('lastName').textContent = params.lastName || '';
document.getElementById('email').textContent = params.email || '';
document.getElementById('mobile').textContent = params.mobile || '';
document.getElementById('organization').textContent = params.organization || '';
document.getElementById('timestamp').textContent = params.timestamp ? new Date(params.timestamp).toLocaleString() : '';