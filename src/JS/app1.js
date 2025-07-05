
        // Funcionalidad para cambiar pestañas
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remover clase active de todas las pestañas
                document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                // Agregar clase active a la pestaña clickeada
                this.classList.add('active');
                
                // Mostrar el contenido correspondiente
                const targetTab = this.getAttribute('data-tab');
                document.getElementById(targetTab).classList.add('active');
            });
        });

        // Funcionalidad para el botón de retroceso
        document.querySelector('.back-btn').addEventListener('click', function() {
            window.history.back();
        });

        // Agregar animación de clic a los elementos del menú
        document.querySelectorAll('.menu-item, .menu-card').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            });
        });
   