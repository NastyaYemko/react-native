import { gql } from '@apollo/client'

export const CreateItem = gql`
    mutation createItem($title: String!, $description: String!) {
        createItem(createItemInput: {title: $title, description: $description}){
         itemId
         title
         description
         image
         createdAt
         updatedAt
         status
        }
    }
`

export const GetAllItems = gql`
    query items{
        items{
            itemId
            title
            description
            image
            createdAt
            updatedAt
            status
        }
    }
`

export const RemoveItem = gql`
    mutation removeItem($itemId: String!) {
        removeItem(itemId: $itemId)
    }
`
