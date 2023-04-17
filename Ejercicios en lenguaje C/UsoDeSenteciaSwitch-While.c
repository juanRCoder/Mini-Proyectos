#include <stdio.h>

int main() {
    int loop = 1; //variable para el ciclo WHILE
    while(loop == 1){
        int animal; //variable para la sentencia SWITCH
        printf("Escoge un numero del 1 al 5:\n");
        scanf("%d",&animal);
        switch(animal){
            case 1:
             printf("Escogiste un perro\n\n");
             break;
            case 2:
             printf("Escogiste un gato\n\n");
             break;
            case 3:
             printf("Escogiste un raton\n\n");
             break;
            case 4:
             printf("Escogiste un zorro\n\n");
             break;
            case 5:
             printf("Escogiste un tortuga\n\n");
             break;
            default:
             printf("Animal no escontrado o especificado\n\n"); 
        }
        loop = 0; //variable 0 de WHILE
        printf("Quieres elegir otro: 1.SI 2.NO\n"); //opcion de cambio
        scanf("%d",&loop);  //cambiar la variable WHILE para continuar o no
    }
    printf("FIN\n"); // TEXT FIN
    return 0;
}