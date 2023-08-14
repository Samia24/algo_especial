#14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

#Entrada
nota1 = float(input('Informe a 1ª nota: '))
peso1 = float(input('Informe o peso da nota 1: '))
nota2 = float(input('Informe a 2ª nota: '))
peso2 = float(input('Informe o peso da nota 2: '))
nota3 = float(input('Informe a 3ª nota: '))
peso3 = float(input('Informe o peso da nota 3: '))

#Processamento
media_ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

#Saída
print(f'\n>>> A média ponderada das 3 notas é {media_ponderada:.1f}.')