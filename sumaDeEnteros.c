#include <stdio.h>
int main() {
  int numero1; 
  int numero2;
  int res;
  printf("Primer numero para sumar:\n");
  scanf("%d",&numero1);
  printf("Segundo numero para sumar:\n");
  scanf("%d",&numero2);
  res = numero1 + numero2;
  printf("La suma de ambos numero es: %d\nNada mal!",res);
  return 0;
}
