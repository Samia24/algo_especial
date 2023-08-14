#6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

#Entrada
velocidade_m_s = float(input('Informe a velocidade em metros por segundo: '))

#Processamento
velocidade_km_h = velocidade_m_s / 3.6

#Saída
print(f'\n>>> A velocidade de {velocidade_m_s:.1f}m/s equivale a {velocidade_km_h:.1f}km/h.')