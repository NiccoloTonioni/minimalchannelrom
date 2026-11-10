document.addEventListener('DOMContentLoaded', function () {

  // ---------------------------------------------------------------------
  // Mobile navbar burger
  // ---------------------------------------------------------------------
  document.querySelectorAll('.navbar-burger').forEach(function (burger) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      document.querySelectorAll('.navbar-menu').forEach(function (m) { m.classList.toggle('is-active'); });
    });
  });

  // ---------------------------------------------------------------------
  // Keep side-by-side videos (class "sync-video") in lockstep
  // ---------------------------------------------------------------------
  var videos = Array.prototype.slice.call(document.querySelectorAll('video.sync-video'));
  if (videos.length > 1) {
    var leader = videos[0];
    setInterval(function () {
      videos.slice(1).forEach(function (v) {
        if (Math.abs(v.currentTime - leader.currentTime) > 0.1) { v.currentTime = leader.currentTime; }
      });
    }, 500);
  }

  // ---------------------------------------------------------------------
  // Compression comparison slider (DNS vs selected model)
  // ---------------------------------------------------------------------
  var container = document.getElementById('compression-compare');
  if (!container) { return; }

  var slider = container.querySelector('.comparison-slider');
  var recon = container.querySelector('.reconstruction');
  var label = document.getElementById('compare-label');
  var buttons = document.querySelectorAll('.case-btn[data-model]');

  var models = {
    vaegan: { src: './static/images/compression/vaegan_d4.png', label: 'β-VAE-GAN (d<sub>ζ</sub> = 4)' },
    vae:    { src: './static/images/compression/vae_d4.png',    label: 'β-VAE (d<sub>ζ</sub> = 4)' },
    pod:    { src: './static/images/compression/pod_d4.png',    label: 'POD (4 modes)' }
  };

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var m = models[btn.dataset.model];
      recon.style.opacity = '0';
      setTimeout(function () {
        recon.src = m.src;
        label.innerHTML = m.label;
        recon.style.opacity = '1';
      }, 150);
    });
  });

  var dragging = false;
  function setPosition(clientX) {
    var rect = container.getBoundingClientRect();
    var pct = Math.max(0, Math.min(100, (clientX - rect.left) / rect.width * 100));
    slider.style.left = pct + '%';
    recon.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
  }

  container.addEventListener('pointerdown', function (e) {
    dragging = true;
    setPosition(e.clientX);
    e.preventDefault();
  });
  document.addEventListener('pointermove', function (e) { if (dragging) { setPosition(e.clientX); } });
  document.addEventListener('pointerup', function () { dragging = false; });
});
