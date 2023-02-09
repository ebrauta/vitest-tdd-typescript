#SOLID

* 5 princípios
* Visam trazer um software mais flexível, menos rígido, mais fácil de manter e evoluir

1 - SRP
## Single Responsability Principle
Separar coisas que MUDAM POR MOTIVOS DIFERENTES.

Mover responsabilidades.

2 - OCP
## Open/Closed Principle
Devemos estar FECHADOS para MODIFICAÇÃO e ABERTOS para EXTENSÃO.

3 - LSP
## Liskov Substitution Principle
Se S (Beer, Whisky, Water) é subclasse de T (Item), em um programa deve ser possível 
substituir instância de T por instâncias de S, SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA.

Pré-condições não podem ser fortalecidas:
- Deixando de aceitar ENTRADAS que a superclasse considera válida.

Pós-condições não podem ser enfraquecidas:
- Deixando as SAÍDAS diferentes da expectativa de quem está chamando o método.
- Saídas mais AMPLAS.

Invariantes devem se manter consistentes:
- Se uma subclasse permitir que o estado conceitual da hierarquia de classes fique inválido.

4 - ISP
## Interface Segregation Principle

Cuidado com interfaces MUITO ABRANGENTES, não obrigue subclasses a implementar métodos que elas não precisam.


5 - DIP
## Dependency Inversion Principle

Módulos de ALTO NÍVEL não devem depender de módulos de BAIXO NÍVEL.
Ambos devem depender de abstrações.
