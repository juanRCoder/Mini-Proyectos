#tabla de multiplicar interactiva
num = int(input("Tabla de multiplicar del: "))

for i in range(1,11): #itera del 1 al 10
    res = i * num  #multiplica el numero dado por el 1 hasta el 10
    print(f"{num} x {i} = {res}") #muestra el resultado cada vez que itera

#Tabla de multiplicar del: 9
# 9 x 1 = 9
# 9 x 2 = 18
# 9 x 3 = 27
# 9 x 4 = 36
# 9 x 5 = 45
# 9 x 6 = 54
# 9 x 7 = 63
# 9 x 8 = 72
# 9 x 9 = 81
# 9 x 10 = 90