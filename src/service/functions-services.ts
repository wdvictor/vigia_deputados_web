

function toTitleCase(nome: string): string {
    return nome
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default toTitleCase;