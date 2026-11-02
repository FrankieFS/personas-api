CREATE TABLE persona (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(40),
    apellido VARCHAR(40),
    esta_soltero BOOLEAN,
    fecha_nacimiento DATE 
)