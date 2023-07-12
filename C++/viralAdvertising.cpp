#include<iostream>

using namespace std; 

int viralAdvertising(int n) {
    int i = 0; 
    int shares = 5; 
    int aux = 0; 
    int totalLikes = 0; 
    while(i < n) { 
        aux += shares/2; 
        totalLikes += aux; 
        shares = aux;  
        i++; 
    }; 
    return n == 1 ? shares : totalLikes; 
}

int main() { 

    int n = 5; 
    cout<<viralAdvertising(4); 


    return 0; 
}
