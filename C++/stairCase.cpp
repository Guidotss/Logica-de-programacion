#include<iostream>

using namespace std;

void stairCase(int n); 

int main(){
    int n = 6; 

    stairCase(n); 
}

void stairCase(int n){
    
    for(int i = 0; i < n; i++){
        string space = ""; 
        for(int j = 0; j < n - i -1; j++){
            space+=" "; 
        }
        for(int k = 0; k < i+1; k++){
            space+= "#"; 
        }
        cout << space << endl; 
    }   
}


