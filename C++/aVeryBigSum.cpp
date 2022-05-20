#include<iostream>
#include<vector>

using namespace std;

long aVeryBigSum(vector<long> arr); 

int main(){

    vector<long> arr = {1000000001,1000000002,1000000003,1000000004,1000000005}; 

    aVeryBigSum(arr); 

    return 0; 
}

long aVeryBigSum(vector<long> arr) {
    long long sum = 0; 

    for(int i =0; i < arr.size();i++){
        sum+=arr[i];    
    }
    return sum; 
}