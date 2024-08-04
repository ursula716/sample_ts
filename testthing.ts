function testPalindrome(y: string) {
    const a = y.toLowerCase().split('');
    const b = y.toLowerCase().split('').reverse().join();

    if (a.toString() == b.toString()) {
        return y + " is a palindrome";
    }
    else {
        return y + " is not a palindrome";
    }
}

function isAnagram(y: string, z: string) {
    const a = y.toLowerCase().split('').sort().join();
    const b = z.toLowerCase().split('').sort().join();

    if (a == b) {
        return y + " and " + z + " are anagrams";
    }
    else {
        return y + " and " + z;
    }
}

console.log(isAnagram("hELLo", "heoll") + " and " + testPalindrome("anna"));