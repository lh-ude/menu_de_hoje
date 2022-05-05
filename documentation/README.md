# Menu de Hoje #

## Proposta ##

Este site é um sorteador refeições, inspirado em um jogo de dados comercializado na imaginarium:

![image](https://user-images.githubusercontent.com/99282366/166745622-49e5c12a-821f-4569-b0ab-0d3644593b66.png)

A ideia é auxiliar na escolha do pedido de delivery, quando a pessoa não souber o que pedir.

## O código ##

O site foi pensado como um exercício simples de javascript rodando em um site HTML. O script é chamado a partir de um botão <button> com a função <onclick>:

![image](https://user-images.githubusercontent.com/99282366/166746895-a1080317-b24b-4757-8678-a411431cbd41.png)
  
O javascript vai chamar a função sorteio, que vai sortear dois vetores diferentes:
  
  ![image](https://user-images.githubusercontent.com/99282366/166747258-fb239708-2dfc-4783-8f0e-cd42a4ebe4a6.png)

Pretendo futuramente aprimorar o código, trocando algumas combinações. Por essa razão, o sorteio é feito utilizando o *comprimento* do vetor ao invés de um número fixo (que no caso seria 6, pois é inspirado em dados).
 
![image](https://user-images.githubusercontent.com/99282366/166748183-ad82b92c-0220-474c-bc2f-07a76d2fedb3.png)

![image](https://user-images.githubusercontent.com/99282366/166748105-aae16fef-2a2c-4d2c-a983-051b7c4c1fda.png)

Para esse projeto em específico, não quis colocar uma opção em que o usuário insere as próprias opções, pois a ideia era resolver um problema de indecisão, além de ser possível fazer outro sorteio com apenas um clique, caso a opção não seja do agrado.

O resultado será mostrado no HTML, através do id <resultado final>:
  
  ![image](https://user-images.githubusercontent.com/99282366/166762923-224a6b41-9748-4715-b781-6debd718f6ed.png)

  _javascript_
  
  ![image](https://user-images.githubusercontent.com/99282366/166764905-f65cfa5d-813c-45c2-afef-f7a1fa27d57f.png)

  _HTML_
  
  Atualmente são possíveis 36 combinações, mas podem aumentar ou diminuir. Também é possível adicionar mais um fator. No caso, se eu colocar a opção com ou sem sobremesa, o número de combinações passa para 72:

![image](https://user-images.githubusercontent.com/99282366/166798090-c5035de0-d291-4f20-a0d0-406d57699eb3.png)

![image](https://user-images.githubusercontent.com/99282366/166798768-7fa8c4be-6f6f-4f43-8267-61af05b94c77.png)

 Porém, acredito que isso já foge um pouco da proposta e dificultaria a implantação de outros recursos, como cada resultado indicar alguns restaurantes próximos ou exibir imagens de exemplo.
  
 ## Resultado final ##
  
![image](https://user-images.githubusercontent.com/99282366/166767527-93e131e2-d1f3-419a-9268-b2ff9c1d3def.png)

  _antes do clique_
  
![image](https://user-images.githubusercontent.com/99282366/166769992-66876df3-988c-4539-8d12-7b10217f3ba2.png)

  _após ao clique_
  
  
