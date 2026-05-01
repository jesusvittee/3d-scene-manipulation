# Manipulación de Escenarios 3D - Three.js

Este proyecto es una aplicación web interactiva desarrollada para la materia de **Graficación**. Consiste en un Dashboard centralizado que permite explorar diversas implementaciones de cámaras, controles y geometrías utilizando la librería **Three.js**.

## 👤 Información del Autor
* **Nombre:** Nicolás Vite Jesús
* **Institución:** Instituto Tecnológico de Pachuca (TECNM)
* **Carrera:** Ingeniería en Sistemas Computacionales
* **Materia:** Graficación
* **Fecha:** Abril 2026

---

## 🚀 Descripción del Proyecto

El objetivo principal es demostrar el uso de **WebGL** a través de Three.js para la manipulación de entornos tridimensionales. La aplicación utiliza una arquitectura de **Single Page Application (SPA)** mediante el uso de `iframes` dinámicos. Esto permite cargar múltiples proyectos independientes dentro de un contenedor principal sin recargar la página y manteniendo la integridad de los recursos `.js` y `.css` de cada escena.

### Escenas Incluidas:
1.  **Geometry - Minecraft:** Replicación de un entorno voxelizado con controles de navegación simples.
2.  **Controls - Map:** Implementación de navegación estilo mapa (panorámica y zoom).
3.  **Controls - Orbit:** Control de cámara orbital alrededor de un punto central.
4.  **Controls - PointerLock:** Navegación en primera persona (FPS) con bloqueo de puntero y físicas de salto/colisión.
5.  **Controls - Transform:** Herramientas de manipulación de objetos (traslación, rotación y escala).

---

## 🛠️ Tecnologías Utilizadas

* **Three.js:** Motor principal para renderizado 3D en la web.
* **HTML5 & CSS3:** Estructura y diseño de la interfaz de usuario.
* **Bootstrap 5:** Framework de CSS para un diseño responsivo y profesional.
* **JavaScript (ES6+):** Lógica de programación, uso de `importmaps` y manipulación del DOM.
* **Google Fonts & Icons:** Tipografía *Inter* y elementos visuales para la navegación.

---

### 🔧 Instalación y Uso
Para ejecutar este proyecto localmente, se requiere un servidor local debido al uso de módulos de JavaScript y carga de recursos externos:

Clona o descarga este repositorio.

Abre la carpeta raíz con Visual Studio Code.

Utiliza la extensión Live Server (o cualquier servidor HTTP) para abrir el archivo index.html.

Navega por las diferentes demos utilizando el menú lateral.

## 💡 Notas de Implementación
Aislamiento de Recursos: Cada demo funciona en su propio contexto, lo que evita conflictos entre los archivos main.js de cada proyecto.

Optimización de Iframe: Se implementó una lógica de redimensionamiento dinámico en el main.js de cada demo para asegurar que el canvas 3D siempre ocupe el 100% del espacio disponible en el visualizador, eliminando barras de desplazamiento innecesarias.