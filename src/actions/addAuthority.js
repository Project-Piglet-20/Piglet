export const addAuthority = (authority) => {
    return (dispatch, getstate, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('authority').add({
            ...authority,
        }).then(() => {
            dispatch({
                type: 'ADD_AUTHORITY',
                authority
            })
        }).catch(err => {
            dispatch({
                type: 'ADD_AUTHORITY_ERROR', 
                err
            });
        })
    }
};