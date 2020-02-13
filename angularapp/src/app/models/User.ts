export interface User {
    firstName: string,
    lastName: string,
    email: string,
    isActive?: boolean,
    registered?: any,
    hide?: boolean
}

// o ? deixa o parametro opcional