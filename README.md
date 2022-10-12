# curso-angular-fundamentos

## por qué usar Angular?
Más que un framework es una plataforma Logra un gran rendimiento de las aplicaciones aplicaciones multiplataforma

## Fundamentos de angular
- Verificar la versión de Node que se tiene
    ```
      node -v
    ```
- Manejador de paquetes
    ```
      npm -v
    ```
- Instalar el cliente de Angular
    ```
      npm i -g @angular/cli
    ```
- Verificar la instalación
    ```
      ng version
    ```
- Crear mi aplicación
    ```
      ng new name-application
    ```
- Correr comando para inicializar el servidor: Sirve para levantar un servidor web en modo desarrollo
    ```
      ng serve // ng s
      ng serve -o // para que abra el navegador automaticamente
      ng serve -o --port=3500
    ```

## Estructura de un proyecto en Angular
- src: Es el corazón de la aplicación
- .browserslistrc: Indica en que versiones tiene que ser compatible la aplicación
- .editorconfig: Tiene que ver con el trabajo en equipo, los equipos pueden tener distinatas configuraciones, esta es una normativa. Para que funcione debemos tener un plugin en nuestro VS
- tsconfig: Configuración con TypeScript
- angular.json: configurar diferentes ambientes, de prueba y de QA
- Instalar el plugin Angula Language Service
- Agregar un archivo nuevo node version management rc
  .nvmrc
  + Nos va a indicar si tenemos varias versiones de node en nuesta máquina cual es la más recomendada

## Conceptos Básicos de TypeScript para usar Angular
Dentro de la carpeta App vamos a abrir el archivo recap.js
```
  const username: string | number = 'Jennifer';
```

## String {{ Interpotation}}
Es la forma en la que nosotros desde la lógica en nuestro caso TypeScript, podemos pasar datos a renderizar a nuestro Template que en nuestro caso es nuestra vista.
-- Es la forma en la que con doble llave se puede implementar funciones y obtener un resultado
  ```
    {{ 1 + 1}}
    {{ myVAr }}
    {{ myFunction() }}
  ```
- Ahora vamos a abrir nuestro app.html y quitar el código que Angular nos entrega por defecto
- Para ingresar contenido
- Para renderizar contenido

## Property [Biding]
Es la forma en que podemos modificar atributos desde el controlador
configurar propiedades de elementos HTML
  - Estado del boton
  - value

## Introducción al Event (Binding) de Angular
los eventos que son nativos los enviamos con
```
  evento($event)
```
- como leer los eventos de un input

## Data Biding con [(ngModel)]
Siempre esta pendiente del valor del input
- Angular Forms

## Uso de *ngIf
## Uso de *ngFor
```
  <li *ngFor="let name of names">
    {{ name }}
  </li>
```
```
  array: string[] = ['Jenn', 'Cami', 'Santi'];
  array: string[] | number[] = ['Jenn', 'Cami', 'Santi', 5]; // podemos combinar los tipos
  array: any[] = ['Jenn', 'Cami', 'Santi']; // podemos especificar que queremos un array de cualquer tipo

```
- *ngFor para arrays
```
  <li *ngFor="let user of users">
    {{user.name}}
  </li>
```

## ngSwitch
```
  <div [ngSwitch]="switch_expression">
    <p *ngSwitchCase="expression_1">match 1</p>
    <p *ngSwitchCase="expression_2">match 2</p>
  </div>
```

## Angular DevTools
- Es una extesión para Chrome o Mozilla

## Estilos a la lista de productos

## Dynamic Class and Style

## Crear un formulario

## Despliegue con Firebase Hosting
- Configuracion
- Buscar 