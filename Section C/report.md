# Report of the solution

- The input string's length, n, determines the isbn13 function's worst-case space complexity.
- In the function, we first remove any dashes or spaces from the input string using the replace method. 
- This operation creates a new string with the same length as the input string, so the space complexity is O(n)
- We then check if the input string is a valid ISBN-10 by using a regular expression to test the pattern. This operation has a constant space complexity and does not depend on the length of the input string.
- A new string that is three characters longer than the input text is used to calculate the ISBN-13 if the input string is a valid ISBN-10. Because we are concatenating three substrings to form a new string, the space complexity of this operation is O(n).
- If the input string is a valid ISBN-13, we calculate the check digit and compare it to the check digit in the input string. These operations have a constant space complexity and do not depend on the length of the input string.
- As a result, the isbn13 function's worst-case overall space complexity is O(n), where n is the length of the input string. This is due to the fact that we may construct a new string that is three characters longer than the input string or one that is the same length as the input string.