    import { CookieUtil } from "./cookie.js";
    export let cart = {
        prods: [],
        // total:0
        total: CookieUtil.get("total")
    }

    export function AddToCart(keyboard){
         // cart.prods.forEach(p => {})
         if(cart.prods.productId.includes(keyboard.productId)){
            cart.prods.push(keyboard.productId)
            cart.prods.push({prod: keyboard, qty:0})            
            // CookieUtil.set(keyboard.productName,'')
        }
        for(let newProduct of cart.prods){
            // if(newProduct.prod.productId == keyboard.productId){
            //     newProduct.qty++
            //     cart.total++
            //     // CookieUtil.set(keyboard.productName,p.qty)
            //     // console.log(cart.prods,cart.total);
            //     CookieUtil.set(`${newProduct.prod.productName}`, newProduct.qty , Date(6000));
            //     CookieUtil.set("total",cart.total)
            // }
            if(newProduct.prod.productId == keyboard.productId){
                CookieUtil.set("total",++cart.total)
                CookieUtil.set(keyboard.productName,++newProduct.qty)
                // localStorage.setItem("CartNumber",cart.total++)
                console.log(cart.prods,cart.total);
            }
        };
    }
    // // cart.prods.forEach(p => {})
    // const prodInCart = new Map([]);
    // prodInCart.set("prods",cart.prods.prod.productId);
    // if((prodInCart.get("prods") != keyboard.productId)){
    //     cart.prods.push({prod: keyboard, qty:0})