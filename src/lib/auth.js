// // src/lib/auth.js
// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import GoogleProvider from 'next-auth/providers/google'
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
// import clientPromise from './mongodb'
// import bcrypt from 'bcryptjs'

// // Mock users database
// const users = [
//   {
//     id: '1',
//     email: 'demo@example.com',
//     password: '$2a$10$8K1p/a0dRTlB0s7B7E8kO.5R5E5Z5X5Z5X5Z5X5Z5X5Z5X5Z5X5Z', // password: demo123
//     name: 'Demo User',
//     image: '',
//   },
// ]

// export const authOptions = {
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: 'credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email' },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           return null
//         }

//         const user = users.find(u => u.email === credentials.email)
        
//         if (user && await bcrypt.compare(credentials.password, user.password)) {
//           return {
//             id: user.id,
//             email: user.email,
//             name: user.name,
//             image: user.image,
//           }
//         }

//         return null
//       }
//     })
//   ],
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     async session({ session, token }) {
//       session.user.id = token.sub
//       return session
//     },
//   },
// }

// export default NextAuth(authOptions)