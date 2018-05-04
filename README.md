# Herramienta automatizada para la creacion de xml/html, partiendo de plantillas previamente estructuradas
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) 
[![Build Status](https://travis-ci.org/alegorico/ittpl.svg?branch=master)](https://travis-ci.org/alegorico/ittpl)

Utilería de creación generica de html/xml, se utiliza para ello plantillas previamente definidas. También se a incluido acceso al framework de compilado de css de plantillas sass segun el modelo ITCSS [Más info](https://github.com/alegorico/forkfrcss)

### Clonación del repo
```shell
    git clone --recurse-submodules https://github.com/alegorico/ittpl.git
```

### Instalación 
```js
   npm install 
```

### Comandos básicos
```js
    grunt clean // limpia el directorio de compilacion
    grunt pug // compila los html
    grunt sass // compila el css general
    
    // ejecutarlos todo a la vez
    grunt
```

### Directorios de trabajo para html/xml

**html/settings** – contiene: variables, definiciones, etc.\
**html/tools** – _mixins_ y funciones.\
**html/generic** – es una capa intermedia de propósito general donde integramos plantillas de terceros y unificamos los _tools_ y _setting_ que serán utilizados en las otras capas.\
**html/skeleton** - es la capa base a donde se irán introduciendo los distintos elementos definidos en los próximos apartados.\
**html/** – aquí se definen los bloques que forman parte de los requerimientos del esqueleto. Esta capa representaría cada uno de los posibles templetes del sistema. Utilizando un sistema de inyección el esqueleto se va llenando con cada uno de los bloques informados en cada templete.\
**html/objects** – aquí se definen los _objetos genéricos_ como las etiquetas metas, script, link, etc. y algunos otros elementos aislados no pertenecientes a la capa anterior.

---
Copyright (c) 2018  Alejandro G

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
