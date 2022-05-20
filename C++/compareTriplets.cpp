#include<iostream>
#include<vector>

using namespace std;

vector<int> compareTriplets(vector<int> a, vector<int> b); 

int main(){
    vector<int> a = {1, 2, 3}; 
    vector<int> b = {3, 2, 1}; 

    compareTriplets(a,b); 

}
vector<int> compareTriplets(vector<int> a, vector<int> b){
    int alicePoints = 0; 
    int bobPoints = 0; 
    vector<int> totalPointsArray; 

    for(int i = 0; i < a.size(); i++){

        if(a[i] > b[i]){
            alicePoints++; 
        }else if (a[i] < b[i]){
            bobPoints++; 
        }else{
            continue;
        }
    }

    totalPointsArray.push_back(alicePoints); 
    totalPointsArray.push_back(bobPoints); 

    return totalPointsArray; 
    
}
