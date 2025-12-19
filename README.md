# Tax Calculator (React + TypeScript + Vite)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## API Configuration

The application centralizes its API configuration using a shared Axios instance to ensure consistency, scalability, and easier maintenance.

### Axios Instance

The Axios instance is defined in the following file:

```ts
src / api / config.ts;
import axios, { type AxiosInstance } from "axios";

const PORT = 5001;
const baseURL = `http://localhost:${PORT}`;

export const instanceDB: AxiosInstance = axios.create({ baseURL });
```

## Get Up & Running

In order to run the API locally, please follow these instructions:

```bash
docker pull ptsdocker16/interview-test-server
docker run --init -p 5001:5001 -it ptsdocker16/interview-test-server
```

Navigate to [http://localhost:5001](http://localhost:5001). You should be greeted with this set of instructions, and access to the different available endpoints. The following are the relevant endpoints:

- [/tax-calculator/tax-year/2022](/tax-calculator/tax-year/2022) - endpoint you'll be assessed against

If you have any problems or need any sort of clarification, email the engineering hiring manager for assistance.
