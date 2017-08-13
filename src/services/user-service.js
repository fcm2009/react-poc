export function getUserProfile() {
    return fetch(`http://localhost:3000/user/0`)
        .then(result=>result.json());
}