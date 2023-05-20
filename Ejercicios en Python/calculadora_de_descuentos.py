#Calculando de descuentos:

num_producto = int(input("Digame cuantos productos son: ")) #preguntar la cantidad de descuentos
option = True   #inicializa option
 
while option != False:
    print("Tenemos los siguientes descuentos: 1|20%  2|50% ") #Escoger entre los descuentos disponibles
    descuento = int(input("Escoga entre uno numero: ")) #en caso no escoge entre los disponibles volver a prengutar
    precio_final = 0

    if descuento == 1:
        for i in range(num_producto): #itera cada producto y calcula los descuentos a cada uno  
            precio_original = float(input(f"Costo del producto {i+1}: ")) 
            precio_final += precio_original - (precio_original * 20 / 100)
        print(precio_final) #muestra el resultado final de los productos con el descuento aplicado
        option = False
        
    elif descuento == 2:
        for i in range(num_producto):
            precio_original = float(input(f"Costo del producto {i+1}: "))
            precio_final += precio_original - (precio_original * 50 / 100)
        print(precio_final) 
        option = False
        
    else: #En caso de no escoger los descuentos disponibles mostrar mensaje y volver a preguntar
        print("Descuento no encontrado") 
        option = True