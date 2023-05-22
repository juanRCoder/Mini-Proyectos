#PRACTICAND LAS VIDAS DE UN JUEGO CON WHILE y un IF
print("Bienvenido a Python")
option = 1
vidas = 3
while option == 1 and vidas > 0:
    option = int(input("Quieres seguir jugando 1.SI 2.NO: "))
    vidas -= 1 
    print(f"Te quedan {vidas} vidas")
    if vidas == 0:
        print("GAME OVER") 

print("Programa terminado")


#adivina un numero del 1 al 100
import random
numero = random.randint(1, 50) #numero random del 1 al 10
user = int(input("Adivina un numero del 1 al 100: "))
contador = 1 #contador de intentos
while user != numero:
    if user > numero:
        print("baja")
        user = int(input("Adivina un numero del 1 al 100: "))
        contador += 1
    else:
        print("sube")
        user = int(input("Adivina un numero del 1 al 100: "))
        contador +=1

print(f"Acertaste ({user}) es {numero}")
print(f"Adivinaste en {contador} intentos")