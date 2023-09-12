#15. Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um. Escreva na tela qual dos professores tem salário total maior.
    
def main():
    #Entrada
    horas1 = obter_numero_int('Informe a quantidade de horas/aula do primeiro professor: ')
    valor1 = obter_numero_int('Informe o valor da hora/aula do primeiro professor: ')
    horas2 = obter_numero_int('Informe a quantidade de horas/aula do segundo professor: ')
    valor2 = obter_numero_int('Informe o valor da hora/aula do segundo professor: ')
    
    #Processamento
    salario_maior = salario(horas1, valor1, horas2, valor2)
    
    #Saída
    print(f'\n{salario_maior}')
    
def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def salario(horas1, valor1, horas2, valor2):
    salario1 = horas1 * valor1
    salario2 = horas2 * valor2
    salario_total_maior = salario1
    if (salario2 > salario_total_maior):
        salario_total_maior = salario2
        return f'>> O professor 2 tem salário maior, de R$ {salario_total_maior:.2f}.'
    else:
        salario_total_maior = salario1
        return f'>> O professor 1 tem salário maior, de R$ {salario_total_maior:.2f}.'
      
main()
    