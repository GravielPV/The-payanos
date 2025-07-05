function navigateToSection(section) {
            // Aquí puedes agregar la lógica para navegar a las diferentes secciones
            // Por ejemplo, redirigir a diferentes páginas o mostrar contenido dinámico
            alert(`Navegando a la sección: ${section.charAt(0).toUpperCase() + section.slice(1)}`);
            
            // Ejemplo de navegación (descomenta y modifica según tus necesidades):
            // window.location.href = `${section}.html`;
        }
  
        // Efecto de parallax suave en el header
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.header');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Animación de entrada para las tarjetas
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.menu-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });