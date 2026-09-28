# Calendario de contenido e imágenes

Propuesta del 5 de septiembre de 2026. Ocho semanas desde el inicio de implementación; no son publicaciones programadas. Cada pieza parte de herramientas o productos públicos. El sitio mantiene inglés; los borradores de X siguen la voz conversacional de Ale en español, con máximo dos frases y sin hashtags.

El ritmo propuesto es dos publicaciones cortas por semana, apoyadas en páginas útiles. No hace falta producir artículos largos para cumplir una cuota.

| Semana | Pieza del sitio / trabajo central | Distribución | Evidencia visual |
|---|---|---|---|
| 1 | Perfil actualizado y página de iOS Architecture Skills | Presentación del enfoque; decisión concreta sobre alcance | Diagrama sencillo de los seis workflows, con una función por bloque. |
| 2 | Página de App Store Tools | Operaciones que agrupa; utilidad de revisar metadata antes de aplicar | Terminal con un ejemplo inocuo de ayuda o listado redactado. |
| 3 | Página de Screenshots iOS | Estado determinista; qué resuelve la CLI y qué aporta la app | Dos capturas de la misma pantalla con el mismo estado. |
| 4 | Cifro con texto consistente | Diseño de privacidad; ritual de revisión | Capturas existentes de registro y revisión de compras. |
| 5 | Ampliar `/work/` con un ejemplo publicable | Explicar problema → decisión → comprobación | Diagrama con datos ficticios claramente identificados si se necesita un ejemplo. |
| 6 | Guía de un flujo que use arquitectura + capturas | Enlazar la guía; compartir una decisión concreta | Estado de entrada y resultado de un ejemplo reproducible. |
| 7 | Pregunta frecuente surgida del uso de las herramientas | Responder una duda real; enlazar documentación actualizada | Ejemplo mínimo que ilustre la respuesta. |
| 8 | Revisar datos de descubrimiento y rendimiento | Compartir un aprendizaje que los datos permitan sostener | Tabla antes/después con periodos comparables, si hay muestra útil. |

## Textos completos: primeras cuatro semanas

Publicar solo cuando el enlace de la página correspondiente exista. Las etiquetas y enlaces siguientes indican el destino; no forman parte de un mensaje enviado.

### Semana 1 · Publicación 1

Cuando un agente cambia una app iOS, también está tomando decisiones de arquitectura; por eso separé los workflows de features, persistencia, plataforma, pruebas y revisión visual. Aquí está el toolkit que armé: [página de iOS Architecture Skills].

### Semana 1 · Publicación 2

Agregar una columna y construir una feature completa necesitan contextos distintos. Mis skills de iOS empiezan por separar esas dos tareas.

Destino: `/projects/ios-architect/`.

### Semana 2 · Publicación 1

Hice una CLI para tener en el mismo flujo los metadatos de App Store, la generación del IPA y la subida del build. Se llama appstore-tools y dejé el código abierto.

Destino: `/projects/appstore-tools/`.

### Semana 2 · Publicación 2

Una de las partes más útiles de appstore-tools es poder leer la ficha actual a un archivo, revisar los cambios y después aplicarlos. El contenido de un release también merece un diff.

Destino: `/projects/appstore-tools/`.

### Semana 3 · Publicación 1

Para repetir un screenshot de iOS necesito fijar la pantalla, los datos y el estado del simulador. screenshots-ios organiza ese recorrido desde un archivo de contexto.

Destino: `/projects/screenshots-ios/`.

### Semana 3 · Publicación 2

La CLI puede lanzar la app y capturar la pantalla, pero la app tiene que saber mostrar los mismos datos cada vez. Esa parte del contrato es la que hace útil la comparación.

Destino: `/projects/screenshots-ios/`.

### Semana 4 · Publicación 1

En Cifro el registro de gastos empieza sin crear una cuenta y la IA corre en el dispositivo. La sincronización es opcional y usa tu iCloud privado.

Destino: `/cifro/`.

### Semana 4 · Publicación 2

Cifro tiene una revisión de compras para marcar cuáles valieron la pena, cuáles eran necesarias y cuáles quieres revisar. Ese pequeño momento es el centro de la app.

Destino: `/cifro/`.

## Guiones detallados: semanas 5–8

**Semana 5:** escoger un ejemplo propio que pueda contarse públicamente; describir el trabajo inicial, una restricción real, la decisión técnica y cómo se verificó. Una publicación explica la decisión y enlaza `/work/`; la otra muestra un artefacto público. Si no hay material publicable, usar una herramienta propia en lugar de un caso de cliente.

**Semana 6:** documentar un ejemplo pequeño que conecte planificación de una feature con captura reproducible. Mostrar configuración y resultado, explicar qué se comprueba y enlazar las dos herramientas. Una publicación comparte el recorrido; la otra se concentra en un error real descubierto durante el ejemplo.

**Semana 7:** elegir una pregunta real de uso o una duda encontrada al revisar los README. Escribir la respuesta en la página dueña, con ejemplo mínimo y limitaciones relevantes. Distribuir la explicación y una segunda observación obtenida al probarla; no inventar preguntas de usuarios.

**Semana 8:** comparar las páginas indexadas y las nuevas consultas con la captura de esta auditoría. Corregir títulos o enlaces solo cuando haya una razón concreta. Si el volumen sigue siendo pequeño, compartir un aprendizaje de implementación en vez de presentar porcentajes de crecimiento inestables.

## Auditoría de imágenes

| Recurso comprobado por GET | Dimensiones | Bytes | Uso propuesto |
|---|---:|---:|---|
| `/alejandro-sanabria.jpg` | 1200 × 630 | 160.630 | La home ya tiene imagen social; no hay que añadir OG desde cero. |
| `/cifro/log-expenses.webp` | 600 × 1300 | 28.748 | Captura de producto. |
| `/cifro/ai-insights.webp` | 600 × 1300 | 33.044 | Captura de insights. |
| `/cifro/review-purchases.webp` | 600 × 1300 | 34.882 | Captura del ritual de revisión. |
| `/cifro/budget-by-category.webp` | 600 × 1300 | 37.870 | Captura de presupuesto. |

Las cuatro capturas son ligeras y tienen dimensiones declaradas. No hay evidencia aquí de un problema de rendimiento causado por su peso. El carrusel carga las imágenes de forma eager: medir antes de modificar ese comportamiento.

**Correcciones específicas:**

- En Cifro, `og:image:alt` y `twitter:image:alt` dicen “Alejandro Sanabria” aunque la imagen es una captura de la app. Pasar un `imageAlt` específico desde las páginas de Cifro.
- Crear una tarjeta social de Cifro en formato horizontal usando icono, nombre y una captura legible; la imagen actual es una captura vertical. Es una mejora propuesta de presentación, no un requisito de ranking.
- Dar a cada nueva página de herramienta un ejemplo visual propio. El texto importante también debe estar en HTML.
- Usar nombres descriptivos como `screenshots-ios-repeatable-state.webp` y alt que explique la imagen. No hacen falta geotags ni imágenes de ciudades para este sitio.

Estas piezas visuales están especificadas, no generadas. El calendario incluye cuándo reunirlas a partir de ejemplos y productos reales.
