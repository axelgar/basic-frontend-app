# CityZen Homes

## Descripción

Esta es una aplicación para crear un portal inmobiliario que facilite la busqueda de viviendas para la compra y el alquiler de las mismas

## Historias de usuarios

- 404: Como anónimo/usuario puedo ver una página 404 si intento llegar a una página que no existe.
- Registrarse: Como administrador puedo logearme y crear contraseñas para que otras personas puedan registrarse.
- Como usuario no logeado puedo seleccionar viviendas y, si alguna me interesa, avisar al administrador via mail para que se ponga en contacto conmigo
- Iniciar sesión: Como usuario puedo acceder a la plataforma para añadir, modificar o eliminar viviendas de mi cartera
- Cerrar sesión: Como usuario puedo desconectarme de la plataforma.
- Los usuarios no logeados podrán ver fotos de viviendas, tener una descripcion completa y tener acceso a la localización de las mismas

## MVP

Aplicacion que permite a los usuarios no logeados ver las viviendas en stock de una inmobiliaria y hacer busquedas entre las mismas
Los usuarios logeados podrán hacer lo mismo, pero además, podrán añadir, borrar y modificar las ya creadas

## Backlog

-Añadir una API para mapear donde estan las viviendas
-Que la aplicacion sea responsive
-Animaciones y transiciones

## Rutas

/Muestra un buscador, da acceso privatePage (mediante el login) y a la lista de viviendas
/privatePage - permite crear signup para otros usuarios, eliminar, crear y modidificar viviendas, ir al listado de viviendas o a home si haces logout
/vivienda/add - creas nuevas viviendas
/vivienda/update&delete/:id - modificas o eliminas vivendas
/List - Permite ver el conjunto de viviendas en cartera y da, de nuevo, acceso a un buscador para seleccionar viviendas 
vivenda/:id - Permite ver la vivienda y sus fotos. Dar aviso de contacto a la inmobialiaria

## Componentes

Navbar
Card
AnonRoute
Footer
Home
Form

## Servicio de Autoría

auth.login(usuario)
auth.signup(usuario)
auth.logout()
auth.me()

## Rutas backend

|Method|URL|Description|
|------|---|-----------|

|POST|'/auth/login'| Comprueba si el usuario esta en la base de datos |
|POST|'auth/signup' | Crea nuevo usuario en la base de datos|

|GET|'/auth/logout'| Cierra la sesion del usuario|

|GET|'/viviendas/'| Muestra todas las viviendas|
|GET|'/viviendas/:id/'| Muestra los detalles de una vivienda

|PUT|'/viviendas/:id/edit'| Modifica los datos de la vivienda en la base de datos|
|DELETE|'/viviendas/:id/delete'| Elimina la vivienda de la base de datos|
|POST|'/viviendas/create' | Incluye la vivienda en la base de datos|

## Models

User: 
- username
- password

Viviendas
- titulo
- clase ['venta', 'alquiler']
- tipo ['chalet', 'piso', planta baja', 'apartamento']
- contacto
- owner: {ObjectId}
- price
- metros
- habitaciones

## Enlaces
Trello
https://trello.com/b/GKQZv5R5/cityzen

## GitHub
La dirección URL de su repositorio y de su proyecto desplegado

## Wifrems
figma
https://www.figma.com/file/zcIl8HFkJYWfLU4tzb5K4p/Untitled?node-id=0%3A1
