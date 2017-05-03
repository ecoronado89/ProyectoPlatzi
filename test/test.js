
const expect  = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

  it('Si la palabra termina con "ar", se removeran esas dos letras',function(){
      const translation = platzom('Programar')

      expect(translation).to.equal('Program')
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translation = platzom('Zorro')
    const translation2 = platzom('Zarpar')

    expect(translation).to.equal('Zorrope')
    expect(translation2).to.equal('Zarppe')

  })

  it('Si la palabra tiene 10 o mas letras, se debe partir a la mitad y unirlas con un guion', function(){
    const translation = platzom('abecedario')

    expect(translation).to.equal('abece-dario')
  })

  it('Si la palabra es un palindromo, ninguna de las reglas anteriores se ejecuta, la palabra original será retornada intercalando mayusculas y minusculas', function(){
    const translation = platzom('sometemos')

    expect(translation).to.equal('SoMeTeMoS')
  })

})
