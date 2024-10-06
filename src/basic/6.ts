type User = {
    name: string,
    age: number,
    email: string,
}

type UserAddress = {
    address: {
        city: string,
        country: string,
    }
}



const mango:User&UserAddress = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly:User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};