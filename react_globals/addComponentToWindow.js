export default function addComponentToWindow(Component, lookupKey) {
    if (!window.Components) {
        window.Components = {}
    }

    if (window.Components[lookupKey]) {
        throw new Error(`${lookupKey} already registered as in window.Components, please use a unique key`)
    }

    window.Components[lookupKey] = Component
}


