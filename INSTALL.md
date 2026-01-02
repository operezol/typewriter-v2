# 🚀 Instalación y Ejecución - TypeWriter v2

## Pasos de Instalación

### 1. Navegar al directorio del proyecto

```bash
cd c:/Users/oriol/Documents/GitHub/typewriter-v2
```

### 2. Instalar dependencias

```bash
pnpm install
```

Esto instalará todas las dependencias necesarias:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Zustand (state management)
- Framer Motion (animations)
- Recharts (charts)
- Lucide React (icons)

### 3. Iniciar servidor de desarrollo

```bash
pnpm dev
```

La aplicación estará disponible en: **http://localhost:3000**

### 4. Build para producción (opcional)

```bash
pnpm build
```

### 5. Preview de producción (opcional)

```bash
pnpm preview
```

---

## ✅ Verificación

Si todo funciona correctamente, deberías ver:

1. **Pantalla de selección de lecciones** con 10 niveles
2. **Header** con controles de tema y sonido
3. **Lecciones desbloqueadas** (solo la primera al inicio)
4. Al hacer clic en "Comenzar" en la Lección 1:
   - Área de práctica con texto a escribir
   - Estadísticas en tiempo real (WPM, precisión, errores, tiempo)
   - Teclado virtual con colores por mano
   - Tecla siguiente resaltada en amarillo

---

## 🎯 Características Implementadas

### ✅ Completado
- Sistema de 10 lecciones progresivas
- Detección de teclas en tiempo real
- Cálculo de WPM, CPM, precisión
- Teclado virtual con feedback visual
- Tema claro/oscuro
- Persistencia con LocalStorage
- UI moderna con Tailwind CSS
- TypeScript completo

### 🔄 Próximas mejoras
- Sonidos de teclas
- Gráficos de progreso con Recharts
- Animaciones con Framer Motion
- Análisis detallado de errores
- Sistema de logros

---

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
# Reinstalar dependencias
rm -rf node_modules
pnpm install
```

### Puerto 3000 ocupado
Edita `vite.config.ts` y cambia el puerto:
```typescript
server: {
  port: 3001, // o cualquier otro puerto
}
```

### Errores de TypeScript
```bash
# Verificar configuración
pnpm tsc --noEmit
```

---

## 📝 Notas

- Los errores de lint antes de `pnpm install` son normales
- El proyecto usa **pnpm** como gestor de paquetes
- Dark mode se activa automáticamente según preferencias del sistema
- El progreso se guarda automáticamente en LocalStorage

---

**¡Listo para aprender mecanografía!** ⌨️✨
