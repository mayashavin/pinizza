export const makePaymentPlugin = ({ options, store }) => {
    if (options.id !== 'cart') { return; }
    
    store.makePayment = (order) => {
        console.log('makePaymentPlugin: order', order);
    } 
}