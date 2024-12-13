# Angular Admin Panel - Frontend

Este proyecto es un panel administrativo desarrollado con Angular 10, diseñado para gestionar y visualizar información relevante de una manera interactiva y eficiente. Incluye un menú lateral con múltiples secciones, como Dashboard, Customers, Messages, Help, Settings y Security.

## Tecnologías Utilizadas

- **Angular CLI 10.2.0**: Framework de frontend para desarrollar aplicaciones web dinámicas.
- **TypeScript**: Lenguaje de programación para escribir código limpio y mantenible.
- **HTML5 y CSS3**: Tecnologías para estructurar y estilizar la interfaz de usuario.
- **Ionic Icons**: Conjunto de íconos para mejorar la experiencia del usuario.
- **Node.js 10.18.0**: Entorno de ejecución necesario para ejecutar el proyecto.

## Características Principales

- Menú lateral interactivo que permite ocultar y mostrar opciones.
- Dashboard con tarjetas para mostrar métricas clave como ventas, comentarios y ganancias.
- Sección para visualizar pedidos recientes y clientes recientes.
- Diseño responsivo compatible con dispositivos de escritorio y móviles.

## Requisitos Previos

1. **Node.js** (versión 10.18.0 o superior) y **npm** instalados.
2. Navegador web moderno (como Google Chrome o Firefox).

## Instrucciones de Uso

1. Clona el repositorio del proyecto:
   ```bash
   git clone https://github.com/tuusuario/angular-admin-panel.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd angular-admin-panel
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Ejecuta el servidor de desarrollo:
   ```bash
   ng serve
   ```

5. Abre tu navegador y accede a:
   ```
   http://localhost:4200
   ```

## Estructura del Proyecto

- **src/app**:
  - **components**: Contiene los componentes principales del proyecto.
  - **services**: Servicios para manejar la lógica y comunicación.
  - **assets**: Incluye imágenes y archivos estáticos utilizados en el proyecto.

## Configuración Adicional

### Carga de Imágenes

Las imágenes se deben colocar en la carpeta `src/assets/imgs`. Asegúrate de que la ruta utilizada en el código coincide con la estructura de esta carpeta. Ejemplo:

```html
<img src="assets/imgs/customer01.jpg" alt="Customer">
```

### Iconos de Ionic

Los íconos son proporcionados por Ionic Icons. Asegúrate de tener instalado el paquete:

```bash
npm install ionicons
```

Luego, importa Ionic en los archivos necesarios.

## Problemas Conocidos

1. **El menú lateral no se oculta/muestra correctamente:**
   Verifica que el código para la funcionalidad del menú está implementado correctamente en el archivo `dashboard.component.ts`.

2. **Las imágenes no se cargan:**
   Asegúrate de que las imágenes estén en la carpeta `src/assets/imgs` y que las rutas sean relativas a esta ubicación.


## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un *issue* o envía un *pull request* con mejoras y correcciones.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para preguntas o comentarios, contáctame en [freddyuj0@gmail.com].

