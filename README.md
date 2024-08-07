
# Front-End prueba tecnica con React

En este repositorio se encuentra la todo el codigo hecho para el Front-end de la prueba, el cual consumira el api creado con la tecnologia de Java SpringBoot ubicado en el repositorio https://github.com/JaviAPR/BackEndPruebaTecnica.



## Features

- Buscar Producto por Id
- Buscar productos por Nombre
- Mostrar todos los productos
## Future features
- Registrar Nuevos Productos
- Actualizar Productos Existentes
- Eliminar Productos



## Run Locally

Clonar el proyecto

```bash
  git clone https://github.com/JaviAPR/FrontPruebaTecnica
```

Ir a la carpeta donde se clono

```bash
  cd my-project
```

Instalar las dependencias

```bash
  npm install vite
```
Cambiar urls para que pueda hacer correctamente los llamados al api

```bash
  carpeta component/UrlApi cambiar el localhost export const APIURL = path=>`http://localhost:8081/negocio/${path}`
```

```bash
    tambien en los archivos UsarCustomHook.jsx y UsarBuscarNombre.jsx cambiar las url
    const { data, loading, error } = useFetch(
    `http://localhost:8081/negocio/producto/${postId}`
  );
```

Iniciar el servidor

```bash
  npm run dev
```

