# Platzom

Proyecto del curso Fundamentos de javascript, creacion y publicacion de modulos con NPM

## Descripcion de platzom

- Si la palabra termina con "ar", se removeran esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra tiene 10 o mas letras, se debe partir a la mitad y unirlas con un guion
- Si la palabra es un palindromo, ninguna de las reglas anteriores se ejecuta, la palabra original será retornada intercalando mayusculas y minusculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom('programar') // program
platzom('Zorro') // Zorrope
platzom('Zarpar') // Zarppe
platzom('abecedario') // abece-dario
platzom('sometemos') // SoMeTeMoS
```

## Licencia
[MIT] (https://opensource.org/licenses/MIT)
