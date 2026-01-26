// Eliminate runtime null errors

// Add proper types for user
// Handle missing data safely
// Use optional chaining to access nested properties safely

interface Profile{
    name: string,
    age: number,
}

interface User{
    profile?: Profile,
}

function getUsername(user: User): string {
    return (user?.profile) ? user.profile.name : "User Profile Name Missing"; // using optional chaining
    // return user.profile?.name?? "User Profile Name Missing"; // using optional chaining with Nullish Coalescing
}

const profile1: Profile = {
    name: "Gyanas Luitel",
    age: 27,
}

const user1: User = {
    profile: profile1,
}

const userProfileName = getUsername(user1);
console.log(userProfileName);

const userProfileName2 = getUsername({});
console.log(userProfileName2);
