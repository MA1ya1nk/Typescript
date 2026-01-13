/* 
UNION
let sub: number | string = '1M'
sub = 1000000

// IMP
let apiRequestStatus: 'pending' | 'success' | 'failed' = 'pending'
apiRequestStatus = 'success'
// but any other value will give error
// apiRequestStatus = 'inprogress' // Error
*/
let name; // it is any type by default which means it can hold any value
// but it is a bad practice to use any type