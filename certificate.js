document.addEventListener("DOMContentLoaded", function () {
    const modalHTML = `
      <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
              <img id="modalImage" src="" alt="Preview" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    `;
  
  
    document.body.insertAdjacentHTML("beforeend", modalHTML);
  
    const images = document.querySelectorAll("#cer img");
    images.forEach((image) => {
      image.addEventListener("click", function () {
        const modalImage = document.getElementById("modalImage");
        modalImage.src = this.src; 
        const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
        imageModal.show();
      });
    });
  });
  