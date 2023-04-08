#include <stdio.h>
//SUMA DE NUMEROS ENTEROS EN C
int main() {
  //declaracion de variables
  int numero1; 
  int numero2;
  int res;
  
  //imprime text1
  printf("Primer numero para sumar:\n");
  scanf("%d",&numero1); //escribe en teclado valor de text1
  //imprime text2
  printf("Segundo numero para sumar:\n");
  scanf("%d",&numero2); //escribe en teclado valor de text2
  
  res = numero1 + numero2; //suma de los valores escritos
  
  //imprime una frase con el resultado de los valores
  printf("La suma de ambos numero es: %d\nNada mal!",res);
  return 0;
}