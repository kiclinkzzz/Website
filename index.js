// Display the modal
var modal = document.getElementById('id01');

// Click "X" and Close
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}