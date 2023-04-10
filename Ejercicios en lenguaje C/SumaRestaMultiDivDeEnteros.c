// Online C compiler to run C program online
#include <stdio.h>

int main() {
  //declaracion de variables
    int num,num2;
    int letra;
    printf("Dime 1 numero:\n"); // texto1
    scanf("%d",&num);           //entrada number1
    printf("Dime otro numero:\n"); //texto2
    scanf("%d",&num2);          //entrada number2
    
    //textos para escoger operación
    printf("Escoge un numero para operar estos 2 numeros:\n");
    printf("1.suma 2.resta 3.multiplicación 4.dividir\n");
    scanf("%d",&letra); // entrada de opcion escogida
    
    //operacion SUMAR
    if (letra == 1){
        int sumar = num + num2;
        printf("Tu resultado es %d + %d = %d\nFIN!",num,num2,sumar);
        
    //operacion RESTAR
    }else if(letra == 2){
        int restar = num - num2;
        printf("Tu resultado es %d - %d = %d\nFIN!",num,num2,restar);
        
    //operacions MULTIPLICAR
    }else if(letra == 3){
        int multi = num * num2;
        printf("Tu resultado es %d * %d = %d\nFIN!",num,num2,multi);
        
    //operacion DIVIDIR
    }else if(letra == 4) {
        int division = num / num2;
        printf("Tu resultado es %d / %d = %d\nFIN!",num,num2,division);
    
    //en caso de que no escoja ninguna o no este en el rango
    }else  printf("No existe esa opciòn, escoja otra.");
    return 0;
}