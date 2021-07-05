export interface EachUser {
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    role: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website?: string;
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;
    }

}
