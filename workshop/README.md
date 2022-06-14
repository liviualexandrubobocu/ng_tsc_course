# Install @angular/cli

- `npm i -g @angular/cli`


# Create a new angular application 

- `ng new workshop`

# Create a new module

- `ng generate module moduleName`
- shorthand: `ng g m moduleName`

# Create a new component

- `ng generate component componentName`
- `ng g c componentName`
- `--module` flag will say where the component will be declared

# Create a new service

- `ng generate service serviceName`
- `ng g s serviceName`

# Create a new directive

- `ng generate directive directiveName`
- `ng g d directiveName`


# Defining types for TypeScript

class OrdersType {

}

type OrdersType = 'automatic' | 'manual';

interface OrdersType {
  type: string;
}


# JSON Server dependency

- `npm i -g json-server`

# Json Server start

- `json-server --watch db.json --port 3004`