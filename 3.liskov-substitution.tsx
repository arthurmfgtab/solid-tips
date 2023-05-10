// Subtype objects should be substitutable for supertype objects

// If you have a Class and create another Class from it, it becomes a parent and the new Class becomes a child.
// The child Class should be able to do everything the parent Class can do. This process is called Inheritance.

// Goal
// This principle aims to enforce consistency so that the parent Class or its child Class
// can be used in the same way without any errors.

// @ts-ignore
interface Props extends InputNativeProps {
    label: string
}

function Input({ label, ...props }: Props) {
    // @ts-ignore
    return <input label={label} {...props}></input>
}
