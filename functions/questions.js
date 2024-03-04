// QUESTION : 01
{
    // function getItems(fruitList,...args,favouriteFruit){
    //     return [...favouriteFruit,...args,favouriteFruit]
    // }

    // 1) Guess the output.
    //      console.log(getItems(["banana","orange"],'pear','orange'))
    //      Output will be error as rest parameter must be last but spread
    //      can be anywhere.

    // 2) if Error then correct the code and guess the output.
          // correct code :
          function getItems(fruitList,favouriteFruit,...args){
            return [...fruitList,...favouriteFruit,...args]
        }
        console.log(getItems(["banana","orange"],'pear','orange'))
        // Output will be 'banana','orange','p', 'e', 'a', 'r','orange'
        
}