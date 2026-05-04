# AgentHub — Frontend Specs

## 1. Resumen

AgentHub es una una plataforma SaaS donde las empresas pueden alquilar agentes de IA que pueden equiparse con distintas skills y desplegarse para tareas de negocio específicas.

---

## 2. Objetivo

Eres un frontend freelance. Tu primer entregable es un prototipo HTML completamente diseñado del panel de administración — algo que el equipo pueda revisar, validar y entregar a los desarrolladores de backend más adelante.

---

## 3. Stack y restricciones

- Html semántico
- Tailwind via CDN
- Js vanilla
- Sin frameworks
- Sin backend

---

## 4. Secciones

El panel debe incluir las siguientes seis secciones, accesibles desde una navegación lateral persistente. Un toggle en la barra superior debe permitir cambiar toda la interfaz entre modo claro y modo oscuro usando las utilidades dark: de Tailwind.

### 4.1 Dashboard

1. Cuatro tarjetas de métricas organizadas en una cuadrícula responsive (4 columnas en desktop, 2 en tablet, 1 en móvil), cada una contiene un icono, una etiqueta descriptiva y un valor numérico hardcodeado correspondiente a: ingresos mensuales, pérdidas por descuentos, agentes activos y agentes fallando.

2. Las tarjetas de métricas utilizan estilos visuales diferenciados por tipo de dato (colores de acento distintos), incluyen padding interno, bordes redondeados y una sombra sutil (shadow) para elevarlas del fondo; los valores deben tener mayor jerarquía visual que las etiquetas.

3. Debajo de las tarjetas, se muestra un contenedor de ancho completo que actúa como placeholder del gráfico, con una altura fija, borde discontinuo (dashed), fondo neutro y un texto centrado indicando "Weekly Activity Chart".

4. El layout del dashboard mantiene separación consistente entre elementos (gap uniforme), y las tarjetas deben adaptarse fluidamente al ancho de pantalla sin romper la alineación.

5. El contenedor del gráfico no tiene funcionalidad real, pero debe comportarse como un bloque visual independiente claramente distinguible del resto del contenido.

### 4.2 Gestión de Usuarios

1. Una tabla de ancho completo lista todos los usuarios registrados, con columnas para nombre, email, plan y estado, además de una columna final de acciones; la tabla incluye cabecera diferenciada, filas con hover y separación visual clara entre registros.

2. Cada fila incluye un botón de acciones representado por un icono "⋮" que abre un dropdown contextual alineado al botón; el dropdown contiene al menos dos opciones: "Ver detalle" y "Eliminar", y se cierra automáticamente al hacer clic fuera.

3. La opción "Ver detalle" abre un modal overlay centrado que muestra la información completa del usuario (nombre, email, plan, estado y cualquier dato adicional), con fondo oscurecido (backdrop) que bloquea la interacción con el resto de la interfaz.

4. El modal incluye un botón de cierre visible (por ejemplo, una "X" en la esquina superior) y también debe cerrarse al hacer clic sobre el backdrop fuera del contenido.

5. La opción "Eliminar" no requiere lógica real, pero debe estar presente en el dropdown como acción visible y diferenciada (puede usar color de advertencia para indicar acción destructiva).

6. Los estados de usuario en la tabla se representan mediante badges visuales (por ejemplo: activo, inactivo), utilizando colores consistentes para facilitar la lectura rápida.

### 4.3 Gestión de Agentes

1. Una tabla o lista de ancho completo muestra todos los agentes registrados, con columnas para nombre del agente, propietario, estado y una sección de skills colapsadas por defecto, además de una columna de acciones; las filas incluyen hover y separación visual clara.

2. La columna de estado utiliza badges visuales para representar "activo", "inactivo" o "fallando", usando colores diferenciados (verde, gris, rojo) para facilitar la identificación rápida.

