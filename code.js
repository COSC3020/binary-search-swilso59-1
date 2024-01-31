function binarySearch(list, element) {
    
    // Initialize left index at the start of the list.
    let leftInd = 0;

    // Initialize right index at the end of the list.
    let rightInd = list.length - 1;

    // Search as long as the left index element is less than or equal to the right index element.
    while (leftInd <= rightInd) {
        
        // Calculate the middle index.
        const midInd = Math.floor((leftInd + rightInd) / 2);

        // Check if the middle index element is equal to the target element.
        if (list[midInd] === element) {
            
            // If found, return the index of the element.
            return midInd;
        
        }
        
        // Check if the middle index element is less than the target element.
        else if (list[midInd] < element) {
            
            // If the middle index element is less than the target element, update the left index.
            leftInd = midInd + 1;
        
        } 
        
        else {
            
            // If the middle index element is greater than the target element, update the right index.
            rightInd = midInd - 1;

        }

    }

    // If the element is not found, return -1.
    return -1;
}

// For this function I used resourses from the internet. 
// https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470
// https://www.scaler.com/topics/binary-search-in-javascript/
// https://www.geeksforgeeks.org/binary-search-in-javascript/
// https://stackoverflow.com/questions/22697936/binary-search-in-javascript
// I also recieved help from the TA. 
