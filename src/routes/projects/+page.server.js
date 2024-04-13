export async function load() {
    let projects = fetch(
        "https://api.spiget.org/v2/authors/1187518/resources", {
            method: "GET",
        }
    ).then((value) => projects = value.json());
    
    return {
        projects
    }
}