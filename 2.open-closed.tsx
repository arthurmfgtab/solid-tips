// Software entities should be open for extention but closed for modification

// Goal
// This principle aims to extend a Class’s behaviour without changing the existing behaviour of that Class.
// This is to avoid causing bugs wherever the Class is being used.

// Bad
function BadButton({ type }: { type: "home" | "logout" }) {
    if (type === "home") {
        // @ts-ignore
        return <button>Home</button>
    }

    if (type === "logout") {
        // @ts-ignore
        return <button>Home</button>
    }

    return null
}

// Good
function GoodButton({ title }: { title: string }) {
    // @ts-ignore
    return <button>{title}</button>
}
