import random  #importando libreria

longitud = int(input("Dime la longitud para la contraseña: "))

contraseña = ""
caracteres = "123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

for _ in range(longitud): #iterar hasta cierta longitud dada
    contraseña += random.choice(caracteres) #generando caracteres dados aleatoriamente
    
print(f"Tu contraseña es: {contraseña}")