3. Cada agente incluye un control expandible (por ejemplo, un icono de flecha) que permite mostrar u ocultar la lista de skills asociadas; las skills están ocultas por defecto y se revelan con una transición suave (animación de altura o fade).

4. La lista de skills expandida aparece debajo o dentro de la fila del agente, mostrando cada skill como elemento visual (texto o badge), con separación clara entre ellas.

5. Cada fila incluye un botón de acciones (icono "⋮") que abre un dropdown contextual con al menos dos opciones: "Configurar" y "Eliminar"; el dropdown se posiciona relativo al botón y se cierra al hacer clic fuera.

6. La opción "Configurar" abre un modal overlay centrado que muestra el system prompt del agente en un contenedor de texto (por ejemplo, bloque tipo textarea o preformateado), permitiendo visualizar su configuración.

7. El modal de configuración incluye un botón de cierre visible y también se puede cerrar haciendo clic en el backdrop, bloqueando la interacción con el resto de la interfaz mientras está abierto.

8. La opción "Eliminar" está presente como acción visible en el dropdown y puede estar estilizada como acción destructiva, sin necesidad de funcionalidad real.

### 4.4 Skills

1. Una lista o tabla de ancho completo muestra el catálogo de skills disponibles, donde cada entrada incluye nombre de la skill, una descripción breve y un indicador numérico de cuántos agentes la tienen habilitada; las filas o tarjetas tienen separación clara y hover visual.

2. En la parte superior de la sección se incluye un bloque de texto explicativo que describe qué es una "skill" en el contexto de AgentHub; este texto debe estar visualmente diferenciado (por ejemplo, fondo suave o caja destacada) para separarlo del listado.

3. Cada skill incluye un botón de acciones (icono "⋮") que abre un dropdown contextual con al menos dos opciones: "Ver detalle" y "Eliminar"; el dropdown se posiciona junto al botón y se cierra al hacer clic fuera.

4. La opción "Ver detalle" puede abrir un modal overlay centrado que muestra información ampliada de la skill (nombre, descripción completa y uso), utilizando un backdrop que bloquea el resto de la interfaz.

5. El modal incluye un botón de cierre visible y también debe cerrarse al hacer clic sobre el backdrop.

6. La opción "Eliminar" aparece como acción visible dentro del dropdown y puede estar estilizada como acción destructiva (color de advertencia), sin necesidad de lógica funcional.

### 4.5 Contrataciones de Agentes

1. Una tabla de ancho completo muestra todos los contratos (activos y pasados), con columnas para cliente, agente alquilado, skills contratadas, fechas del contrato y el importe total pagado, además de una columna de acciones; la tabla incluye cabecera diferenciada y filas con hover.

2. La columna de skills muestra un resumen compacto (por ejemplo, lista corta o badges), evitando ocupar demasiado espacio en la fila, manteniendo la legibilidad.

3. Cada fila incluye un botón de acciones (icono "⋮") que abre un dropdown contextual con al menos la opción "Ver detalle", alineado al botón y que se cierra al hacer clic fuera.

4. La opción "Ver detalle" abre un modal overlay centrado con un desglose completo del contrato, incluyendo cliente, agente, fechas y precio total claramente destacados.

5. Dentro del modal, se incluye una lista detallada de las skills contratadas, donde cada skill muestra su nombre y precio individual, organizada como lista o subtabla con separación visual clara.

6. El modal utiliza un backdrop oscuro que bloquea la interacción con el resto de la interfaz y puede cerrarse mediante un botón visible (por ejemplo, "X") o haciendo clic fuera del contenido.

7. El diseño del modal debe diferenciar claramente el resumen del contrato (parte superior) del desglose de skills (parte inferior), utilizando jerarquía visual (títulos, divisores o spacing).

### 4.6 Log de Errores

1. Una tabla de ancho completo muestra el registro de errores de ejecución de los agentes, con columnas para timestamp, nombre del agente, tipo de error, descripción breve y acciones; la tabla incluye cabecera diferenciada y filas con hover para facilitar la lectura.

