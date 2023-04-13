// Online C compiler to run C program online
#include <stdio.h>

//ESTRUCTURA("OBJETO") EN C
struct person{
    char nombre[30];
    int edad;
    float estatura;
}personas[2];

int main() {
    //iteramos los datos que el usuario nos escriba
    for(int i = 0; i < 2; i++){
        printf("%i. Nombre:\n",i+1);
            scanf("%s",&personas[i].nombre);
        printf("%i. Edad:\n",i+1);
            scanf("%i",&personas[i].edad);
        printf("%i. Estatura:\n",i+1);
            scanf("%f",&personas[i].estatura);
    }
    //mostramos los datos iterados anteriormente
    for(int i = 0; i < 2; i++){
        printf("Nombre: %s\n",personas[i].nombre);
        printf("Edad:%d\n",personas[i].edad);
        printf("Estatura:%.2f\n\n",personas[i].estatura);
    }
    return 0;
}