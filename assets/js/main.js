  function loadWorld(url, btn) {
            const iframe = document.getElementById('viewer');
            iframe.src = url;

            // Actualizar estado visual de los botones
            document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }