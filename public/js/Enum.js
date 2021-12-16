export const constant = {
    regex:{
        emailAddressRegex : "([-!#-'*+\-9=?A-Z^-~]+(\.[-!#-'*+\-9=?A-Z^-~]+)*|'([]!#-[^-~ \t]|(\\[\t -~]))+')@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+",
        emailAddressRegexErrorMessage: "Invalid email format.",
        phoneNumberRegex: "^[0-9]{6,8}+$",
        phoneNumberRegexErrorMessage: "Invalid phone number.",
        passwordRegex: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$",
        passwordRegexErrorMessage: "Password must contain at least 8 character, and must consist of at least 1 alphabeth and 1 number.",
    },
}
