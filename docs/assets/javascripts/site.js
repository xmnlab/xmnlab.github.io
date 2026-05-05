
// Footer year
window.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

// Web3Forms AJAX submit with inline feedback
    (function () {
      const form = document.getElementById('contact-form');
      const statusBox = document.getElementById('form-status');
      const submitBtn = document.getElementById('contact-submit');

      if (!form) return;

      form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Update subject to include the sender's name (nice for your inbox)
        const name = (document.getElementById('name')?.value || '').trim();
        const subjectInput = form.querySelector('input[name="subject"]');
        if (subjectInput) subjectInput.value = 'New inquiry from ' + (name || 'website');

        // UI: disable + show progress
        const originalHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending…';

        // Clear old status
        statusBox.innerHTML = '';

        try {
          const formData = new FormData(form);
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
          const data = await res.json();

          if (res.ok) {
            statusBox.innerHTML = '<div class="alert alert-success mb-0">Thanks! I received your message and will reply shortly.</div>';
            form.reset();
          } else {
            throw new Error(data.message || 'Submission failed.');
          }
        } catch (err) {
          statusBox.innerHTML =
            '<div class="alert alert-danger mb-0">Sorry, the form could not be sent right now. Please email me at ' +
            '<a href="mailto:me@ivanogasawara.com">me@ivanogasawara.com</a>.</div>';
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHTML;
        }
      });
    })();

// ScrollSpy on the whole page
    window.addEventListener('load', function () {
      // Ensure the nav has id="mainNav"
      if (!document.querySelector('#mainNav')) return;

      // Init or reuse existing instance
      const existing = bootstrap.ScrollSpy.getInstance(document.body);
      const spy = existing || new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 80   // tweak if you later make the navbar sticky/taller
      });

      // Refresh once content/images are fully laid out
      setTimeout(() => spy.refresh(), 400);
    });