2. La columna de tipo de error utiliza badges visuales para representar la gravedad o categoría del error (por ejemplo: crítico, warning, info), aplicando colores diferenciados como rojo, amarillo y azul para permitir identificación rápida.

3. Cada fila incluye un botón de acciones (icono "⋮") que abre un dropdown contextual con al menos dos opciones: "Ver detalle" y "Marcar como resuelto"; el dropdown se posiciona relativo al botón y se cierra al hacer clic fuera.

4. La opción "Ver detalle" abre un modal overlay centrado que muestra la traza completa del error, incluyendo información extendida como stack trace o mensaje completo, dentro de un contenedor tipo preformateado o bloque de código.

5. El modal incluye un botón de cierre visible y también debe poder cerrarse al hacer clic en el backdrop oscuro que bloquea la interacción con el resto de la interfaz.

6. La opción "Marcar como resuelto" debe estar presente como acción en el dropdown y puede tener un estilo visual que indique acción secundaria o de estado.

7. La tabla debe mantener una jerarquía visual clara entre timestamp, agente y descripción, asegurando que el usuario pueda escanear rápidamente los errores más recientes o críticos.


---

## 5. Componentes Reutilizables

1. Sidebar

Navegación lateral fija que permite acceder a todas las secciones del panel. Incluye enlaces a Dashboard, Usuarios, Agentes, Skills, Contrataciones y Log de errores, con estado activo resaltado.

2. Metric Card

Tarjeta utilizada en el dashboard para mostrar métricas clave. Contiene un título, un valor numérico y opcionalmente un icono. Se usa para representar KPIs del sistema.

3. Dropdown de acciones

Menú contextual activado por un botón “⋮”. Agrupa acciones como ver detalle, eliminar o configurar. Se cierra al hacer clic fuera del componente.

4. Modal

Ventana superpuesta centrada usada para mostrar información detallada. Incluye backdrop oscuro y puede cerrarse con botón o haciendo clic fuera del contenido.

5. Badge

Etiqueta visual pequeña usada para representar estados o categorías (por ejemplo: activo, inactivo, fallando, crítico). Se diferencia por color.

6. Lista de skills colapsable

Componente expandible dentro de la gestión de agentes que muestra u oculta las skills asociadas. Por defecto está colapsado y se expande con interacción.

7. Toggle de modo oscuro

Interruptor en la barra superior que activa o desactiva el modo oscuro aplicando la clase dark en el documento.

---

## 6. Criterios de Aceptación

1. El sidebar debe permitir la navegación entre las seis secciones del panel y mantener visible el estado activo de la sección actual en todo momento.

2. El toggle de modo oscuro debe cambiar toda la interfaz a dark mode aplicando la clase `dark` en el elemento raíz y afectar correctamente todos los componentes visibles.

3. Cada dropdown de acciones debe abrirse al hacer clic en el botón "⋮" correspondiente y cerrarse automáticamente al hacer clic fuera del menú.

4. Todos los modales del sistema deben abrirse correctamente al seleccionar una acción correspondiente y bloquear la interacción con el resto de la interfaz mediante un backdrop; además deben poder cerrarse tanto con un botón de cierre como haciendo clic fuera del contenido.

5. La lista de skills colapsable en la sección de agentes debe estar oculta por defecto y expandirse con una transición visual suave al interactuar con el control de expansión.

6. Todas las tablas del sistema deben mostrar correctamente datos hardcodeados con estructura consistente, incluyendo cabeceras claras, filas diferenciadas y una columna de acciones funcional en términos de UI.

7. Los badges de estado deben reflejar visualmente los distintos estados (activo, inactivo, fallando, crítico) mediante colores consistentes en todas las secciones donde se utilicen.

8. El prototipo debe ser completamente funcional a nivel de interacción UI (dropdowns, modales, colapsables y toggle de tema), sin requerir conexión a backend o datos dinámicos.
