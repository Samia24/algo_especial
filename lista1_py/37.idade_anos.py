#37.lista1 - Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

#Entrada
dias = int(input('Informe a idade em dias: '))

#Processamento
id_anos = dias // 365
meses = dias % 365
id_meses = meses // 30
d = meses % 30

#Saída
print(f'\n>>> A idade de {dias} dias convertida, corresponde à {id_anos} anos, {id_meses} meses e {d} dias.')
