#16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve escreva “Reprovado”.

def main():
    #Entrada
    nota1 = obter_numero_float('Digite a primeira nota: ')
    nota2 = obter_numero_float('Digite a segunda nota: ')
    
    #Processamento
    media_final = media(nota1, nota2)
    
    #Saída
    print(f'\n>>> O aluno foi {media_final}.')
    
def obter_numero_float(descricao):
    numero = float(input(descricao))
    return numero

def media(nota1, nota2):
    media = (nota1 + nota2) / 2
    if (media < 7):
        notaEF = obter_numero_float('Informe sua nota no exame final: ')
        media_f = (media + notaEF) / 2
        if (media_f >= 5):
            return 'Aprovado no EF'
        else:
            return 'Reprovado no EF'
        
    else:
        return 'Aprovado direto'
      
main()
    