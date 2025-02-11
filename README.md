This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 1. Setting Up a Next.js App
#### 1. Create a new Next.js project:
```
npx create-next-app@latest my-next-app
cd my-next-app
```

#### 2. Install dependencies: 
Navigate to your project directory and install the necessary dependencies: 
```
npm install
```

#### 3. Run the development server:
```
npm run dev
```

Open http://localhost:3000 in your browser to see the result.

## 2. Integrating NextAuth.js for Authentication
Follow this link to setup the next-auth:
https://authjs.dev/getting-started/installation?framework=next-js

#### 1. Install NextAuth.js: 
In your project directory, install NextAuth.js:
```
npm install next-auth@beta
```

#### 2. Setup Environment
```
npx auth secret
```

## 3. Configure
#### 1. Start by creating a new auth.ts file at the root of your app with the following content.

```
import NextAuth from "next-auth"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```
#### 2.Add a Route Handler under 
/app/api/auth/[...nextauth]/route.ts

```
import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
```

#### 3. Add optional Middleware to keep the session alive, this will update the session expiry every time its called.
 ```
 export { auth as middleware } from "@/auth"
 ```

 ## 4. Setup Authentication Methods
 #### Setup Link:  [Microsoft Entra Id](https://authjs.dev/getting-started/providers/microsoft-entra-id?framework=next-js)



