export interface Modulo {
    id:           string;
    practica:     string;
    introduccion: string;
    componentes:  Componente[];
    pasos:        Paso[];
    codigo:       string[];
}

export interface Componente {
    nombre:      string;
    descripcion: string;
}

export interface Paso {
    id:      string;
    montaje: string;
    paso:    string;
}

export interface Usuario {
    id:      number;
    usuario: string;
    email:   string;
}
