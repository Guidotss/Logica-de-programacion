#include<iostream>
#include<vector>

using namespace std;

void plusMinus(vector<int> arr); 

int main(){

    vector<int> arr ={1,1,0,-1,-1}; 

    plusMinus(arr); 

    return 0; 
}

void plusMinus(vector<int> arr) {
    float positive = 0; 
    float negative = 0; 
    float zero = 0; 

    for(int i = 0; i < arr.size(); i++){
        if(arr[i] > 0){
            positive++; 
        }else if(arr[i] < 0){
            negative++;
        }else{
            zero++;
        }
    }

    cout<< positive/arr.size()<<endl;
    cout<< negative/arr.size()<<endl;
    cout<< zero/arr.size()<<endl;
}