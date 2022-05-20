#include<iostream>
#include<vector>

using namespace std; 

int diagonalDifference(vector<vector<int>> arr); 

int main(){
    vector<vector<int>> arr = {
        {1,2,3},{4,5,6},{9,8,9}
    }; 

    /* for(int i=0; i < arr.size(); i++){
        for(int j=0; j< arr.size();j++){
            cout<<arr[i][j]<<" "; 
        }
        cout<<" "<<endl; 
    } */

    cout<<diagonalDifference(arr); 

    return 0; 
}

int diagonalDifference(vector<vector<int>> arr) {
    int principalDiag = 0; 
    int secondaryDiag = 0; 
    int difDag; 

    for(int i = 0; i < arr.size();i++){
        for(int j = 0; j < arr.size();j++){
            if(i == j){
                principalDiag+=arr[i][j]; 
            }
            if((i+j) == (arr.size() - 1)){
                secondaryDiag+=arr[i][j]; 
            }
        }
    }

    principalDiag - secondaryDiag < 0 ? difDag = -1 * (principalDiag - secondaryDiag) : difDag = principalDiag - secondaryDiag; 

    return difDag; 

}