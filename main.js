const arr = [2,8,7,1,3,5,6,4];

const quickSort = (A, p, r) => {
    if (p < r) {
        randomizePivot(A, p, r);

        const q = partition(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
};

const partition = (A, p, r) => {
    const x = A[r];
    
    let i = p - 1;
    for (let j = p; j < r; j++) {
         if (A[j] <= x) {
             i++;
             swap(A, i, j);
         }
    }
    swap(A, i + 1, r);
    
    return i + 1;
};

const swap = (A, i, j) => {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;    
};

const randomizePivot = (A, p, r) => {
    const rand = p + Math.floor(Math.random() * (r - p + 1));
    swap(A, rand, r);  
};

quickSort(arr, 0, arr.length - 1);
console.log(arr);