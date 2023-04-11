// Online C compiler to run C program online

#include <stdio.h>
//funcion factorial RECURSIVA
int factorial(int numero){
    /*si el numero es 0 retorna 1 /
     0! = 1    -    1! = 1*/ 
    if (numero == 0 ) return 1;
    
    /*si le numero es 1 o mas se multiplica por
    la misma funcion pero el numero se le resta 1.*/
    else return numero * factorial(numero - 1);
}

int main() {
  // ingresa un numero 
  int numero;
  printf("ingresa tu numero:\n");
  scanf("%d",&numero);
  
  //muestra el numero y su factorial
  printf("El factorial e %d es %d.\n",numero,factorial(numero));
  return 0;
}