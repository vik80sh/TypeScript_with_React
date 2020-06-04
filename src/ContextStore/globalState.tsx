import React, { useReducer} from 'react';
import ShopContext from './context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducerStore';

const GlobalState = (props: any) => {
    const products = [
        {
            id: 'p1',
            title: 'React 16.6',
            author: 'Loinel Lopez',
            price: '200',
            image: "https://images-na.ssl-images-amazon.com/images/I/41301Q9P5NL._SX331_BO1,204,203,200_.jpg",
            rating: 4.5,
            reviewers: 11220,
            discountPercent:10
        },
        {
            id: 'p2',
            title: 'Harry Potter',
            author: 'J.K Rowling',
            price: '300',
            image: "https://www.bookhousebd.com/assets/img/book/5a1a9581d36c3.jpg",
            rating: 4.9,
            reviewers: 321123,
            discountPercent:56
        },
        {
            id: 'p3',
            title: 'The girl without a name',
            author: 'Sandra Block',
            price: '240',
            image: "https://images.gr-assets.com/books/1437146774l/24488233.jpg",
            rating: 3.8,
            reviewers: 3422,
            discountPercent:43
        },
        {
            id: 'p4',
            title: 'The book of names',
            author: 'Jill Gregory',
            price: '343',
            image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1311999268l/1738185.jpg",
            rating: 3.6,
            reviewers: 1232,
            discountPercent:27,
        },
        {
            id: 'p5',
            title: 'The boy without a name',
            author: 'Daniel English',
            price: '621',
            image: "https://m.media-amazon.com/images/I/51TG3PQHi9L.jpg",
             rating: 4.7,
            reviewers: 123,
            discountPercent:51
        },
        {
            id: 'p6',
            title: 'Code Name of God',
            author: 'Mani Bhaumic',
            price: '261',
            image: "https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/code-name-god_FrontImage_809.jpg",
            rating: 3.4,
            reviewers: 5454,
            discountPercent:32
        },
        {
            id: 'p7',
            title: 'all The Light we can not see',
            author: 'Anthony Doerr',
            price: '221',
            image: "https://www.stylist.co.uk/images/app/uploads/2011/10/11131249/81v5wp2zeql.jpg?w=568&h=1&fit=max&auto=format%2Ccompress",
            rating: 2.9,
            reviewers: 5456,
            discountPercent:54
        },
        {
            id: 'p8',
            title: 'The Habbit',
            author: 'J.R.R. Tolkien',
            price: '450',
            image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/17/12/jhjka.jpg",
            rating: 4.5,
            reviewers: 676,
            discountPercent:22
        },
        {
            id: 'p9',
            title: 'A Pele View of the Hill',
            author: 'Kezao Ishiguro',
            price: '340',
            image: "https://savvytokyo.scdn3.secure.raxcdn.com/app/uploads/2018/01/1.-A-Pale-View-of-the-Hills-650x1024.jpg",
            rating: 4.2,
            reviewers: 2676,
            discountPercent:23
        },
        {
            id: 'p10',
            title: 'The End of the Loneliness',
            author: 'Benedict Wells',
            price: '340',
            image: "https://m.media-amazon.com/images/I/51fzOfwRwtL.jpg",
            rating: 3.5,
            reviewers: 976,
            discountPercent:32
        }
    ]
    const name = "Vikash";
    const [cartData, dispatch] = useReducer(shopReducer, { cart:[] });
  
    const addProductToCart = (product: object) => {
        dispatch({ type: ADD_PRODUCT, payload: product })

    }
    const removeProductFromCart = (product: any) => {
        dispatch({ type: REMOVE_PRODUCT, payload: product })

    }

    return (
        <ShopContext.Provider
            value={{
                products: products,
                cart: cartData.cart,
                name: name,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
}

export default GlobalState;