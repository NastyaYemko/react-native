import { gql } from '@apollo/client'

export const CreateUser = gql`
    mutation createUser($email: String!, $password: String!) {
        createUser(createUserInput: {email :$email, password: $password}){
         userId
         email
         description
         password
         name
         surname
         age
         phone
         address
         image
        }
    }
`


export const GetAllUsers = gql`
    query users{
        users{
            userId
            email
            description
            password
            name
            surname
            age
            phone
            address
            image
        }
    }
`

export const RemoveUser = gql`
    mutation removeUser($userId: String!) {
        removeUser(userId: $userId)
    }
`
