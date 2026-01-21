type Info = {
    id: number;
    name: string;
    email: string;
}

type AdminInfos = Info & {
    role: string;
    lastLogin: Date;
}

type ExampleInfo = Info & AdminInfos & {
    religion: string;
    location: string;
}

export {type Info, type AdminInfos, type ExampleInfo}