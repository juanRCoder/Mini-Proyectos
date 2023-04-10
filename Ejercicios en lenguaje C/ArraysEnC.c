// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int tamaño;
    printf("tamaño del array\n"); //text1
    scanf("%d",&tamaño);    // escribe la cantidad de elementos que tendra
    int array[tamaño]; //declaro el array con la cantidad exacta
    
    //ingresa cada elemento a cada posicion del array especifico
    for(int i = 0; i < tamaño; i++){
        printf("Ingresa el elemento %d:\n",i+1); //menciona a cada elemento
        scanf("%d",&array[i]); // agrego un elemento en cada posicion designada
    }
    //mostrar los elementos
    printf("Los valores del array son:\n");
    for(int i = 0; i < tamaño; i++){
        printf("%d - ",array[i]);
    }
    printf("\nFIN!.");
    return 0;
}