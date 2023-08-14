#36.lista1 - Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

#Entrada
anos = int(input('Informe a idade em anos: '))
meses = int(input('Informe a idade em meses: '))
dias = int(input('Informe a idade em dias: '))

#Processamento
id_anos = anos * 365

id_meses = meses * 30

soma = id_anos + id_meses + dias

#Saída
print(f'\n>>> A idade de {anos} anos, {meses} meses e {dias} dias convertida, corresponde à {soma} dias.')
