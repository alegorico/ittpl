# Arquitectura de triangulación invertida para el mantenimiento de framework de gestión de plantillas xml/html 

**Settings** – contiene: variables, definiciones, etc.\
**Tools** – _mixins_ y funciones.\
**Generic** – es una capa intermedia de propósito general donde integramos plantillas de terceros y unificamos los _tools_ y _setting_ que serán utilizados en las otras capas.\
**Skeleton** - es la capa base a donde se irán introduciendo los distintos elementos definidos en los próximos apartados.\
**Template** – aquí se definen los bloques que forman parte de los requerimientos del esqueleto. Esta capa representaría cada uno de los posibles templetes del sistema. Utilizando un sistema de inyección el esqueleto se va llenando con cada uno de los bloques informados en cada templete.\
**Objects** – aquí se definen los _objetos genéricos_ como las etiquetas metas, script, link, etc. y algunos otros elementos aislados no pertenecientes a la capa anterior.
