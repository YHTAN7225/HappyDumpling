export const error = {
    getAuthErrorMessage: function(error){
        switch(error){
            case "auth/invalid-password":
                return "Invalid password.";

            case "auth/wrong-password":
                return "Wrong password.";

            case "auth/user-not-found":
                return "Email does not exist.";

            case "auth/invalid-email":
                return "Email is invalid";
                
            case "auth/too-many-requests":
                return "Too many request.";

            default:
                return "Error."
        }
    }
}