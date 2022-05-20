#include<iostream>
#include<vector>

using namespace std; 

int simpleArraySum(vector<int>arr); 

int main(){
    vector<int> arr ={1,2,3,4}; 

    cout<<simpleArraySum(arr); 

    return 0; 
}


int simpleArraySum(vector<int>arr){
    int sum =0; 

    for(int i =0; i < arr.size();i++){
        sum+=arr[i]; 
    }
    return sum;  
}
