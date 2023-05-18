// Online C compiler to run C program online
#include <stdio.h>

int main() {
    int tamaño;
    
    //ESCOGER EL TAMAÑO DEL ARRAY
    printf("Ingrese el tamaño del array:\n ");
    scanf("%d",&tamaño);
    int array[tamaño];
    int i;
    printf("Ingrese %d elementos al array:\n", tamaño
           
    //PEDIR ELEMENTOS PARA EL ARRAY;    
        for(i = 0; i < tamaño; i++){
            printf("elemento %d: ", i + 1);
            scanf("%d",&array[i]);
        }
           
    //MOSTRAR EL ARRAY.      
    printf("Elementos:\n");
        for(i = 1; i <= tamaño; i++){
            printf("_%d_",array[i-1]);
        }
        
    return 0;
}
