# Arquitectura de triangulación invertida para el mantenimiento de framework de gestión de plantillas xml/html 

![modelo del triangulo invertido][1]
	
**Settings** – usado por el preprocesador, contiene: variables, definiciones, etc.\
**Tools** – _mixins_ y funciones.\
**Generic** – _reset_ y/o normalizado de resultados. Es una capa intermedia de propósito general donde utilizamos los tools y setting y los combinamos.\
**Elements** – definen los bloques centrales. Estos luego serán los padres de los elementos de las capas posteriores.\
**Objects** – aquí se definen los elementos generales como las etiquetas metas, script, link, etc. y algunos otros elementos aislados no pertenecientes a la capa anterior.\
**Components** – incluye los fragmentos y componentes estáticos de la vista a generar.\
**Utilities** – utilidades y _helpers_ con la habilidad sobrescribir la plantilla y darle los últimos toques.

[1]:https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/01083650/itcss-layers2.svg