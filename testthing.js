function testPalindrome(y) {
    var a = y.toLowerCase().split('');
    var b = y.toLowerCase().split('').reverse().join();
    if (a.toString() == b.toString()) {
        return y + " is a palindrome";
    }
    else {
        return y + " is not a palindrome";
    }
}
function isAnagram(y, z) {
    var a = y.toLowerCase().split('').sort().join();
    var b = z.toLowerCase().split('').sort().join();
    if (a == b) {
        return y + " and " + z + " are anagrams";
    }
    else {
        return y + " and " + z;
    }
}
console.log(isAnagram("hELLo", "heoll") + " and " + testPalindrome("anna"));
